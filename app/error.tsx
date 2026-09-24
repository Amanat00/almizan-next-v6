'use client';

import { useEffect } from 'react';

export default function ErrorPage({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="runtime-error-page">
      <div className="runtime-error-card">
        <span className="eyebrow">Al Mizan</span>
        <h1>Something interrupted this page.</h1>
        <p>Please try the page again. If the development server was just updated, restart it once so Next.js can rebuild its cache cleanly.</p>
        <div className="hero-actions">
          <button className="button button-primary" type="button" onClick={reset}>Try again</button>
          <a className="button button-secondary" href="/en/">Go to homepage</a>
        </div>
      </div>
    </main>
  );
}
