'use strict';
var assert = require('assert');
var vkApiScopes = require('./');

it('should export an object', function () {
	assert(vkApiScopes instanceof Object, 'it really is an object');
});

it('should only contain numbers', function () {
	Object.keys(vkApiScopes).forEach(function (key) {
		assert(typeof vkApiScopes[key] === 'number', 'yes, that\'s number');
	});
});
