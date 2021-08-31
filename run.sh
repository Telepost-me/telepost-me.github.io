#!/bin/bash
set -e

echo
echo "● Install HTMLProofer..."
gem install --user-install html-proofer

echo
echo "● Build jekyll site..."
bundle exec jekyll build

echo
echo "● Linting site..."
htmlproofer ./_site --disable-external --check-html

echo
echo "● Launch jekyll site..."
bundle exec jekyll serve
