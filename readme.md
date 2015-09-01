# vk-api-scopes [![Build Status](https://travis-ci.org/dsblv/vk-api-scopes.svg?branch=master)](https://travis-ci.org/dsblv/vk-api-scopes)

> Hash of VK API (v5.37) [access permission codes](http://vk.com/dev/permissions)


## Install

```
$ npm install --save vk-api-scopes
```


## Usage

The module is just an instance of JavaScript Object, you can use it like this for example:

```js
var vkApiScopes = require('vk-api-scopes');

var mask = vkApiScopes.audio + vkApiScopes.video + vkApiScopes.photos;

console.log('The bit mask is ' + mask + '!');
```


## License

MIT © [Dmitriy Sobolev](http://vk.com/sobo13v)
