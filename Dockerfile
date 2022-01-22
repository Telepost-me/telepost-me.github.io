# Build image for linting purpose only!

FROM jekyll/jekyll as jekyll
COPY . /srv/jekyll
RUN jekyll build

FROM klakegg/html-proofer as html-proofer
COPY --from=jekyll /srv/jekyll/_site /src
