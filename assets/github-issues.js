function githubIssues(username, repo, state, labels, title) {
  const url = `https://api.github.com/repos/${username}/${repo}/issues?per_page=100&state=${state}&labels=${labels.join(',')}`;

  $(".github-issues")
  .append(`<div class="issue-wrap ${labels.join(' ')}"></div>`);

  $(document).ready(function() {
    $.getJSON(url)
    .done(function(issues) {
      $(`div.${labels.join('.')}`)
      .prepend(`<h2 class="issues-header"><a name="${encodeURI(title.replace(/\s/g, "+"))}" href="https://github.com/${username}/${repo}/issues?q=is%3Aissue+is%3Aopen${labels.map(label => `+label%3A${label}`).join('')}">${title}</a> (${issues.length})</h2>`);

      $.each(issues, function(i, issue) {
        $(`div.${labels.join('.')}`)
        .append(`<div class="issue" id="issue-${issue.number}"></div>`);

        $("div#issue-" + issue.number)
        .append(`<div class="issue-title">#${issue.number} — <a href="${issue.html_url}">${issue.title}</a></div>`)
        .append([
          `<div class="issue-meta">`,
            `<div class="issue-created" title="Время создания">📅 ${new Date(issue.created_at).toLocaleDateString()} ${new Date(issue.created_at).toLocaleTimeString()}</div>`,
            `&nbsp;|&nbsp; `,
            `<div class="issue-comments-count" title="Количество комментариев">💬 ${issue.comments}</div>`,
            `&nbsp;|&nbsp; `,
            `<div class="issue-comments-count" title="Количество реакций">🎉 ${issue.reactions.total_count}</div>`,
          `</div>`,
        ].join('\n'));
      });
    });
  });
}

function githubIssuesReactions(username, repo, labels, title) {
  const url = `https://api.github.com/repos/${username}/${repo}/issues?per_page=100&state=open&labels=${labels.join(',')}`;

  $(".github-issues")
  .append(`<div class="issue-wrap ${labels.join(' ')}"></div>`);

  $(document).ready(function() {
    $.getJSON(url)
    .done(function(issues) {
      const issuesWithReactions = issues.filter(issue => issue.reactions.total_count > 0);

      issuesWithReactions
      .sort((a, b) => (
        a.reactions.total_count - a.reactions['confused'] - a.reactions['-1'] 
        > 
        b.reactions.total_count - b.reactions['confused'] - b.reactions['-1']
      ) ? 1 : -1)
      .reverse();

      $(`div.${labels.join('.')}`)
      .prepend(`<h2 class="issues-header"><a name="${encodeURI(title.replace(/\s/g, "+"))}" href="https://github.com/${username}/${repo}/issues?q=is%3Aissue+is%3Aopen${labels.map(label => `+label%3A${label}`).join('')}">${title}</a> (${issuesWithReactions.length})</h2>`);

      $.each(issuesWithReactions, function(i, issue) {
        $(`div.${labels.join('.')}`)
        .append(`<div class="issue" id="issue-${issue.number}"></div>`);

        $("div#issue-" + issue.number)
        .append(`<div class="issue-title">#${issue.number} — <a href="${issue.html_url}">${issue.title}</a></div>`)
        .append([
          `<div class="issue-meta">`,
            `<div class="issue-reactions" title="Реакции">Голосование (всего реакций — ${issue.reactions.total_count}):`,
              `&nbsp;`,
              issue.reactions['+1'] > 0 ? `<span>👍 ${issue.reactions['+1']}</span>` : '',
              issue.reactions['-1'] > 0 ? `<span>👎 ${issue.reactions['-1']}</span>` : '',
              issue.reactions['laugh'] > 0 ? `<span>😄 ${issue.reactions['laugh']}</span>` : '',
              issue.reactions['hooray'] > 0 ? `<span>🎉 ${issue.reactions['hooray']}</span>` : '',
              issue.reactions['confused'] > 0 ? `<span>😕 ${issue.reactions['confused']}</span>` : '',
              issue.reactions['heart'] > 0 ? `<span>❤️ ${issue.reactions['heart']}</span>` : '',
              issue.reactions['rocket'] > 0 ? `<span>🚀 ${issue.reactions['rocket']}</span>` : '',
              issue.reactions['eyes'] > 0 ? `<span>👀 ${issue.reactions['eyes']}</span>` : '',
            `</div>`,
          `</div>`,
        ].join(''));
      });
    });
  });
}
