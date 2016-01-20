$(function() {
  $("#b1").bind("taphold", tapholdHandler);
  function tapholdHandler(event) {
    $(event.target).html("방송 시작을 알렸습니다!");
    var promise = Kinvey.execute('gagconcert', {
     name: 'Fred Jones',
     eyes: 'Blue'
    }, {
      success: function(response) { }
    });
  }
});
