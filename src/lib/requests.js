module.exports = {getTopWord}
const $ = require('jquery')
const ajaxHandler = require('./ajaxHandlers')

const apiUrl = "https://wordwatch-api.herokuapp.com/api/v1"

function getTopWord(){
  $.ajax({
    url: apiUrl + '/top_word',
    type: 'GET',
  }).done(function(topWord) {
    ajaxHandler.appendTopWord(topWord)
  })
}
