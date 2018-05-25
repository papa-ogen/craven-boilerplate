const App = {
  listToHTML(items) {
    const itemRow = items.map(item => `<li>${item.name}: ${item.value}</li>`).join('')

    return `<ul class="app-list">${itemRow}</ul>`.trim()
  },
}

export default App
