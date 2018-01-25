function Die() {
  this.value = 6;

  this.setKeyframe = function() {
    var rX=0;
    var rY=0;
    var rZ=0;
    //var startValue = this.value;
    this.value = Math.ceil(Math.random() * 6);

    //from value to six
    // if (startValue === 1) {
    //   rY += 180;
    // } else if (startValue === 2) {
    //   rY += 90;
    // } else if (startValue === 3) {
    //   rX += 90;
    // } else if (startValue === 4) {
    //   rY += -90;
    // } else if (startValue === 5) {
    //   rX += -90;
    // }

    //from six to value
    if (this.value === 1) {
      rY += -180;
    } else if (this.value === 2) {
      rY += -90;
    } else if (this.value === 3) {
      rX += -90;
    } else if (this.value === 4) {
      rY += 90;
    } else if (this.value === 5) {
      rX += 90;
    }

    document.documentElement.style.setProperty('--rX', rX + 360);
    document.documentElement.style.setProperty('--rY', rY + 720);
    console.log(this.value, rX, rY);
  }
};

$(document).ready(function() {
  var die1 = new Die();

  //$("#die1").removeClass("dieAnimation");
  die1.setKeyframe();
  //$("#die1").css("animation-play-state", "running");
  $("#die1").addClass("dieAnimation");
  setTimeout(function() {
    $("#die1").css("animation-play-state", "paused");
    $("#space").css("animation-play-state", "paused");

  }, 2970);

  $("#die1").click(function() {
    location.reload();
  });
});
