import React, { useEffect, useState } from 'react';

function GithubIssuesReactions({ username, repo, labels = [] }) {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      const url = [
        `https://api.github.com/repos/${username}/${repo}/`,
        `issues?per_page=100`,
        `&state=open`,
        `&labels=${labels.join(',')}`,
      ].join('');
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch issues: ${response.statusText}`);
        }
        const data = await response.json();

        // Filter issues with reactions and sort them
        const issuesWithReactions = data
          .filter((issue) => issue.reactions.total_count > 0)
          .sort((a, b) => {
            const scoreA = a.reactions.total_count - a.reactions.confused - a.reactions['-1'];
            const scoreB = b.reactions.total_count - b.reactions.confused - b.reactions['-1'];
            return scoreB - scoreA; // Sort descending
          });

        setIssues(issuesWithReactions);
      } catch (error) {
        console.error('Error fetching GitHub issues:', error);
      }
    };

    fetchIssues();
  }, [username, repo, labels]);

  return (
    <>
      <p className="github-issues total-found">
        🔍 Всего найдено тикетов {' '}
        <a href={[
            `https://github.com/${username}/${repo}/`,
            `issues?q=is%3Aissue+is%3Aopen`,
            labels.map((label) => `+label%3A${label}`).join(''),
          ].join('')}
        >
        по запросу
        </a>: <span className="total-number">{issues.length}</span>
      </p>
      {issues.map((issue) => (
        <div
            className={`github-issues issue-wrap ${labels.join(' ')}`}
            key={issue.number}
        >
            <div className="issue" id={`issue-${issue.number}`}>
                <div className="issue-title">
                    #{issue.number} — <a href={issue.html_url}>{issue.title}</a>
                </div>
                <div className="issue-meta reactions">
                    <div className="issue-reactions" title="Для голосования — перейдите в issue по ссылке выше">
                    Реакции (всего {issue.reactions.total_count}):
                    &nbsp;
                    {issue.reactions['+1'] > 0 && <span>👍 {issue.reactions['+1']}</span>}
                    {issue.reactions['-1'] > 0 && <span>👎 {issue.reactions['-1']}</span>}
                    {issue.reactions.laugh > 0 && <span>😄 {issue.reactions.laugh}</span>}
                    {issue.reactions.hooray > 0 && <span>🎉 {issue.reactions.hooray}</span>}
                    {issue.reactions.confused > 0 && <span>😕 {issue.reactions.confused}</span>}
                    {issue.reactions.heart > 0 && <span>❤️ {issue.reactions.heart}</span>}
                    {issue.reactions.rocket > 0 && <span>🚀 {issue.reactions.rocket}</span>}
                    {issue.reactions.eyes > 0 && <span>👀 {issue.reactions.eyes}</span>}
                    </div>
                </div>
            </div>
        </div>
      ))}
    </>
  );
}

export default GithubIssuesReactions;
