---
layout: post
title: Repeated post
excerpt: Republishing a post at regular intervals.
lang: en
tags: [Instruction, Post, Web UI]
category: FAQ
source:
  url: https://t.me/telepost_blog/38
---

This is a function that allows you to republish the same post with a certain frequency (for example: once an hour, once a day, once a week, every 2 hours, etc.).

**Attention:** the function is available only in the [web version]({{ site.telepost.web-app.url }}) (via the [bot]({{ site.telepost.bot.url }}) you cannot, but [wish already exist](https://github.com/Telepost-me/support/issues/39))!

To create an auto-publication you need:

* in the post settings, open the "Repeat publication" section:
  ![image](https://user-images.githubusercontent.com/24430718/126070159-8f4a327b-6b8c-4669-b707-89436a22a269.png)

* further in the auto-publication settings, select the repetition period in the [cron](https://en.wikipedia.org/wiki/Cron)-style (if you find it difficult to understand what to specify, use the resource [crontab.guru](https://crontab.guru), or see [examples below](#examples)):
  ![image](https://user-images.githubusercontent.com/24430718/126074407-a20cfe1d-2fed-46a0-8c83-19367778ecf6.png)

* check the result in the next. step "List of dates":
  ![image](https://user-images.githubusercontent.com/24430718/126080926-1bf5b5cb-dd00-4246-be11-81bb4598fdd0.png)

## Limitations

* No more than 100 repetitions of one post
* Schedule no more than 3 months in advance

## Examples

* Every day at 10:00 (schedule one week ahead, 07/19/2021 — 07/26/2021):
  ![image](https://user-images.githubusercontent.com/24430718/126081296-72fd5bc6-44ca-4ec7-9647-c5a1d17e5aec.png)
  ![image](https://user-images.githubusercontent.com/24430718/126081158-b163cacf-f31b-4d2b-a7fd-1ea3f95b1ae5.png)

* Every 3 days at 12:00 (schedule until the end of the month, 07/19/2021 — 07/31/2021):
  ![image](https://user-images.githubusercontent.com/24430718/126081244-2b79d6c2-4153-46bd-85b8-c9dafbee9f31.png)

  ![image](https://user-images.githubusercontent.com/24430718/126081209-09daf9c8-fc48-471d-81b2-b32a3485db77.png)

* Every week on Monday and Wednesday at 13:00 (schedule 2 weeks ahead, 07/19/2021 — 08/02/2021):
  ![image](https://user-images.githubusercontent.com/24430718/126081352-1b62ddeb-2f0c-4c70-993a-37a22e65c2f0.png)
  ![image](https://user-images.githubusercontent.com/24430718/126081367-a30c3a38-609c-4867-b75d-d06b35f01c42.png)

* Every hour from 10:00 to 20:00 (scheduled 2 days in advance, 07.19.2021 — 07.20.2021):
  ![image](https://user-images.githubusercontent.com/24430718/126081521-2dcd5f46-8b2e-47d3-bebe-2cee9aa8c868.png)
  ![image](https://user-images.githubusercontent.com/24430718/126081578-47c748a5-3d85-452c-a9f4-e4cf421af7ee.png)

* Every 2 hours from 10:00 to 20:00 (schedule 2 days ahead, 07/19/2021 — 07/20/2021):
  ![image](https://user-images.githubusercontent.com/24430718/126081677-23bdb313-fa79-40bf-886d-856abb08a80e.png)
  ![image](https://user-images.githubusercontent.com/24430718/126082153-41175d22-0ddb-4397-8bf1-a3c1ed2fecb9.png)

## Note

Technically, automatic republishing work by copying your original post at the time of republishing. Several nuances follow from this:

* the posts-repetitions will not be visible in the calendar of posts, only the original post
* in case of failure at the time of publication post-repetition, this post may not published (there will be a gap in the repeating schedule)
