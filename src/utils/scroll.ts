export function scrollToSection(targetId: string): void {
  const cleanId = targetId.startsWith('#') ? targetId.slice(1) : targetId;
  const element = document.getElementById(cleanId);
  if (!element) return;

  const header = document.querySelector('.header') as HTMLElement | null;
  const headerHeight = header ? header.offsetHeight + 8 : 74;
  const elementTop = element.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: Math.max(0, elementTop - headerHeight),
    behavior: 'smooth',
  });
}

