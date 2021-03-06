const $ = require('jquery')
const handler = require('./handlers')
const requests = require('./requests')

module.exports = {breakdownButton, enterKey}

function breakdownButton(){
  $('button').on('click', function(){
    let text = $('textarea').val().toLowerCase()
    handler.appendWordBreakdown(text)
    requests.postWords(text)
  })
}

function enterKey(){
  $("textarea").keypress(function(e){
    let key = e.which
    if(key === 13){
      let text = $('textarea').val().toLowerCase()
      handler.appendWordBreakdown(text)
      requests.postWords(text)
    }
  })
}
