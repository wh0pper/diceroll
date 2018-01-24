



$(document).ready(function() {
  $("button#roll").click(function() {
    
    $(".die").addClass("dieanimation");
    var rand = Math.floor(Math.random() * 6);
    alert(rand);

  });
});
