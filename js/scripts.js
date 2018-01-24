



$(document).ready(function() {
  $("button#roll").click(function() {
    var rand = Math.floor(Math.random() * 6);
    alert(rand);
  });
});
