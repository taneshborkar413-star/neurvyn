# Deploy Neurvyn to Google Cloud Run

This repo includes a Cloud Run-ready `Dockerfile`. The container builds the TanStack Start app, serves static assets from `dist/client`, and sends all application routes through the built SSR worker entry.

## Prerequisites

- A Google Cloud project with billing enabled.
- The Google Cloud CLI installed and authenticated.
- Cloud Run, Cloud Build, and Artifact Registry APIs enabled.

## One-command source deploy

From the repo root:

```bash
gcloud config set project YOUR_PROJECT_ID
gcloud run deploy neurvyn \
  --source . \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

Cloud Run will build the Dockerfile and inject the runtime `PORT` environment variable automatically.

## Artifact Registry deploy

Use this if you want to build and push the container first:

```bash
gcloud config set project YOUR_PROJECT_ID
gcloud artifacts repositories create neurvyn \
  --repository-format=docker \
  --location=us-central1 \
  --description="Neurvyn website containers"

gcloud builds submit \
  --tag us-central1-docker.pkg.dev/YOUR_PROJECT_ID/neurvyn/website:latest

gcloud run deploy neurvyn \
  --image us-central1-docker.pkg.dev/YOUR_PROJECT_ID/neurvyn/website:latest \
  --region us-central1 \
  --allow-unauthenticated \
  --port 8080
```

## Local Docker test

```bash
docker build -t neurvyn-cloud-run .
docker run --rm -p 8080:8080 -e PORT=8080 neurvyn-cloud-run
```

Then open `http://localhost:8080`.

## Health check

The container exposes a lightweight health endpoint at:

```text
/healthz
```
