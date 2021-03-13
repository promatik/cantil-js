// Swipeable
let elements;

// Init
export function init(selector) {
  elements = queryAll(selector || '[swipeable]');

  elements.forEach(swipeable => {
    const threshold = Number(swipeable.getAttribute('threshold')) || 120;
    let startTouch;
    
    // Touch Start Event
    swipeable.addEventListener('touchstart', e => {
      [startTouch] = e.changedTouches;
    }, { passive: true });
    
    // Touch End Event
    swipeable.addEventListener('touchend', e => {
      const [dx, dy] = [
        e.changedTouches[0].clientX - startTouch.clientX,
        e.changedTouches[0].clientY - startTouch.clientY,
      ];
    
      const [adx, ady] = [dx, dy].map(Math.abs);
    
      if (adx || ady) {
        swipeable.dispatchEvent(new CustomEvent('swipe', {
          detail: {
            x: adx > threshold && adx > ady ? -Math.sign(dx) : 0,
            y: ady > threshold && ady > adx ? -Math.sign(dy) : 0,
          },
        }));
      }
    }, { passive: true });
  });
}

// Get Elements
export function getElements() {
  return elements;
}