<p align="center"><a href="https://promatik.github.io/cantil-js/" target="_blank" rel="noopener noreferrer"><img width="100" src="https://raw.githubusercontent.com/promatik/cantil-js/master/docs/logo.png" alt="Cantil JS logo"></a></p>

<p align="center">
  <a href="https://www.npmjs.com/package/cantil"><img src="https://img.shields.io/bundlephobia/min/cantil" alt="Size"></a>
  <a href="https://www.npmjs.com/package/cantil"><img src="https://img.shields.io/bundlephobia/minzip/cantil" alt="Size"></a>
  <a href="https://www.npmjs.com/package/cantil"><img src="https://img.shields.io/npm/v/cantil.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/cantil"><img src="https://img.shields.io/npm/l/cantil.svg?sanitize=true" alt="License"></a>
</p>

# Cantil JS

A tiny framework with the helpers you need to boost your productivity.

### Install

```js
npm i cantil
```

### Usage

```js
require('cantil');
```

### Methods

---

#### `query` / `queryAll`
_Shortcut for `document.querySelector` and `document.querySelectorAll`_

```js
// query the first <p> element
let p = query('p');

// query all <p> elements
queryAll('p');

// query all <a> inside p
p.queryAll('a'); // or queryAll('p:first-child a');
```

---

#### NodeList / HTMLCollection Array Prototype
_By default NodeList and HTMLCollection don't have Array metods like `map`, `filter` or `reduce` (among others)._  
_Cantil JS enables these methods 🎉_

```js
queryAll('p')
  .filter(p => p.classList.contains('active'))
  .map(p => p.innerText)
  .join(', ');
```

---

#### `index`
_Position of the element relative to its parent_

```js
p.index();
```

---

#### `sibling` / `siblings`
_Query the siblings of the element_

```js
// query the first <h1> sibling of <p>
p.sibling('h1');

// query all <h1> siblings of <p>
p.siblings('h1');
```

---

### `onDomReady`
_Promise for DOM ready_

```js
import { onDomReady } from 'cantil';

init: () => {
  console.log("App ready");
};

onDomReady().then(init);
```

---

### `template`
_Clones a DOM template making it ready to use_

```js
import { template } from 'cantil';

let element = template('template#example');

query('section').append(element);
```

---

### `once`
_Ensures the callable runs only once_

```js
import { once } from 'cantil';

let callOnce = once(() => {
  console.log('callOnce');
});
 
callOnce();
callOnce();
callOnce();
```


## License

Copyright © 2020 António Almeida (promatik) and contributors

Licensed under the MIT license, see [LICENSE.md](LICENSE.md) for details.
