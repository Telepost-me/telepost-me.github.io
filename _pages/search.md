---
layout: page
title: Поиск
permalink: /search/
---

<div id="search-container">
    <input type="text" id="search-input" placeholder="Искать по всему сайту...">
    <ul id="search-results"></ul>
</div>

<script src="{{ site.baseurl }}/assets/simple-jekyll-search.min.js" type="text/javascript"></script>

<script>
    SimpleJekyllSearch({
        searchInput: document.getElementById('search-input'),
        resultsContainer: document.getElementById('search-results'),
        searchResultTemplate: '<li><a class="title" href="{url}">{title}</a><span class="date">{date}</span></li>',
        json: '{{ site.baseurl }}/search.json'
    });
</script>