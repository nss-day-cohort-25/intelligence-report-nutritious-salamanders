
// variables for the functionality of news page
let currentNewsData
let newsData
let status = false
const newsRef = document.querySelector("#news__events")
const fragment = document.createDocumentFragment()



loadNews()
saveNews()

newsPrint()