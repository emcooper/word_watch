module.exports = {appendTopWord, appendWordBreakdown}
const $ = require('jquery')
const dataProcessor = require('./dataProcessor')

function appendTopWord(topWord){
  let word = Object.keys(topWord["word"])
  let count = Object.values(topWord["word"])
  $('.top-word').append( word + '(' + count + ')')
}

function appendWordBreakdown(text){
  let counts = dataProcessor.wordCounts(text)
  $.each(counts, function( key, value ) {
    $('.word-count').append('<font size="' + value + 'em">' + key + '</font>')
  });
}
