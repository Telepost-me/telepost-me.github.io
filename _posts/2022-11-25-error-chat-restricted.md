---
layout: post
title: Ошибка CHAT_RESTRICTED
excerpt: Проверьте права бота, и не заблокирован ли чат
lang: ru
tags: [Инструкция, Ошибка]
category: FAQ
---

Иногда при попытке публикации поста в чат может появиться ошибка `CHAT_RESTRICTED`:

![image](https://user-images.githubusercontent.com/24430718/204044340-101d1dc8-6963-47f0-b8c2-d09b04f5a3e4.jpg)

[Документация Телеграм](https://core.telegram.org/method/messages.sendMessage) дает такое описание:
> You can't send messages in this chat, you were restricted.

В таких случаях следует проверить:

* не заблокирован ли чат самим Телеграмом
* права бота в чате

Если всё в порядке, то можно попробовать переключить подключенных ботов в веб-интерфейсе: переключить на системного бота [{{ site.telepost.bot.name }}]({{ site.telepost.bot.url }}), а потом вернуть обратно кастомного бота (или наоборот, если у вас по умолчанию используется системный бот).

Рекомендуется использовать свой кастомный бот, как его подключить — читайте в [этой инструкции](2019-04-26-personal-bot-for-telepost.md).
