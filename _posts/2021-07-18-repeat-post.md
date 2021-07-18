---
layout: post
title: Автопубликация поста
excerpt: "Повторная публикация поста с определенной периодичностью"
tags: [Инструкция, Пост, Веб-версия]
category: FAQ
source:
  url: https://t.me/telepost_blog/38
---

Это функция, позволяющая повторно публиковать один и тот же пост с опреденной периодичность (например: раз в час, раз в сутки, раз в неделю, каждые 2 часа, и т.д.).

**Внимание:** функция доступна только в [веб-версии]({{ site.telepost.web-app.url }}) (через [бота]({{ site.telepost.bot.url }}) нельзя, но [хотелка записана](https://github.com/Telepost-me/support/issues/39))!

Для настройки автопубликации нужно:

* в настройках поста выбрать раздел "Повтор публикации":
  ![image](https://user-images.githubusercontent.com/24430718/126070159-8f4a327b-6b8c-4669-b707-89436a22a269.png)

* далее в настройках автопубликации выбрать период повторения в [cron](https://ru.wikipedia.org/wiki/Cron)-стиле (если вам сложно понять, что указывать — воспользуйтесь ресурсом [crontab.guru](https://crontab.guru), или посмотрите [примеры ниже](#примеры)):
  ![image](https://user-images.githubusercontent.com/24430718/126074407-a20cfe1d-2fed-46a0-8c83-19367778ecf6.png)

* проверьте результат в след. шаге "Список дат":
  ![image](https://user-images.githubusercontent.com/24430718/126080926-1bf5b5cb-dd00-4246-be11-81bb4598fdd0.png)


## Ограничения

* Не больше 100 повторов одного поста
* Расписание не дальше 3-х месяцев вперед


## Примеры

* Каждый день в 10:00 (расписание на неделю вперед, 19.07.2021 — 26.07.2021):
  ![image](https://user-images.githubusercontent.com/24430718/126081296-72fd5bc6-44ca-4ec7-9647-c5a1d17e5aec.png)
  ![image](https://user-images.githubusercontent.com/24430718/126081158-b163cacf-f31b-4d2b-a7fd-1ea3f95b1ae5.png)

* Каждые 3 дня в 12:00 (расписание до конца месяца, 19.07.2021 — 31.07.2021):
  ![image](https://user-images.githubusercontent.com/24430718/126081244-2b79d6c2-4153-46bd-85b8-c9dafbee9f31.png)

  ![image](https://user-images.githubusercontent.com/24430718/126081209-09daf9c8-fc48-471d-81b2-b32a3485db77.png)

* Каждую неделю в понедельник и среду в 13:00 (расписание на 2 недели вперед, 19.07.2021 — 02.08.2021):
  ![image](https://user-images.githubusercontent.com/24430718/126081352-1b62ddeb-2f0c-4c70-993a-37a22e65c2f0.png)
  ![image](https://user-images.githubusercontent.com/24430718/126081367-a30c3a38-609c-4867-b75d-d06b35f01c42.png)

* Каждый час с 10:00 до 20:00 (расписаниена на 2 дня вперед, 19.07.2021 — 20.07.2021):
  ![image](https://user-images.githubusercontent.com/24430718/126081521-2dcd5f46-8b2e-47d3-bebe-2cee9aa8c868.png)
  ![image](https://user-images.githubusercontent.com/24430718/126081578-47c748a5-3d85-452c-a9f4-e4cf421af7ee.png)

* Каждые 2 часа с 10:00 до 20:00 (расписание на на 2 дня вперед, 19.07.2021 — 20.07.2021):
  ![image](https://user-images.githubusercontent.com/24430718/126081677-23bdb313-fa79-40bf-886d-856abb08a80e.png)
  ![image](https://user-images.githubusercontent.com/24430718/126082153-41175d22-0ddb-4397-8bf1-a3c1ed2fecb9.png)


## Примечание

Технически автоматический повтор публикации выполняется путем копирования вашего исходного поста в момент повторной публикации. Из этого следует несколько нюансов:
* в календаре посты-повторы не будут видны в календаре постов, только исходный пост
* в случае сбоя в момент публикации поста-повтора, такой пост может не выйти (будет пропуск)
