import jsdom from 'jsdom';

global.document = require('jsdom').jsdom('<!doctype html><html><body></body></html>');
global.window = document.defaultView;
global.navigator = window.navigator;

require('./cart-spec.js');
require('./list-spec.js');
require('./chocolate-spec.js');
require('./reducer-spec.js');
