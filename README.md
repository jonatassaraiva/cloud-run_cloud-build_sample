# Cloud Run and Cloud Build
API NODE.JS sample with Google Cloud Run and Google Cloud Build

## Cloud Run
Cloud Run is a fully managed compute platform that enables you to run stateless containers that are invocable via HTTP requests and a Cloud Run is serverless: it abstracts away all infrastructure management, so you can focus on what matters most — building great applications. More information: https://cloud.google.com/run/docs

## Cloud Build
Cloud Build is a service that runs your builds on Google Cloud. You can import your source code from Cloud Source Repositories, GitHub, or Bitbucket, and perform a build to your specifications in a series of build steps. More information: https://cloud.google.com/cloud-build/docs

## About this project
This project is a simple code in NODE.JS that uses Cloud Run to host an API and Cloud Build for CI and CD. 

# Step by Step to use this sample

## 1 - Requirements
* Account Google Cloud - https://console.cloud.google.com
* Google Cloud Command Line - https://cloud.google.com/sdk/docs

## 2 - Containerizing an app and uploading it to Container Registry
* To containerize your API, you need create a Dockerfile in the same directory as the source files. The `Dockerfile` contains the instructions for creating the a node.js container, and the `.dockerignore` is used to ensure that local files and non-required files do not affect the compile process of the container.
* To build container image using Cloud Build, running the following command from the directory containing the Dockerfile:

      gcloud builds submit --tag gcr.io/[project-id]/sample-api-nodejs

* Upon success, the image is stored in Container Registry and can be re-used if desired.

      gcloud beta run deploy --image gcr.io/[project-id]/sample-api-nodejs`



## NOTES

* Cloud Run is beta product and available on region us-central1 and If you received this error "Unsupported region us-east1", executed the command:

      > gcloud config set run/region us-central1