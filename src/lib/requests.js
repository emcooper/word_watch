module.exports = {}

const apiUrl = "https://wordwatch-api.herokuapp.com/api/v1"

function getTopWord(){
  $.ajax({
    url: apiUrl + '/top_word',
    type: 'GET',
  }).done(function(word) {
    console.log(word)
  });
}
