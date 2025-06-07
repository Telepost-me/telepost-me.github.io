<!-- markdownlint-disable-next-line MD033 -->
# <a href="https://telepost.me/">Telepost</a> <img src="static/assets/telepost_icon-194x194.png" alt="Telepost logo" align="right" />

[![Linters](https://github.com/Telepost-me/telepost-me.github.io/actions/workflows/linters.yml/badge.svg)](https://github.com/Telepost-me/telepost-me.github.io/actions/workflows/linters.yml)
[![Pages Deploy](https://github.com/Telepost-me/telepost-me.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/Telepost-me/telepost-me.github.io/actions/workflows/deploy.yml)
[![Telepost Support — чат](https://shields.io/badge/Telepost-Чат-green?logo=telegram&style=social)](https://t.me/joinchat/Ypg01CdfpW5jNWFi)

<!-- markdownlint-capture -->
<!-- markdownlint-disable MD033 -->
<p align="center">
   <a href="README.md">🇷🇺 Русский</a> | <a href="README.en.md">🇺🇸 English</a>
</p>
<!-- markdownlint-restore -->

**Лучший отложенный постинг для Телеграм!**

Telepost помогает администраторам каналов сократить рутинную работу и сосредоточиться на производстве качественного контента. Здесь есть отложенные посты, визуальный редактор, совместная работа и многое другое. А главное — это совершенно **бесплатно**!

## FAQ

Прежде, чем задавать вопрос — [прочти FAQ](https://telepost-me.github.io/)!

## Поддержка

- [Телеграм-чат](https://t.me/joinchat/Ypg01CdfpW5jNWFi)
- [Известные баги](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Abug)
- [Список идей](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Aidea)

## Запуск сайта

Для запуска и проверки сайта локально потребуется только [Docker Compose](https://docs.docker.com/compose/).

### Подготовка

Установите [Docker Desktop](https://docs.docker.com/desktop/) (Docker Engine и Docker Compose — идут "в коробке").

При необходимости вы можете (если это действительно нужно) переменные для сервисов [docker-compose.yml](./docker-compose.yml) в файле [`.env`](./.env).

### Запуск

- Запустите сайт с помощью Docker Compose командой: `make site-start` или просто `make`
  - Для проверки поиска и перевода (i18n) — необходимо запустить сайт в режиме `serve` (но при этом фукнция live reload не будет работать): `make site-serve`
- Откройте сайт по адресу: <http:/localhost:3000/>

## Линтеры

Не забывайте прогонять линтеры после внесения изменений! Запустить сразу все линтеры можно командой: `make lint`

### YAML lint

- Запустите проверку правильности синтаксиса YAML (используется [yamllint](https://yamllint.readthedocs.io/en/stable/)) с помощью Docker Compose командой: `make yaml-lint`

### Markdown lint

- Запустите проверку правильности синтаксиса Markdown (используется [markdownlint-cli](https://www.npmjs.com/package/markdownlint-cli)) с помощью Docker Compose командой: `make markdownlint-lint`

## Автор

По всем вопросам: [@Nikolaev-RD](https://github.com/nikolaev-rd)
