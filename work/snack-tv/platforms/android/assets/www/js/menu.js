$("#menu1").on('click', function() {
  $("#page1").show();
  $("#page2").hide();
  $("#page3").hide();
  $("#page4").hide();
});

$("#menu2").on('click', function() {
  $("#page2").show();
  $("#page1").hide();
  $("#page3").hide();
  $("#page4").hide();
});

$("#menu3").on('click', function() {
  $("#page3").show();
  $("#page1").hide();
  $("#page2").hide();
  $("#page4").hide();
});

$("#menu4").on('click', function() {
  $("#page4").show();
  $("#page1").hide();
  $("#page2").hide();
  $("#page3").hide();
});
