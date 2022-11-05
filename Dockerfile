# Build image for linting purpose only!

FROM jekyll/jekyll:3.8.6 as jekyll
COPY . /srv/jekyll
RUN jekyll build

FROM klakegg/html-proofer as html-proofer
COPY --from=jekyll /srv/jekyll/_site /src
