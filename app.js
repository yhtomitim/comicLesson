console.log("Hey I am connected");

$(document).ready(function(){
  console.log("Hey I am ready");
    $.get('https://galvanize-cors.herokuapp.com/https://xkcd.com/info.0.json')
      .then(function(data){

        $("h1").text(data.title);
        $("p").text(data.alt);
        $("img").attr("src",data.img);
      var safeTitle = $("<p></p>").text(data.safe_title);
        $("h1").after(safeTitle);
      var comicNumber = $("<p></p>").text("Comic Number " + data.num);
        $("img").before(comicNumber);

      })
})
