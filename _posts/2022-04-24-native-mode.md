---
layout: post
title: Режим Native (бот)
excerpt: Используйте этот режим, если создаете и форматируете посты через бота
lang: ru
tags: [Инструкция, Бот]
category: FAQ
---

В случае, если у вас при создании/фоматировании поста черз бота вылезает примерно такая ошибка:
```
Character '(' is reserved and must be escaped with the preceding '\'
```
значит бот настроен на форматирование в режиме [Markdown](https://core.telegram.org/bots/api#markdownv2-style).

Для того, чтобы использовать нативное форматирование текста **только в текущем посте** в боте, сразу после добавления содержимого поста выберите <kbd>Native</kbd>:

![image](https://user-images.githubusercontent.com/24430718/164975067-37ce77cc-0db4-414c-a776-6c4eafca9714.png)

Для того, чтобы **всегда** использовать нативное форматирование текста поста в боте, как если бы вы форматировали обычное сообщение, то для этого необходимо переключить бота в Native-режим: <kbd>Настройки</kbd> → <kbd>Форматирование</kbd> → выберите <kbd>Native</kbd>:

![image](https://user-images.githubusercontent.com/24430718/164975146-8e0db81c-30b7-45a9-a4bf-5d34c309d2b7.png)
