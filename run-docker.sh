#!/bin/bash

echo "Cleanup: remove static site folder and metadata..."
rm -rf _site .jekyll-metadata Gemfile.lock

echo "Launch site in Docker container..."
docker run --rm \
    --volume="$PWD:/srv/jekyll" \
    -p 4000:4000 \
    -p 35729:35729 \
    jekyll/jekyll jekyll serve --incremental --force_polling
