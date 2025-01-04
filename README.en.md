# <a href="https://telepost.me/">Telepost</a> <img src="images/telepost_icon-194x194.png" alt="Telepost logo" align="right" />

[![GitHub Super-Linter](https://github.com/Telepost-me/telepost-me.github.io/workflows/Linters/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![Build Status](https://travis-ci.com/Telepost-me/telepost-me.github.io.svg?branch=master)](https://travis-ci.com/Telepost-me/telepost-me.github.io)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FTelepost-me%2Ftelepost-me.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=telegram.svg&icon_color=%23F5F5F5&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![Telepost Support — chat](https://shields.io/badge/Telepost-Чат-green?logo=telegram&style=social)](https://t.me/joinchat/Ypg01CdfpW5jNWFi)

<p align="center">
   <a href="README.md">🇷🇺 Русский</a> | <a href="README.en.md">🇺🇸 English</a>
</p>

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

- Run site via Docker Compose: `make site` or just `make`
- Open you site: <http:/localhost:4000/>

## Linters

Don't forget to run linters after making changes! Run all linters: `make lint`

### YAML lint

- Run [yamllint](https://yamllint.readthedocs.io/en/stable/) via Docker: `make yaml-lint`

### HTML Proofer

- Run [HTML Proofer](https://github.com/gjtorikian/html-proofer) via Docker Compose: `make html-proofer`
- Check output errors (if exist) and fix it!

## Author

- [@Nikolaev-RD](https://github.com/nikolaev-rd)
