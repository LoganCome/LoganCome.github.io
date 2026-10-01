(() => {
  const section = document.querySelector('#visitor-statistics');
  if (!section) return;

  const status = section.querySelector('[data-stats-status]');
  const values = [...section.querySelectorAll('[data-stats-value]')];

  // Previewing a downloaded copy must not record visits for the live site.
  if (location.protocol !== 'https:' || location.hostname !== 'logancome.github.io') {
    section.dataset.state = 'preview';
    status.textContent = 'Statistics are available on the live website.';
    return;
  }

  section.dataset.state = 'loading';
  section.setAttribute('aria-busy', 'true');
  status.textContent = 'Loading visitor statistics…';

  const unavailable = () => {
    if (section.dataset.state === 'ready') return;
    section.dataset.state = 'unavailable';
    section.setAttribute('aria-busy', 'false');
    status.textContent = 'Visitor statistics are temporarily unavailable.';
  };

  const timeout = window.setTimeout(unavailable, 12000);
  const observer = new MutationObserver(() => {
    const counts = values.map(value => value.textContent.trim());
    if (!counts.every(value => /^\d+$/.test(value) && Number.isSafeInteger(Number(value)))) return;

    observer.disconnect();
    window.clearTimeout(timeout);
    values.forEach((value, index) => {
      value.textContent = Number(counts[index]).toLocaleString('en-US');
    });
    section.dataset.state = 'ready';
    section.setAttribute('aria-busy', 'false');
    status.textContent = 'Page views include repeat visits.';
  });
  values.forEach(value => observer.observe(value, { childList: true, characterData: true, subtree: true }));

  // Busuanzi stores shared totals remotely; no account or browser-local counter is needed.
  const script = document.createElement('script');
  script.src = 'https://busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js';
  script.async = true;
  script.addEventListener('error', () => {
    window.clearTimeout(timeout);
    observer.disconnect();
    unavailable();
  }, { once: true });
  document.head.appendChild(script);
})();
