// Prototype
Object.setPrototypeOf(NodeList.prototype, Array.prototype);
Object.setPrototypeOf(HTMLCollection.prototype, Array.prototype);

// Query
window.query = document.querySelector.bind(document);
window.queryAll = document.querySelectorAll.bind(document);
Node.prototype.query = function query(selector) { return this.querySelector(selector); };
Node.prototype.queryAll = function queryAll(selector) { return this.querySelectorAll(selector); };
NodeList.prototype.query = function query(selector) { return this.queryAll(selector)[0]; };
NodeList.prototype.queryAll = function queryAll(selector) {
  const results = [];
  this.map(elem => results.push(...elem.queryAll(selector)));
  return results;
};

// Sibling util
Node.prototype.sibling = function sibling(query) { return this.siblings(query)[0]; };
Node.prototype.siblings = function siblings(query) {
  const elems = query ? this.parentElement.queryAll(query) : this.parentElement.children;
  return elems.filter(e => this !== e);
};

// Index util
Node.prototype.index = function index() {
  let elem = this;
  let i = -1;
  while (elem) { elem = elem.previousElementSibling; i += 1; }
  return i;
};

// Trigger events
Node.prototype.trigger = function trigger(event, init) {
  this.dispatchEvent(new CustomEvent(event, init));
};

// Template helper
export function template(selector) {
  return query(selector).content.cloneNode(true);
}

// @stimulus https://github.com/stimulusjs/stimulus/blob/master/packages/%40stimulus/core/src/application.ts
export function onDomReady() {
  return new Promise(resolve => (document.readyState === 'loading'
    ? document.addEventListener('DOMContentLoaded', resolve)
    : resolve()));
}

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
