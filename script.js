// Set the date we're counting down to
var countDownDate = new Date("Nov 7, 2023 15:00:00 GMT-0500").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for weeks, days, hours, minutes, and seconds
  var weeks = Math.floor(distance / (1000 * 60 * 60 * 24 * 7));
  var days = Math.floor((distance % (1000 * 60 * 60 * 24 * 7)) / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60) / 1000));

  // Display the result in the element with id "countdown"
  document.getElementById("countdown").innerHTML = weeks + "w " + days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "0w 0d 0h 0m 0s";
    document.getElementById('play').style.cssText = "display: block"; 
  }
}, 1000);
