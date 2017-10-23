const $ = require('jquery')
const handler = require('./handlers')
const requests = require('./requests')


module.exports = {breakdown}

function breakdown(){
  $('button').on('click', function(){
    let text = $('textarea').val()
    handler.appendWordBreakdown(text)
    requests.postWords(text)
  })
}
