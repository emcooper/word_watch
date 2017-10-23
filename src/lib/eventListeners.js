const $ = require('jquery')
const handler = require('./handlers')

module.exports = {breakdown}

function breakdown(){
  $('button').on('click', function(){
    let text = $('textarea').val()
    handler.appendWordBreakdown(text)
  })
}
