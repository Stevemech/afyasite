import React from 'react';
import { renderToString } from 'react-dom/server';
// react-router v7 moved StaticRouter out of the old react-router-dom/server path.
import { StaticRouter } from 'react-router';
import App from './App';

/** Renders a route to static HTML. Used by scripts/prerender.mjs at build time. */
export function render(url) {
  return renderToString(
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  );
}
