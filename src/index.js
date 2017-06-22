import App from './js/app-example';

require('./index.html');
require('./scss/styles.scss');


const list = document.getElementById('hook');
const listItems = [{
  name: 'Made by',
  value: 'Jörgen Thelin',
}, {
  name: 'With',
  value: 'The Power of Metal',
}];

list.innerHTML = App.listToHTML(listItems);
