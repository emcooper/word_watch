module.exports = {appendTopWord, appendWordBreakdown}
const $ = require('jquery')
const dataProcessor = require('./dataProcessor')

function appendTopWord(topWord){
  let word = Object.keys(topWord["word"])
  let count = Object.values(topWord["word"])
  $('.top-word').append('<h4>' + word + '(' + count + ')</h4>')
}

function appendWordBreakdown(text){
  $('.word-count').html('')
  let counts = dataProcessor.wordCounts(text)
  $.each(counts, function( key, value ) {
    $('.word-count').append('<p><font size="' + value + 'em">' + key + '</font></p>')
  });
}
