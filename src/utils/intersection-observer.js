// Interception observer
export const observable = {
  elements: [],

  // Init
  init: selector => {
    observable.elements = queryAll(selector || '[observable]');

    for (const observable of observable.elements) {
      let status = false;
      const threshold = Number.parseFloat(observable.getAttribute('threshold') || 1);
      const once = observable.getAttribute('once') !== null;

      const revealContentObserver = new IntersectionObserver(entries => {
        for (const entry of entries) {
          if (entry.isIntersecting && !status) {
            status = true;
            entry.target.dispatchEvent(new CustomEvent('observed', entry));
            if (once) {
              revealContentObserver.unobserve(entry.target);
            }
          } else if (!entry.isIntersecting && status) {
            status = false;
            entry.target.dispatchEvent(new CustomEvent('unobserved', entry));
          }
        }
      }, { threshold });

      revealContentObserver.observe(observable);
    }
  },

  // Get Elements
  getElements() {
    return observable.elements;
  }
};