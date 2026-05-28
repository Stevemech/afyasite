/**
 * Helpers for programmatic in-page scrolling. Dispatches an event so
 * scroll-locking components (e.g. the Walkthrough) can step aside while
 * the smooth scroll completes, instead of hijacking the navigation.
 */

export const IN_PAGE_NAVIGATE_EVENT = 'app:in-page-navigate';

function notify() {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(new Event(IN_PAGE_NAVIGATE_EVENT));
}

export function scrollToSection(sectionId) {
  if (typeof document === 'undefined') return;
  notify();
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

export function scrollToTop() {
  if (typeof window === 'undefined') return;
  notify();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
