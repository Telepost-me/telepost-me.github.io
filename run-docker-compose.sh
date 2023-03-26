#!/bin/bash

echo "Cleanup: remove static site folder and metadata..."
rm -rf _site .jekyll-metadata Gemfile.lock

echo "Launch site: Docker Compose..."
docker-compose up
