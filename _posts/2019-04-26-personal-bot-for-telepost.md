---
layout: post
title: Как подключить свой бот в Телепост?
excerpt: Обрати внимание, что для корректной работы лучше всего использовать в Телепосте новый бот, который не связан с другими сервисами, такими как ControllerBot, Combot и другие.
lang: ru
tags: [Инструкция, Старт, Бот]
category: FAQ
source:
  url: https://telegra.ph/Kak-podklyuchit-svoj-bot-v-Telepost-04-26
---

> Обратите внимание, что для корректной работы лучше всего использовать в Телепосте новый бот, который не связан с другими сервисами, такими как ControllerBot, Combot и др.

## Создание бота

Напиши официальному боту [@BotFather](https://t.me/BotFather) команду `/start`. После этого он выдаст ответ на английском. Смело пиши `/newbot`:
![image](https://user-images.githubusercontent.com/24430718/106514143-f2936880-64e4-11eb-8073-257146c5970b.png)

[@BotFather](https://t.me/BotFather) предложит выбрать тебе название бота (допускаются любые символы):
![image](https://user-images.githubusercontent.com/24430718/106514319-253d6100-64e5-11eb-90a2-bdbee67ffb3e.png)

Пришло время выбирать ссылку на этого бота. Необходимо, чтобы ссылка оканчивалась на `bot` или `_bot`. Учти, что ссылку поменять будет невозможно (в отличии от названия)!
![image](https://user-images.githubusercontent.com/24430718/106514485-59188680-64e5-11eb-966d-b98e2aa87a7f.png)

Поздравляем, ваш персональный бот создан! Теперь необходимо подключить его к Телепосту.

В случае, если у вас остались вопросы по этому шагу, воспользуйтесь [более подробной инструкцией](https://www.hashtap.com/@obzorchik.plus/создаём-бота-в-telegram-rWNgL7Dvwd0v).

## Подключение бота к Телепосту

Заходи в [{{ site.telepost.bot.name }}]({{ site.telepost.bot.url }}) и отправляй команду `/addbot`:
![image](https://user-images.githubusercontent.com/24430718/106514765-bc0a1d80-64e5-11eb-82e4-c33a541f3037.png)

Пересылай в [{{ site.telepost.bot.name }}]({{ site.telepost.bot.url }}) токен, который тебе выдал [@BotFather](https://t.me/BotFather):
![image](https://user-images.githubusercontent.com/24430718/106514986-0be8e480-64e6-11eb-98b9-b777d17896f1.png)

## Готово!

Бот создан и добавлен в Телепост. Теперь добавь этого бота в админы канала, в котором ты хочешь публиковать посты. Смотри [здесь пункт №2](2019-04-26-getting-started.md), чтобы узнать как это сделать.
