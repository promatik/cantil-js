// Prototype
Object.setPrototypeOf(NodeList.prototype, Array.prototype);
Object.setPrototypeOf(HTMLCollection.prototype, Array.prototype);

// Query
const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
window.query = query;
window.queryAll = queryAll;

Node.prototype.query = function query(selector) { return this.querySelector(selector); };
Node.prototype.queryAll = function queryAll(selector) { return this.querySelectorAll(selector); };
NodeList.prototype.query = function query(selector) { return this.queryAll(selector)[0]; };
NodeList.prototype.queryAll = function queryAll(selector) { return this.flatMap(elem => Array.from(elem.queryAll(selector))); };

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

export { query, queryAll }
export { onDomReady, once, template } from './utils/utils';
export { observable } from './utils/intersection-observer';
export { swipeable } from './utils/swipeable';