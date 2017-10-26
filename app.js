console.log("Hey I am connected");

$(document).ready(function(){
  console.log("Hey I am ready");
    $.get('https://galvanize-cors.herokuapp.com/https://xkcd.com/info.0.json')
      .then(function(data){

      })
})
