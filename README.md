# <a href="https://telepost.me/">Telepost</a> <img src="images/telepost_icon-194x194.png" alt="Telepost logo" align="right" />

[![GitHub Super-Linter](https://github.com/Telepost-me/telepost-me.github.io/workflows/Linters/badge.svg)](https://github.com/marketplace/actions/super-linter)
[![pages-build-deployment](https://github.com/Telepost-me/telepost-me.github.io/actions/workflows/pages/pages-build-deployment/badge.svg?event=deployment_status)](https://github.com/Telepost-me/telepost-me.github.io/actions/workflows/pages/pages-build-deployment)
[![Hits](https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FTelepost-me%2Ftelepost-me.github.io&count_bg=%2379C83D&title_bg=%23555555&icon=telegram.svg&icon_color=%23F5F5F5&title=hits&edge_flat=false)](https://hits.seeyoufarm.com)
[![Telepost Support — чат](https://shields.io/badge/Telepost-Чат-green?logo=telegram&style=social)](https://t.me/joinchat/Ypg01CdfpW5jNWFi)

<p align="center">
   <a href="README.md">🇷🇺 Русский</a> | <a href="README.en.md">🇺🇸 English</a>
</p>

**Лучший отложенный постинг для Телеграм!**

Telepost помогает администраторам каналов сократить рутинную работу и сосредоточиться на производстве качественного контента. Здесь есть отложенные посты, визуальный редактор, совместная работа и многое другое. А главное — это совершенно **бесплатно**!

## FAQ

Прежде, чем задавать вопрос — [прочти FAQ](https://telepost-me.github.io/faq)!

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

- Запустите сайт с помощью Docker Compose командой: `make site` или просто `make`
- Откройте сайт по адресу: <http:/localhost:4000/>

## Линтеры

Не забывайте прогонять линтеры после внесения изменений! Запустить сразу все линтеры можно командой: `make lint`

### YAML lint

- Запустите проверку правильности синтаксиса YAML (используется [yamllint](https://yamllint.readthedocs.io/en/stable/)) с помощью Docker Compose командой: `make yaml-lint`

### HTML Proofer

- Запустите проверку валидности HTML-кода (используется [HTML Proofer](https://github.com/gjtorikian/html-proofer)) с помощью Docker Compose командой: `make html-proofer`
- Посмотрите на ошибки в выводе (если есть) и исправьте их!

## Автор

По всем вопросам: [@Nikolaev-RD](https://github.com/nikolaev-rd)
