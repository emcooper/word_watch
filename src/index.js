const requests = require('./lib/requests')
const eventListener = require('./lib/eventListeners')

document.addEventListener("DOMContentLoaded", () => {
  requests.getTopWord()
  eventListener.breakdownButton()
  eventListener.enterKey()
})
