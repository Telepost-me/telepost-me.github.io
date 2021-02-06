function githubIssues(username, repo, state, labels, title, descLimit) {
  var converter = new showdown.Converter();

  $(".github-issues")
    .append(`<div class="issue-wrap ${labels.join(' ')}"></div>`);

  $(document).ready(function() {
    $.getJSON(
    	`https://api.github.com/repos/${username}/${repo}/issues?state=${state}&labels=${labels.join(',')}`)
      .done(
        function(issues) {
        $(`div.${labels.join('.')}`)
          .prepend(`<h2 class="issues-header"><a name="${encodeURI(title.replace(/\s/g, "+"))}" href="https://github.com/${username}/${repo}/issues?q=is%3Aissue+is%3Aopen${labels.map(label => `+label%3A${label}`).join('')}">${title}</a> (${issues.length} шт.)</h2>`);

        $.each(issues, function(i, issue) {
          $(`div.${labels.join('.')}`)
            .append(`<div class="issue" id="issue-${issue.number}"></div>`);

          $("div#issue-" + issue.number)
            .append(`<div class="issue-title">#${issue.number} — <a href="${issue.html_url}">${issue.title}</a></div>`)
            .append(`<div class="issue-created">Добавлено: ${new Date(issue.created_at).toLocaleDateString()} ${new Date(issue.created_at).toLocaleTimeString()}</div>`);

          if (descLimit > 0 && descLimit !== undefined) {
            $("div#issue-" + issue.number)
              .append(`<div class="issue-text">${converter.makeHtml(
                issue.body.length > descLimit ?
                issue.body.substring(0, descLimit - 3) + "..." :
                issue.body)}</div>`
              );
          }
        });
      }
    );
  });
}