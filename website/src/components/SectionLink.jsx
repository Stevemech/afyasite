import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { scrollToSection } from '../lib/inPageScroll';

/**
 * In-page section links that work with React Router: smooth-scroll on the home page,
 * navigate + scroll when coming from another route (e.g. /visits).
 */
export function SectionLink({ sectionId, className, children, onClick }) {
  const location = useLocation();

  return (
    <Link
      to={`/#${sectionId}`}
      className={className}
      onClick={(e) => {
        onClick?.(e);
        if (e.defaultPrevented) return;
        if (location.pathname === '/') {
          e.preventDefault();
          scrollToSection(sectionId);
          window.history.replaceState(null, '', `#${sectionId}`);
        }
      }}
    >
      {children}
    </Link>
  );
}
