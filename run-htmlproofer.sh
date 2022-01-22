#!/bin/bash

IMAGE_NAME="jekyll-site"

echo "Rebuild html site from sources..."
docker build -t ${IMAGE_NAME} .

echo "Run HTMLProofer "
docker run --rm -it ${IMAGE_NAME} --check-html --disable-external
