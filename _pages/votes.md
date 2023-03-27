---
layout: page
title: Голосование за идеи/баги
lang: ru
permalink: /votes/
---

<!-- markdownlint-disable MD034 -->

## Описание

Ниже — список идей и багов, отсортированный по голосам (работает на основе реакций в issues на Github): из общего кол-ва реакций вычитаются реакции 👎 и 😕 (считаются как негативные — голоса против). **Отображаются только issues, у которых есть хотя бы одна реакция** (кол-во всех голосов больше 0)!

В случае, если список ниже — пустой, или нужного issue нет в этом списке, то можно посмотреть отсортированный по реакциям список issues прямо на GitHub (нажимайте Sort, в выпадающем списке будет "Most reactions", и выбор реакции для сортировки). Пример для реакции "👍":

* [Идеи](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues?q=is%3Aissue+is%3Aopen{% for label in site.data.languages[page.lang].github-issues.idea.lables %}+label%3A{{ label }}{% endfor %}+sort%3Areactions-%2B1-desc)
* [Баги](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues?q=is%3Aissue+is%3Aopen{% for label in site.data.languages[page.lang].github-issues.bugs.lables %}+label%3A{{ label }}{% endfor %}+sort%3Areactions-%2B1-desc)

## Как проголосовать

Для того, чтобы отдать свой голос за ту или иную идею / багу (это поможет лучше понимать, что важнее пользователям), вам необходимо:

1. перейти на [Github на страницу issues](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues?q=is%3Aissue+is%3Aopen)
1. авторизоваться на GitHub под своим аккаунтом (заведите его, если нет)
1. открыть нужный issue и там под описанием issue поставить соответствующую реакцию

---

<script src="{{ site.baseurl }}/assets/jquery-3.5.1.min.js" type="text/javascript"></script>
<script src="{{ site.baseurl }}/assets/github-issues.js" type="text/javascript"></script>

<div class="github-issues"></div>

<script>
  githubIssuesReactions(
    "{{ site.github-issues.username }}",
    "{{ site.github-issues.repo }}",
    {{ site.github-issues.idea.lables | jsonify }},
    "{{ site.data.languages[page.lang].github-issues.idea.title }}"
  );

  githubIssuesReactions(
    "{{ site.github-issues.username }}",
    "{{ site.github-issues.repo }}",
    {{ site.github-issues.bugs.lables | jsonify }},
    "{{ site.data.languages[page.lang].github-issues.bugs.title }}"
  );
</script>
