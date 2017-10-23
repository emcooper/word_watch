module.exports = {getTopWord}
const $ = require('jquery')
const handler = require('./handlers')

const apiUrl = "https://wordwatch-api.herokuapp.com/api/v1"

function getTopWord(){
  $.ajax({
    url: apiUrl + '/top_word',
    type: 'GET',
  }).done(function(topWord) {
    handler.appendTopWord(topWord)
  })
}
