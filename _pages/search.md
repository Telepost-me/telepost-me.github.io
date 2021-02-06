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
        searchResultTemplate: '<div style="text-align: left !important;"><a href="{url}"><h1 style="text-align:left !important;">{title}</h1></a><span style="text-align:left !important;">{date}</span></div>',
        json: '{{ site.baseurl }}/search.json'
    });
</script>