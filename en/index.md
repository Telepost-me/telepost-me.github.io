---
layout: default
lang: en
github-issues:
  bugs:
    title: Known bugs
    state: open
    lables:
      - bug
    template: bug.yml
  idea:
    title: Ideas and suggestions
    state: open
    lables:
      - idea
    template: idea.yml
---

> Telepost helps channels administrators cut down on routine work and focus on producing quality content. It has deferred posts, a visual editor, collaboration, and more. And most importantly, completely **free**!

<iframe class="status-page" src="https://telepost.instatus.com/embed-status/light-sm" width="230" height="41" frameBorder="0" scrolling="no" style="border: none;"></iframe>

The mini-portal was created to help users of the service [{{ site.telepost.site.name }}]({{ site.telepost.site.url }}). For all questions, it is better to contact the [Support chat in Telegram]({{ site.telepost.support-chat.url }}). The service has:

* [Web UI]({{ site.telepost.web-app.url }})
* [Telegram bot]({{ site.telepost.bot.url }}) (but it's better to use [you own bot](_posts/2019-04-26-personal-bot-for-telepost.md))

## Troubleshooting

If you do not see pictures in the Web UI of Telepost, or, conversely, pictures are not loaded into the post through the Web UI - [check on a special page](_pages/check.md) for any blocked important resources.

For other problems while working with the Web UI, first try:

* clear site cache / open site in incognito mode
* clear cookies
* open the site in another browser / mobile

Sometimes errors may occur while writing/editing a post through the Web UI. In this case, try to start writing a post from scratch (recreating a post).

## Use [FAQ](_pages/faq.md), Luke!

Did the tips above help you? Don't despair and read the [FAQ](_pages/faq.md) — for sure there is already an answer for your question. For your convenience, there is [search](_pages/search.md) through all pages and posts on this site. Also, all content is organized into [categories](_pages/categories.md) and often is labeled with [tags](_pages/tags.md).

Didn't find the answer? Then feel free to go to [{{ site.telepost.support-chat.name }}]({{ site.telepost.support-chat.url }}) and ask your question there.

<!-- markdownlint-disable-next-line -->
Want to add instructions? You can also notify about it in [{{ site.telepost.support-chat.name }}]({{ site.telepost.support-chat.url }}), or add a post yourself — create Pull Request to [this repository](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.username }}.github.io).

## I found a bug!

<!-- markdownlint-disable-next-line -->
First check the list of known bugs (see [list below](#{{ page.github-issues.bugs.title | url_encode }}){:data-proofer-ignore=''} or [on Github](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues?q=is%3Aissue+is%3Aopen{% for label in page.github-issues.bugs.lables %}+label%3A{{ label }}{% endfor %})). Didn't find anything similar? Then feel free to [add founded bug](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues/new?assignees=&labels={{ page.github-issues.bugs.lables | join: "," }}&template={{ page.github-issues.bugs.template }}) yourself, or write to [{{ site.telepost.support-chat.name }}]({{ site.telepost.support-chat.url }}).

## I have an idea / suggestion

<!-- markdownlint-disable-next-line -->
Perhaps you were ahead of you and similar idea has already been added to the [ideas list](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues?q=is%3Aissue+is%3Aopen{% for label in page.github-issues.idea.lables %}+label%3A{{ label }}{% endfor %}) (you can [look below](#{{ page.github-issues.idea.title | url_encode }}){:data-proofer-ignore=''}). No? Then you can go [here](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues/new?assignees=&labels={{ page.github-issues.idea.lables | join: "," }}&template={{ page.github-issues.idea.template }}).

---

{% if site.github-issues %}
<script src="{{ site.baseurl }}/assets/jquery-3.5.1.min.js" type="text/javascript"></script>
<script src="{{ site.baseurl }}/assets/github-issues.js" type="text/javascript"></script>

<div class="github-issues"></div>
<script>
  githubIssues(
    "{{ site.github-issues.username }}",
    "{{ site.github-issues.repo }}",
    "{{ page.github-issues.bugs.state }}",
    {{ page.github-issues.bugs.lables | jsonify }},
    "{{ page.github-issues.bugs.title }}"
  );

  githubIssues(
    "{{ site.github-issues.username }}",
    "{{ site.github-issues.repo }}",
    "{{ page.github-issues.idea.state }}",
    {{ page.github-issues.idea.lables | jsonify }},
    "{{ page.github-issues.idea.title }}"
  );
</script>
{% endif %}
