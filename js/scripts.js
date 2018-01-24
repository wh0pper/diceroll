function Die() {
  this.value = 6;

  this.setKeyframe = function() {
    var rX=0;
    var rY=0;
    var rZ=0;
    var startValue = this.value;
    this.value = Math.ceil(Math.random() * 6);

    //from value to six
    if (startValue === 1) {
      rY += 180;
    } else if (startValue === 2) {
      rY += 90;
    } else if (startValue === 3) {
      rX += 90;
    } else if (startValue === 4) {
      rY += -90;
    } else if (startValue === 5) {
      rX += -90;
    }

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
    console.log(startValue, this.value, rX, rY);
  }
};

$(document).ready(function() {
  var dieOne = new Die();

  $("button#roll").click(function() {
    dieOne.setKeyframe();
    $("#die").addClass("dieAnimation");

  });
});
