---
layout: default
github-issues:
  bugs:
    title: Известные баги
    state: open
    lables:
      - bug
    template: bug_report.md
  idea:
    title: Идеи и предложения
    state: open
    lables:
      - idea
    template: idea.md
---

> Telepost помогает администраторам каналов сократить рутинную работу и сосредоточиться на производстве качественного контента. Здесь есть отложенные посты, визуальный редактор, совместная работа и многое другое. А главное, совершенно **бесплатно**!

Мини-портал создан в помощь пользователям сервиса [{{ site.telepost.site.name }}]({{ site.telepost.site.url }}). По всем вопросам лучше обращаться в [Телеграм-чат поддержки]({{ site.telepost.support-chat.url }}). У сервиса есть:
* [Веб-интерфейс]({{ site.telepost.web-app.url }})
* [Телеграм-бот]({{ site.telepost.bot.url }}) (но лучше использовать [свой персональный бот]({% link _posts/2019-04-26-personal-bot-for-telepost.md %}))

## Используй [FAQ]({% link faq/index.html %}), Люк!

Прежде всего прочитайте [FAQ]({% link faq/index.html %}) — наверняка там уже есть ответ на ваш вопрос. Для вашего удобства есть [поиск]({% link _pages/search.md %}) по всем страницам и постам на этом сайте. Также весь контент разбит на [категории]({% link _pages/categories.md %}) и, как правило, размечен [тегами]({% link _pages/tags.md %}). 

Не нашли ответа? Тогда смело заходите в [{{ site.telepost.support-chat.name }}]({{ site.telepost.support-chat.url }}) и спрашивайте там. 

Хотите добавить инструкцию? Можно также написать об этом в [{{ site.telepost.support-chat.name }}]({{ site.telepost.support-chat.url }}), или самостоятельно добавить пост через Pull Request в [этот репозиторий](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.username }}.github.io).

## Я нашел баг!

Сначала проверьте список уже известных багов (см. [список ниже](#{{ page.github-issues.bugs.title | url_encode }}) или [на Github](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues?q=is%3Aissue+is%3A{% for label in page.github-issues.bugs.lables %}+label%3A{{ label }}{% endfor %})). Не нашли ничего похожего? Тогда смело [добавляйте найденный баг](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues/new?assignees=&labels={{ page.github-issues.bugs.lables | join: "," }}&template={{ page.github-issues.bugs.template }}) самостоятельно, либо напишите в [{{ site.telepost.support-chat.name }}]({{ site.telepost.support-chat.url }}).

## У меня есть идея / предложение

Возможно вас опередили и такая идея уже была добавлена в [общий список](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues?q=is%3Aissue+is%3A{% for label in page.github-issues.idea.lables %}+label%3A{{ label }}{% endfor %}) (можно [глянуть ниже](#{{ page.github-issues.idea.title | url_encode }})). Нет? Тогда вам [сюда](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues/new?assignees=&labels={{ page.github-issues.idea.lables | join: "," }}&template={{ page.github-issues.idea.template }}).

---

{% if site.github-issues %}
<script src="{{ site.baseurl }}/assets/jquery-3.5.1.min.js" type="text/javascript"></script>
<script src="{{ site.baseurl }}/assets/showdown-1.9.1.min.js" type="text/javascript"></script>
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