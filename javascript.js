var isClicked = false;

$(".start").on("click", function() {

  if (isClicked === false) {

    isClicked = true;

    var goalTime = 0;
    var timeNowMins = 0;
    var timeNowSeconds = 0;
    var timeOrBreak = "timeleft";

    var getGoalTime = function() {

      goalTime = document.getElementById(timeOrBreak).innerHTML;
      timeNowMins = parseInt(goalTime);
      timeNowSeconds = Math.round((goalTime % 1) * 100);

      if (timeNowMins < 10) {

        timeNowMins = "0" + timeNowMins;

      }

    };

    getGoalTime();

    var goTime = setInterval(function() {

      if (timeNowSeconds < 10) {

        timeNowSeconds = "0" + timeNowSeconds;

      }

      document.getElementById(timeOrBreak).innerHTML = timeNowMins + "." + timeNowSeconds;
      timeNowSeconds -= 1;

      if (timeNowSeconds == 0 - 1 && timeNowMins == 00) {

        document.getElementById(timeOrBreak).innerHTML = goalTime;

        if (timeOrBreak === "timeleft") {

          timeOrBreak = "breaktime";

        } else {

          timeOrBreak = "timeleft";

        }

        getGoalTime();

      } else if (timeNowSeconds === -1) {

        timeNowMins = timeNowMins - 1;

        if (timeNowMins < 10) {

          timeNowMins = "0" + timeNowMins;

        }

        timeNowSeconds = 59;

      }

      $(".stop,.reset,#addTime,#subTime,#addTimeBreak,#subTimeBreak").on("click", function() {

        isClicked = false;
        clearInterval(goTime);

      });

    }, 1000);

  }

});

$(".reset").on("click", function() {

  document.getElementById("timeleft").innerHTML = "25.00";
  document.getElementById("breaktime").innerHTML = "10.00";

});

$("#addTime").on("click", function() {

  document.getElementById("timeleft").innerHTML = parseInt(document.getElementById("timeleft").innerHTML) + 1;
  document.getElementById("timeleft").innerHTML = document.getElementById("timeleft").innerHTML.toString() + ".00";

});

$("#subTime").on("click", function() {

  if (document.getElementById("timeleft").innerHTML > 0) {

    document.getElementById("timeleft").innerHTML = parseInt(document.getElementById("timeleft").innerHTML) - 1;
    document.getElementById("timeleft").innerHTML = document.getElementById("timeleft").innerHTML.toString() + ".00";

  }

});

$("#addTimeBreak").on("click", function() {

  document.getElementById("breaktime").innerHTML = parseInt(document.getElementById("breaktime").innerHTML) + 1;
  document.getElementById("breaktime").innerHTML = document.getElementById("breaktime").innerHTML.toString() + ".00";

});

$("#subTimeBreak").on("click", function() {

  if (document.getElementById("breaktime").innerHTML > 0) {

    document.getElementById("breaktime").innerHTML = parseInt(document.getElementById("breaktime").innerHTML) - 1;
    document.getElementById("breaktime").innerHTML = document.getElementById("breaktime").innerHTML.toString() + ".00";

  }

});