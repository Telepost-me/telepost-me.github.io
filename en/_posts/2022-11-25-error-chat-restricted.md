---
layout: post
title: Error CHAT_RESTRICTED
excerpt: Check the bot permissions, or chat is blocked
lang: en
tags: [Instruction, Error]
category: FAQ
---

Sometimes when trying to publish a post to a chat, a `CHAT_RESTRICTED` error may appear:

![image](https://user-images.githubusercontent.com/24430718/204044340-101d1dc8-6963-47f0-b8c2-d09b04f5a3e4.jpg)

The [Telegram Documentation](https://core.telegram.org/method/messages.sendMessage) gives the following description:
> You can't send messages in this chat, you were restricted.

In such cases, you should check:

* is the chat blocked by Telegram itself
* chat bot rights

If everything is in order, then you can try switching connected bots in the web interface: switch to the system bot [{{ site.telepost.bot.name }}]({{ site.telepost.bot.url }}), and then return back to a custom bot (or vice versa if you have a system bot by default).

It is recommended to use your own custom bot, how to connect it — read in [this instruction](2019-04-26-personal-bot-for-telepost.md).
