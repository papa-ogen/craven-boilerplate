import App from './js/app-example'
import './scss/styles.scss'
import './index.html'

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!'); // eslint-disable-line
}

const list = document.getElementById('hook')
const listItems = [{
  name: 'Made by',
  value: 'Jörgen Thelin',
}, {
  name: 'With',
  value: 'The Power of Metal',
}]

list.innerHTML = App.listToHTML(listItems)
