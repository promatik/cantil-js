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
_Position of the element relative to its siblings_

```js
p.index();
```

---

#### `sibling` / `siblings`
_Sibling elements of the element_

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
_Makes sure the callable runs only once_

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
