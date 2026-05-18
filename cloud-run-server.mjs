import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize, sep } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";
import { fileURLToPath } from "node:url";

const rootDir = fileURLToPath(new URL(".", import.meta.url));
const clientDir = join(rootDir, "dist", "client");
const serverEntry = (await import("./dist/server/index.js")).default;
const port = Number.parseInt(process.env.PORT ?? "8080", 10);
const host = process.env.HOST ?? "0.0.0.0";

const mimeTypes = new Map([
  [".css", "text/css; charset=utf-8"],
  [".js", "text/javascript; charset=utf-8"],
  [".mjs", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"],
  [".svg", "image/svg+xml"],
  [".png", "image/png"],
  [".jpg", "image/jpeg"],
  [".jpeg", "image/jpeg"],
  [".gif", "image/gif"],
  [".webp", "image/webp"],
  [".ico", "image/x-icon"],
  [".woff", "font/woff"],
  [".woff2", "font/woff2"],
]);

function getStaticFilePath(pathname) {
  const decodedPath = decodeURIComponent(pathname);
  const normalizedPath = normalize(decodedPath).replace(/^([/\\])+/, "");
  const filePath = join(clientDir, normalizedPath);

  if (!filePath.startsWith(`${clientDir}${sep}`) && filePath !== clientDir) {
    return null;
  }

  if (!existsSync(filePath)) return null;
  const stats = statSync(filePath);
  return stats.isFile() ? { filePath, stats } : null;
}

function sendStaticFile(nodeResponse, filePath, stats, method) {
  const extension = extname(filePath);
  const contentType = mimeTypes.get(extension) ?? "application/octet-stream";
  const isImmutableAsset = filePath.includes(`${sep}assets${sep}`);

  nodeResponse.writeHead(200, {
    "content-type": contentType,
    "content-length": stats.size,
    "cache-control": isImmutableAsset
      ? "public, max-age=31536000, immutable"
      : "public, max-age=300",
  });

  if (method === "HEAD") {
    nodeResponse.end();
    return;
  }

  createReadStream(filePath).pipe(nodeResponse);
}

function getRequestBody(nodeRequest) {
  if (nodeRequest.method === "GET" || nodeRequest.method === "HEAD") {
    return undefined;
  }

  return Readable.toWeb(nodeRequest);
}

function getFetchHeaders(nodeHeaders) {
  const headers = new Headers();

  for (const [key, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      value.forEach((item) => headers.append(key, item));
    } else if (value !== undefined) {
      headers.set(key, value);
    }
  }

  return headers;
}

async function sendFetchResponse(nodeResponse, fetchResponse, method) {
  nodeResponse.statusCode = fetchResponse.status;
  fetchResponse.headers.forEach((value, key) => {
    nodeResponse.setHeader(key, value);
  });

  if (method === "HEAD" || !fetchResponse.body) {
    nodeResponse.end();
    return;
  }

  await pipeline(Readable.fromWeb(fetchResponse.body), nodeResponse);
}

const server = createServer(async (nodeRequest, nodeResponse) => {
  try {
    const requestUrl = new URL(nodeRequest.url ?? "/", `http://${nodeRequest.headers.host}`);

    if (requestUrl.pathname === "/healthz") {
      nodeResponse.writeHead(200, { "content-type": "text/plain; charset=utf-8" });
      nodeResponse.end("ok");
      return;
    }

    const staticFile = getStaticFilePath(requestUrl.pathname);
    if (staticFile) {
      sendStaticFile(
        nodeResponse,
        staticFile.filePath,
        staticFile.stats,
        nodeRequest.method ?? "GET",
      );
      return;
    }

    const fetchRequest = new Request(requestUrl, {
      method: nodeRequest.method,
      headers: getFetchHeaders(nodeRequest.headers),
      body: getRequestBody(nodeRequest),
      duplex: "half",
    });
    const fetchResponse = await serverEntry.fetch(fetchRequest, process.env, {});
    await sendFetchResponse(nodeResponse, fetchResponse, nodeRequest.method ?? "GET");
  } catch (error) {
    console.error(error);
    if (!nodeResponse.headersSent) {
      nodeResponse.writeHead(500, { "content-type": "text/plain; charset=utf-8" });
    }
    nodeResponse.end("Internal Server Error");
  }
});

server.listen(port, host, () => {
  console.log(`Neurvyn listening on ${host}:${port}`);
});
