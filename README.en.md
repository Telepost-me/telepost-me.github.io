<!-- markdownlint-disable-next-line MD033 -->
# <a href="https://telepost.me/">Telepost</a> <img src="static/img/telepost_icon-194x194.png" alt="Telepost logo" align="right" />

[![Linters](https://github.com/Telepost-me/telepost-me.github.io/actions/workflows/linters.yml/badge.svg)](https://github.com/Telepost-me/telepost-me.github.io/actions/workflows/linters.yml)
[![Pages Deploy](https://github.com/Telepost-me/telepost-me.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Telepost-me/telepost-me.github.io/actions/workflows/deploy.yml)
[![Telepost Support — чат](https://shields.io/badge/Telepost-Чат-green?logo=telegram&style=social)](https://t.me/joinchat/Ypg01CdfpW5jNWFi)

<!-- markdownlint-capture -->
<!-- markdownlint-disable MD033 -->
<p align="center">
   <a href="README.md">🇷🇺 Русский</a> | <a href="README.en.md">🇺🇸 English</a>
</p>
<!-- markdownlint-restore -->

**The best postponed posting for Telegram!**

Telepost helps channels administrators cut down on routine work and focus on producing quality content. It has deferred posts, a visual editor, collaboration, and more. And most importantly, completely **free**!

## FAQ

Before asking a question — [read the FAQ](https://telepost-me.github.io/faq)!

## Support

- [Telegram chat](https://t.me/joinchat/Ypg01CdfpW5jNWFi)
- [Known bugs](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Abug)
- [Ideas list](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Aidea)

## Launch site

Local site & linters can be launched via [Docker Compose](https://docs.docker.com/compose/).

### Prepare

Install [Docker Desktop](https://docs.docker.com/desktop/) (Docker Engine & Docker Compose — already included).

Then your can change (if needed) variables for [docker-compose.yml](./docker-compose.yml) services in file [`.env`](./.env).

### Launch

- Run site via Docker Compose: `make site-start` or just `make`
  - To test search and translation (i18n) - you need to run site in `serve` mode (but the "live reload" function will not work): `make site-serve`
- Open you site: <http:/localhost:3000/>

## Linters

Don't forget to run linters after making changes! Run all linters: `make lint`

### YAML lint

- Run [yamllint](https://yamllint.readthedocs.io/en/stable/) via Docker Compose: `make yaml-lint`

### Markdown lint

- Run [markdownlint-cli](https://www.npmjs.com/package/markdownlint-cli) via Docker Compose: `make markdownlint-lint`

## Author

- [@Nikolaev-RD](https://github.com/nikolaev-rd)
