---
layout: post
title: Error NOT_ADMIN_ANYMORE
excerpt: The user who connected the bot is no longer the channel admin
lang: en
tags: [Instruction, Error]
category: FAQ
---

In case the user connects the channel to the Telepost through the bot [{{ site.telepost.bot.name }}]({{ site.telepost.bot.url }}), and after that the user leaves the channel / stops being admin in it, then when you try to publish a post, you may receive a `NOT_ADMIN_ANYMORE` error.

## Solution

The user who connected the channel through the bot [{{ site.telepost.bot.name }}]({{ site.telepost.bot.url }}) needs to become an admin in the channel again. You also need to re-add the channel to the Telepost: do not delete the channel from the Telepost (otherwise the history of posts in the Telepost will disappear), but simply add it again.

It is also recommended to use your own custom bot, how to connect it - read in [this manual](2019-04-26-personal-bot-for-telepost.md).
