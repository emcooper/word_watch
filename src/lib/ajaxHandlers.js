module.exports = {appendTopWord}

const $ = require('jquery')

function appendTopWord(topWord){
  var word = Object.keys(topWord["word"])
  var count = Object.values(topWord["word"])
  $('.word-count').append('<p>' + word + '(' + count + ')' + '</p>')
}
