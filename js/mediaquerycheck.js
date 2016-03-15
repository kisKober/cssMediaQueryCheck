var viewcheck = function(){
  switch($(".viewcheck").css("z-index")){
    case "1":
      $("#result").text("767px or less");
      break;
    case "2":
      $("#result").text("between 768px and 991px");
      break;
    case "3":
      $("#result").text("between 992px and 1199px");
      break;
    case "4":
      $("#result").text("between 1200px and 1399px");
      break;
    case "5":
      $("#result").text("1400px or more");
      break;
  }
}

//check the state of viewcheck when document is ready
$(document).ready(function(){
  viewcheck();
});

//check the state of viewcheck when user resizes the window

$(window).resize(function(){
  viewcheck();
});
