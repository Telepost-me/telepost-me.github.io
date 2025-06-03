import React, { useEffect, useState } from 'react';

function GithubIssues({ username, repo, states = [], labels, i18n = {} }) {
  const [issues, setIssues] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchIssues = async () => {
      const cacheKey = `github-issues-${username}-${repo}-${states.join(',')}-${labels.join(',')}`;
      const cachedData = localStorage.getItem(cacheKey);

      if (cachedData) {
        setIssues(JSON.parse(cachedData));
        return;
      }

      const url = [
        `https://api.github.com/repos/${username}/${repo}/`,
        `issues?per_page=100`,
        states.map(state => `&state=${state}`).join(''),
        `&labels=${labels.join(',')}`
      ].join('');

      try {
        const response = await fetch(url);
        const data = await response.json();

        if (response.status === 403) {
          setError(i18n.rateLimitExceeded || 'GitHub API rate limit exceeded. Please try again later.');
          return;
        }

        if (!Array.isArray(data)) {
          setError(i18n.unexpectedResponse || 'Unexpected response from GitHub API. Please try again later.');
          return;
        }

        setIssues(data);
        localStorage.setItem(cacheKey, JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching GitHub issues:', error);
        setError(i18n.fetchError || 'Failed to fetch GitHub issues. Please try again later.');
      }
    };

    fetchIssues();
  }, [username, repo, states, labels, i18n]);

  if (error) {
    return <p className="github-issues error">⚠️ {error}</p>;
  }

  return (
    <>
      <p className="github-issues total-found">
        🔍 {i18n.totalFound || 'Total issues found'} {' '}
        <a href={[
            `https://github.com/${username}/${repo}/`,
            `issues?q=is%3Aissue`,
            states.map(state => `+is%3A${state}`),
            labels.map((label) => `+label%3A${label}`).join(''),
          ].join('')}
        > {i18n.forThisQuery || 'for this query'}
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
            <div className="issue-meta">
              <div className="issue-created" title={i18n.createdAt || 'Created at'}>
                📅 {new Date(issue.created_at).toLocaleDateString()}{' '}
                {new Date(issue.created_at).toLocaleTimeString()}
              </div>
              &nbsp;|&nbsp;
              <div className="issue-comments-count" title={i18n.comments || 'Comments'}>
                💬 {issue.comments}
              </div>
              &nbsp;|&nbsp;
              <div className="issue-reactions-count" title={i18n.reactions || 'Reactions'}>
                🎉 {issue.reactions?.total_count || 0}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default GithubIssues;
