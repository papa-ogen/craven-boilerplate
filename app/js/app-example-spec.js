import App from './app-example';

const expect = require('chai').expect;

describe('#listToHTML()', () => {
  it('should take an array item objects and convert them to an HTML list', () => {
    const input = [{
      name: 'Made by',
      value: 'Jörgen Thelin',
    }, {
      name: 'With',
      value: 'The Power of Metal',
    }];

    const expected = '<ul class="app-list"><li>Made by: Jörgen Thelin</li><li>With: The Power of Metal</li></ul>';
    expect(App.listToHTML(input)).to.equal(expected);
  });
});
