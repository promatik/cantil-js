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

export { onDomReady, once, template } from './utils/utils';
export * as swipeable from './utils/swipeable';
export * as observable from './utils/intersection-observer';