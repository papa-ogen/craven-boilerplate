const App = {
  listToHTML(items) {
    const itemRows = items.map(item => `<li>${item.name}: ${item.value}</li>`).join('')

    return `<ul class="app-list">${itemRows}</ul>`.trim()
  },
}

export default App
