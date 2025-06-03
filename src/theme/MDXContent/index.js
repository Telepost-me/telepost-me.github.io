import React from 'react';
import MDXContent from '@theme-original/MDXContent';
import { useDoc } from '@docusaurus/plugin-content-docs/client';

export default function MDXContentWrapper(props) {
  const { frontMatter } = useDoc() || {};
  const source = frontMatter?.source;

  if (!source) {
    return <MDXContent {...props} />;
  }

  return (
    <>
      <MDXContent {...props} />
      <div className="theme-doc-markdown margin-top--lg">
        <hr />
        <p className="source-link margin-top--md">
          Источник:{' '}
          <a href={source.url} target="_blank" rel="noopener noreferrer">
            {source.name || source.url}
          </a>
        </p>
      </div>
    </>
  );
}
