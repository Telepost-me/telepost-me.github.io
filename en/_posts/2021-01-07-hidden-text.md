---
layout: post
title: How to make a "Hidden Continue"?
excerpt: You can hide under the button some text, which will be seen only by channel subscribers.
lang: en
tags: [Instruction, Post, Text]
category: FAQ
source:
  url: https://telegra.ph/Kak-dobavit-knopku-skrytogo-prodolzheniya-02-27-2
---

In order to motivate users to subscribe to your channel, you can intrigue them with hidden text. The user can just go in, see what is needed and forget to subscribe. The <kbd>Hidden Continue</kbd> button solves this problem.

When you click on the button, the text will be visible to the channel subscribers, and to those who are not subscribed to the channel — a message (specified by you) about the need to subscribe:

![image](https://user-images.githubusercontent.com/24430718/107146681-c0f22580-695a-11eb-86eb-c206a5ba2201.png)

When clicking on the button, the subscriber sees the text:

![image](https://user-images.githubusercontent.com/24430718/107146733-03b3fd80-695b-11eb-8f13-8808fbbbd7fd.png)

If the user is **not** subscribed to the channel, then user sees, for example, the following message:

![image](https://user-images.githubusercontent.com/24430718/107146744-16c6cd80-695b-11eb-9372-8d94d16416b7.png)

How to do it?

In a post with type "Text", click <kbd>Hidden continue</kbd>:

![image](https://user-images.githubusercontent.com/24430718/107146756-2e05bb00-695b-11eb-9459-e874ee18d90a.png)

You can fill in at your own discretion:

![image](https://user-images.githubusercontent.com/24430718/107146763-3bbb4080-695b-11eb-8399-de95b3df5206.png)

For example, like this:

![image](https://user-images.githubusercontent.com/24430718/107146772-47a70280-695b-11eb-8e93-7964b431f549.png)

## Limitations

There are a few limitations that are important for you to be aware of. These limitations are related to the capabilities of the messenger itself, but we hope that Telegram will fix all this:

1. It makes no sense to insert a link into this button, because it will not be clickable.

2. The text that can be inserted into such a button cannot exceed 200 characters.

3. Buttons conflict with native comments that recently appeared in Telegram. That is, if you add a button, then [comments will disappear under the post](2021-01-01-telegram-comments.md).

4. Inline-buttons (the button <kbd>Hidden continue</kbd> - just like that) cannot be sent along with the post - when forwarding the post, such buttons disappear (exception: if there is only url-buttons under the post). In this case, you need to send the link to the post, and not forward the post itself.

## Statistics

To view statistics of button clicks, open the page with published posts — at the top above the post with a hidden continue there is an icon with statistics:

![image](https://user-images.githubusercontent.com/24430718/109558604-ad198980-7aea-11eb-8941-d010bd9486fb.png)

### What do the hidden continue statistics mean?

![image](https://user-images.githubusercontent.com/24430718/109558669-c3274a00-7aea-11eb-9ab3-897eb1e45988.png)

* **Clicks** - the total number of all clicks on the hidden continue button.

* **Unique** - unique users who clicked on the hidden continue button.

* **Subscribed** - the number of users who clicked subscribe after continuing.

* **Remaining** - the number of users from the list of subscribers after switching to the continue who are currently subscribed to the channel.

* **Not subscribed** - users who were not subscribed and did not subscribe after switching to a hidden continue.
