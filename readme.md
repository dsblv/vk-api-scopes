# vk-api-scopes [![Build Status](https://travis-ci.org/dsblv/vk-api-scopes.svg?branch=master)](https://travis-ci.org/dsblv/vk-api-scopes)

> Hash of VK API (v5.37) [access permission codes](http://vk.com/dev/permissions)


## Install

```
$ npm install --save vk-api-scopes
```


## Usage

The module is just an instance of JavaScript `Object`, you can use it like this for example:

```js
var vkApiScopes = require('vk-api-scopes');

var mask = vkApiScopes.audio + vkApiScopes.video + vkApiScopes.photos;

console.log('The bit mask is ' + mask + '!');
```


## Related

- [vk-api-all-methods](https://github.com/dsblv/vk-api-all-methods) — List of all VK API methods
- [vk-api-open-methods](https://github.com/dsblv/vk-api-open-methods) — List of VK API methods that don't require authentication
- [vk-api-scoped-methods](https://github.com/dsblv/vk-api-scoped-methods) — Hash of VK API methods that require correct scope and scopes they require


## License

MIT © [Dmitriy Sobolev](http://vk.com/sobo13v)
