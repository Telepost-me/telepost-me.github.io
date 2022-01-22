# [Telepost](https://telepost.me/) <img src="images/telepost_icon-194x194.png" alt="Telepost logo" align="right" />
[![Build Status](https://travis-ci.com/Telepost-me/telepost-me.github.io.svg?branch=master)](https://travis-ci.com/Telepost-me/telepost-me.github.io)
[![Security](https://hakiri.io/github/Telepost-me/telepost-me.github.io/master.svg)](https://hakiri.io/github/Telepost-me/telepost-me.github.io/master)
[![Build status](https://ci.appveyor.com/api/projects/status/fae40em4uff3avkp/branch/master?svg=true)](https://ci.appveyor.com/project/nikolaev-rd/telepost-me-github-io/branch/master)
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
* [Телеграм-чат](https://t.me/joinchat/Ypg01CdfpW5jNWFi)
* [Известные баги](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Abug)
* [Список идей](https://github.com/Telepost-me/support/issues?q=is%3Aissue+is%3Aopen+label%3Aidea)

## Запуск и отладка сайта (Docker)

Для запуска и проверки сайта локально потребуется установить только [Docker Desktop](https://docs.docker.com/desktop/).

Запускаем:

* через Docker
   ```bash
   docker run --rm \
      --volume="$PWD:/srv/jekyll" \
      -p 4000:4000 \
      -p 35729:35729 \
      jekyll/jekyll jekyll serve --incremental --force_polling
   ```
   или просто запустите скрипт [`./run.sh`](run.sh)

* через Docker Compose (используется [docker-compose.yml](docker-compose.yml))
   ```bash
   docker-compose up
   ```

Ваш сайт должен быть доступен по адресу: http://127.0.0.1:4000/

## Линтер [HTMLProofer](https://github.com/gjtorikian/html-proofer)

После внесения всех изменений не забудьте прогнать линтер.

Билдим сайт из исходников и запускаем через Docker (используется файл [Dockerfile](Dockerfile)):
```bash
docker build -t jekyll-site .
docker run --rm -it jekyll-site --check-html --disable-external
```
или просто запустите скрипт [`./run-htmlproofer.sh`](run-htmlproofer.sh).

## Автор
По всем вопросам: [@Nikolaev-RD](https://github.com/nikolaev-rd)
