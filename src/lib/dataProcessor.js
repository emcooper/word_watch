module.exports = {wordCounts}

function wordCounts(text){
  let counts = {}
  splitText = text.split(" ")
  splitText.forEach(function(word){
    if(counts[word]) {
      counts[word] += 1
    } else {
      counts[word] = 1
    }
  })
  return counts
}
