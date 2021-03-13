// On Dom Ready
// @stimulus https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
export function onDomReady() {
  return new Promise(resolve => (document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', resolve)
    : resolve()));
}

// Template helper
export function template(selector) {
  return query(selector).content.cloneNode(true);
}

// Once
// @vuejs https://github.com/vuejs/vue/blob/4de4649d9637262a9b007720b59f80ac72a5620c/src/shared/util.js
export function once(callback, ...args) {
  let called = false;
  
  return function () {
    if (!called) {
      called = true;
      callback.apply(this, args);
    }
  };
}
