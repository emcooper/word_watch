const $ = require('jquery')
const handler = require('./handlers')
const requests = require('./requests')

module.exports = {breakdownButton, enterKey}

function breakdownButton(){
  $('button').on('click', function(){
    let text = $('textarea').val()
    handler.appendWordBreakdown(text)
    requests.postWords(text)
  })
}

function enterKey(){
  $("textarea").keypress(function(e){
    var key = e.which
    if(key === 13){
      let text = $('textarea').val()
      handler.appendWordBreakdown(text)
      requests.postWords(text)
    }
  })
}
