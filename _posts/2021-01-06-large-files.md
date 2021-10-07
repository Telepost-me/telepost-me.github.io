---
layout: post
title: Почему не загружаются файлы размером больше 50 МБ?
excerpt: Вкратце — это ограничение на стороне Телеграма, а не Телепоста
lang: ru
tags: [Пост, Документ]
category: FAQ
---

Это ограничение Телеграма, если точнее — [Telegram Bots API](https://core.telegram.org/bots/faq#how-do-i-upload-a-large-file):

> **How do I upload a large file?**
>
> Bots can currently send files of any type of up to 50 MB in size, so yes, very large files won't work for now. Sorry. This limit may be changed in the future.

Как это обойти?

Несмотря на ограничение для ботов, ограничение на загрузку файлов для пользователей на текущий момент: 2 ГБ.

Это означает, что вы как админ канала можете самостоятельно напрямую (не через бота) загрузить в пост файл размером до 2 ГБ.
Еще, как вариант, можно загрузить файл на какой-либо внешний ресурс, а в посте просто добавить ссылку на загруженный файл.
