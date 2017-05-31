import App from './js/app-example';

require('./styles/styles.scss');


const list = document.getElementById('hook');
const listItems = [{
  name: 'Made by',
  value: 'Jörgen Thelin',
}, {
  name: 'With',
  value: 'The Power of Metal',
}];

list.innerHTML = App.listToHTML(listItems);
