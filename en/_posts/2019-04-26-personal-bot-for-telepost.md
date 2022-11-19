---
layout: post
title: How to connect my bot to Telepost?
excerpt: Please note that for correct work is best to use a new bot in Telepost, which is not connected with other services, such as ControllerBot, Combot and others.
lang: en
tags: [Instruction, Start, Bot]
category: FAQ
source:
  url: https://telegra.ph/Kak-podklyuchit-svoj-bot-v-Telepost-04-26
---

> Please note that for correct work is best to use a new bot in Telepost, which is not connected with other services, such as ControllerBot, Combot and others.

## Create bot

Send to official bot [@BotFather](https://t.me/BotFather) command `/start`. After that it reply the answer on English. Now send command `/newbot`:
![image](https://user-images.githubusercontent.com/24430718/106514143-f2936880-64e4-11eb-8073-257146c5970b.png)

[@BotFather](https://t.me/BotFather) will ask you to choose the name of the bot (any characters are allowed):
![image](https://user-images.githubusercontent.com/24430718/106514319-253d6100-64e5-11eb-90a2-bdbee67ffb3e.png)

It's time to choose a link (in other words — username) to this bot. It is required that the link ends with `bot` or `_bot`. Please note that it will be impossible to change the link (unlike the name)!
![image](https://user-images.githubusercontent.com/24430718/106514485-59188680-64e5-11eb-966d-b98e2aa87a7f.png)

Congratulations, your personal bot has been created! Now you need to connect it to Telepost.

If you still have questions about this step, please use [more detailed instructions](https://www.hashtap.com/@obzorchik.plus/создаём-бота-в-telegram-rWNgL7Dvwd0v).

## Connecting a bot to Telepost

Go to [{{ site.telepost.bot.name }}]({{ site.telepost.bot.url }}) and send the command `/addbot`:
![image](https://user-images.githubusercontent.com/24430718/106514765-bc0a1d80-64e5-11eb-82e4-c33a541f3037.png)

Forward to [{{ site.telepost.bot.name }}]({{ site.telepost.bot.url }}) token, which your get from [@BotFather](https://t.me/BotFather):
![image](https://user-images.githubusercontent.com/24430718/106514986-0be8e480-64e6-11eb-98b9-b777d17896f1.png)

## Done

The bot was created and added to Telepost. Now add this bot to the admins of the channel where you want to publish posts. See [step #2 here](2019-04-26-getting-started.md) for how to do this.
