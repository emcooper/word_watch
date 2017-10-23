module.exports = {getTopWord, postWords}
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

function postWords(text){
  splitText = text.split(" ")
  splitText.forEach(function(word){
      $.ajax({
        url: apiUrl + '/words',
        type: 'POST',
        data: { word: { value: word } }
      }).done(function(message) {
        console.log(message)
      })
  })
}
