---
layout: post
title: Why can't I add buttons to the album?
excerpt: In short, this is a limitation on the Telegram side (Bot API)
lang: en
tags: [Instruction]
category: FAQ
---

Telegram Bot API [does not allow](https://stackoverflow.com/questions/77346519/telethon-how-send-album-with-button) attaching buttons (link buttons and reaction buttons) to albums / grouped media files ("for internal reasons").

## Solution

There are workarounds:

* when creating a post with an album, click the <kbd>MORE</kbd> button, and essentially add a second post (the posts will be published in the specified sequence and will not be mixed up when published), for example:
  * with the "Text" post type, and write something there in addition to the first part of the post with the album, and attach buttons to this post
  * with the "Photo" post type, and add one picture there (the last one from the original album), and attach buttons to this post
* if you wanted to publish an album of pictures, then you can merge them into one picture (make a collage), and make a post with the "Photo" type; the difference will be minimal, because when publishing an album, the pictures look together like the same collage, although this may change on different devices, and you won't be able to view the pictures separately.