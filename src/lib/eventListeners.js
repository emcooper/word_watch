const $ = require('jquery')
const requests = require('./lib/requests')

module.exports = {breakdown}



function breakdown(){
  $('button').on('click', function(){
    var text = $('textarea').val()
    console.log(text)
  })
}
