let openedWindow;
let features = "height=200,width=600,location=yes,scrollbars=yes";

function openWindow1() {
  openedWindow = window.open("", "_blank", features);
  openedWindow.document.write("<p>VLad<p>");
  setTimeout(openWindow2, 2000);
  function openWindow2() {
    openedWindow.close();
    openedWindow = window.open("", "_blank", features);
    openedWindow.document.write("<p>Polyvko<p>");
    setTimeout(openWindow3, 2000);
    function openWindow3() {
      openedWindow.close();
      openedWindow = window.open("", "_blank", features);
      openedWindow.document.write("<p>KN-202<p>");
    }
  }
}

var hours = 0,
  minutes = 0,
  seconds = 0,
  target = new Date(),
  timerDiv = document.getElementById("timer"),
  handler;

function init() {
  target.setHours(hours);
  target.setMinutes(minutes);
  target.setSeconds(seconds);
  target.setMilliseconds(0);
  timerDiv.innerHTML = target.toTimeString().split(" ")[0];
}

function updateTimer() {
  var time = target.getTime();
  target.setTime(time + 1000);
  timerDiv.innerHTML = target.toTimeString().split(" ")[0];
  if (
    target.getHours() === 0 &&
    target.getMinutes() === 0 &&
    target.getSeconds() === 0
  ) {
    clearInterval(handler);
  }
}

handler = setInterval(updateTimer, 1000);

let startButton = document.querySelector(".btn1");
let resetButton = document.querySelector(".btn2");

startButton.addEventListener("click", function () {
  clearInterval(handler);
  handler = setInterval(updateTimer, 1000);

  resetButton.disabled = false;
  startButton.disabled = true;
});
resetButton.addEventListener("click", function () {
  init();
  clearInterval(handler);

  startButton.disabled = false;
  resetButton.disabled = true;
});
init();

i = 0;
let b = document.querySelector(".btn3");
img_array = new Array(
  "/lesson/img/Без названия (1).jpg",
  "/lesson/img/Без названия (2).jpg",
  "/lesson/img/Без названия.jpg"
);

function myFunction() {
  i++;
  document.getElementById("myImg").src = img_array[i];
  if (i == img_array.length - 1) {
    i = -1;
  }
}

let interval;
b.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(myFunction, 1000);
    b.innerText = "Pause";
  } else {
    clearInterval(interval);
    interval = null;
    b.innerText = "Resume";
  }
});

function countChars(countfrom, displayto) {
  let element = document.getElementById(countfrom);
  var len = document.getElementById(countfrom).value.length;
  document.getElementById(displayto).innerHTML = len;
  if (len === 0) {
    element.style.backgroundColor = "white";
  } else if (len <= 3) {
    element.style.backgroundColor = "red";
  } else if (len <= 6) {
    element.style.backgroundColor = "yellow";
  } else {
    element.style.backgroundColor = "green";
  }
}
