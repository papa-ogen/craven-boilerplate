'use strict';
const expect = require('chai').expect;

import App from './app-example';

describe('#listToHTML()', function () {
  it('should take an array item objects and convert them to an HTML list', function () {
    let input = [{
      name: 'Made by',
      value: 'Jörgen Thelin'
    }, {
      name: 'With',
      value: 'The Power of Metal'
    }],
      expected = '<ul><li>Made by: Jörgen Thelin</li><li>With: The Power of Metal</li></ul>';
    expect(App.listToHTML(input)).to.equal(expected);
  });
});