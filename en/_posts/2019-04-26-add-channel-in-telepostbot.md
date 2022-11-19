---
layout: post
title: How to add channel/chat to Telepost?
excerpt: Add bot to Administrators → Connect channel/chat to Telepost → Activate bot
lang: en
tags: [Instruction, Start, Bot]
category: FAQ
source:
  url: https://telegra.ph/Kak-podklyuchit-kanal-v-Telepostbot-04-26
---

> Important: your can't create posts through [{{ site.telepost.bot.name }}]({{ site.telepost.bot.url }}) (service bot), because purpose of this bot is to post publications from Web UI. Your need to create your own bot and add it to Administrators — [see here](2019-04-26-personal-bot-for-telepost.md) how to do it.

## Add bot as Administrator

Click on channel's name, go to "Channel Settings", then open "Administrators" and add here your personal bot:
![image](https://user-images.githubusercontent.com/24430718/106523003-91be5d00-64f1-11eb-8191-660547d33a9c.png)

To connect chat (group) — do the same in Group Settings.

## Connect channel/chat to Telepost

If your have public channel, forward to bot any message from channel. Also in case of public channel/group your can send their username to bot.

In case of private channel or group — your need to send to the bot channel/group ID accordingly. To find ID your can use bots:

* [@super_id_bot](https://t.me/super_id_bot) – in groups use command `/chat_id`
* [@myidbot](https://t.me/myidbot) – use command `/getid`

![image](https://user-images.githubusercontent.com/24430718/106523817-be26a900-64f2-11eb-8396-f31931dc63f0.png)

## Activate bot

Send to your personal bot message `/start`:
![image](https://user-images.githubusercontent.com/24430718/106523926-edd5b100-64f2-11eb-8600-408607e7346c.png)

If everyting was done right, then bot prompts you to create a post.
