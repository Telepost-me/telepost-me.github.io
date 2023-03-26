---
layout: page
title: Voting for ideas/bugs
lang: en
permalink: /en/votes/
---

<!-- markdownlint-disable MD034 -->

## Decription

Below is a list of ideas and bugs, sorted by votes (works based on reactions in issues on Github): reactions 👎🏻 and 😕 are subtracted from the total number of reactions (counted as negative - votes against). **Only issues that have at least one reaction are displayed** (the number of all votes is greater than 0)!

If the list below is empty, or the required issue is not in this list, then you can see the list of issues sorted by reactions directly on GitHub (press Sort, the drop-down list will contain "Most reactions", and select the reaction to sort). Example for the reaction "👍🏻":

* [Ideas](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues?q=is%3Aissue+is%3Aopen{% for label in site.data.languages[page.lang].github-issues.idea.lables %}+label%3A{{ label }}{% endfor %}+sort%3Areactions-%2B1-desc)
* [Bugs](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues?q=is%3Aissue+is%3Aopen{% for label in site.data.languages[page.lang].github-issues.bugs.lables %}+label%3A{{ label }}{% endfor %}+sort%3Areactions-%2B1-desc)

## How to vote

In order to vote for this or that idea / bug (this will help to better understand what is more important to users), you need to:

1. go to [Github to issues page](https://github.com/{{ site.github-issues.username }}/{{ site.github-issues.repo }}/issues?q=is%3Aissue +is%3Aopen)
1. log in to GitHub under your account (create it if you don't have)
1. open the required issue and put the appropriate reaction under the description of the issue

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
