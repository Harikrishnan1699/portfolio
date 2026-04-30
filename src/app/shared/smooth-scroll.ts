/**
 * Smooth-scroll a target element (by id) into view, with an offset for
 * the fixed navbar. Falls back to native anchor behavior if not supported.
 */
export function scrollToId(id: string, offset = 80): void {
  if (typeof document === 'undefined') return;
  const target = document.getElementById(id);
  if (!target) return;
  const top = target.getBoundingClientRect().top + window.scrollY - offset;
  window.scrollTo({ top, behavior: 'smooth' });
}
