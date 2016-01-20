$("#menu1").on('click', function() {
  $("#pagePort").load("page1.html", function(){
    $.getScript("page1.js", function() {
      if (currentPage.init) {
        currentPage.init();
      }
    });
  });
});

$("#menu2").on('click', function() {
  $("#pagePort").load("page2.html", function(){
    $.getScript("page2.js", function() {
      if (currentPage.init) {
        currentPage.init();
      }
    });
  });
});

$("#menu3").on('click', function() {
  $("#pagePort").load("page3.html", function(){
    $.getScript("page3.js", function() {
      if (currentPage.init) {
        currentPage.init();
      }
    });
  });
});

$("#menu4").on('click', function() {
  $("#pagePort").load("page4.html", function(){
    $.getScript("page4.js", function() {
      if (currentPage.init) {
        currentPage.init();
      }
    });
  });
});
