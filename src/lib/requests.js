module.exports = {getTopWord}
const $ = require('jquery')

const apiUrl = "https://wordwatch-api.herokuapp.com/api/v1"

function getTopWord(){
  $.ajax({
    url: apiUrl + '/top_word',
    type: 'GET',
  }).done(function(topWord) {
    var word = Object.keys(topWord["word"])
    var count = Object.values(topWord["word"])
    $('.word-count').append('<p>' + word + '(' + count + ')' + '</p>')
  })
}
