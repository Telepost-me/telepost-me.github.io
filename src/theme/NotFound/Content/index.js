import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Heading from '@theme/Heading';
import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';

export default function NotFoundContent({className}) {
  return (
    <main className={clsx('container margin-vert--xl', className)}>
      <div className="row">
        <div className="col col--7 col--offset-3">
          <Heading as="h1" className="hero__title">
            <Translate
              id="theme.NotFound.title"
              description="The title of the 404 page">
              Page Not Found
            </Translate>
          </Heading>
          <p>
            <Translate
              id="theme.NotFound.p1"
              description="The first paragraph of the 404 page">
              We could not find what you were looking for.
            </Translate>
          </p>
          <p>
            <Translate
              id="theme.NotFound.p2"
              description="The 2nd paragraph of the 404 page"
              values={{
                mainPageLink: (
                  <Link to={useBaseUrl('/')}>
                    <Translate
                      id="theme.NotFound.mainPage"
                      description="Text for link to main page"
                    >главную страницу</Translate>
                  </Link>
                ),
                searchLink: (
                  <Link to={useBaseUrl('/search')}>
                    <Translate
                      id="theme.NotFound.search"
                      description="Text for link to search page"
                    >поиском</Translate>
                  </Link>
                ),
              }}>
              {`Вы можете вернуться на {mainPageLink} или воспользоваться {searchLink} по сайту.`}
            </Translate>
          </p>
          <div style={{textAlign: 'center', marginTop: '3rem'}}>
            <img
              src={useBaseUrl('/img/travolta.gif')}
              alt="Confused Travolta"
              style={{
                maxWidth: '450px',
                height: 'auto',
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
