function moveHands() {
    with (new Date()) {
      h = 30 * ((getHours() % 12) + getMinutes() / 60); // 30 deg hour
      m = 6 * getMinutes(); // 6 deg every minute
      s = 6 * getSeconds(); // 6 deg every second
      // setting the rotate CSS attribute to those deg values -->
      document.getElementById("seconds").style.cssText =
        "-webkit-transform:rotate(" + s + "deg);";
      document.getElementById("minutes").style.cssText =
        "-webkit-transform:rotate(" + m + "deg);";
      document.getElementById("hours").style.cssText =
        "-webkit-transform:rotate(" + h + "deg);";
  
      setTimeout(moveHands, 1000); // calling the function every second
    }
  }
  
  window.onload = moveHands;