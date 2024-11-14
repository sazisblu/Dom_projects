let actualsec, actualmin, actualhour;
let iterativesec = 0,
  iterativemin = 0,
  iterativehour = 0;
var currenttime = [actualsec, actualmin, actualhour];
let stopstartbutt = document.querySelector(".start");
var clicks = 0;
let timerInterval;
let resetbutt = document.querySelector(".reset");
let display = document.querySelector("#display");
let lapcontainer = document.querySelector(".container2");
let laparray = [];
let lapbody = document.querySelector("#container2body");
const laplist = document.querySelector("ul");

let watch = () => {
  iterativesec++;
  if (iterativesec == 60) {
    iterativesec = 0;
    iterativemin++;
  }
  if (iterativemin == 60) {
    iterativemin = 0;
    iterativehour++;
  }
  if (iterativesec < 10) {
    actualsec = "0" + iterativesec.toString();
  } else {
    actualsec = iterativesec;
  }
  if (iterativemin < 10) {
    actualmin = "0" + iterativemin.toString();
  } else {
    actualmin = iterativemin;
  }
  if (iterativehour < 10) {
    actualhour = "0" + iterativehour.toString();
  } else {
    actualhour = iterativehour;
  }
  display.innerText = actualhour + ":" + actualmin + ":" + actualsec;
  currenttime = [actualsec, actualmin, actualhour];
};

var stopstart = () => {
  if (stopstartbutt.classList.contains("start")) {
    timerInterval = window.setInterval(watch, 1000);
    stopstartbutt.innerText = "Stop";
    stopstartbutt.classList.remove("start");
    stopstartbutt.classList.add("stop");
    resetbutt.classList.remove("reset");
    resetbutt.classList.add("lap");
    resetbutt.innerText = "Lap";
  } else {
    stopstartbutt.innerText = "start";
    stopstartbutt.classList.remove("stop");
    stopstartbutt.classList.add("start");
    window.clearInterval(timerInterval);
    resetbutt.classList.remove("lap");
    resetbutt.classList.add("reset");
    resetbutt.innerText = "reset";
  }
};
stopstartbutt.addEventListener("click", stopstart);

var reset = () => {
  display.innerText = "00:00:00";
  iterativehour = 0;
  iterativemin = 0;
  iterativesec = 0;
  window.clearInterval(timerInterval);
  stopstartbutt.innerText = "start";
  stopstartbutt.classList.remove("stop");
  stopstartbutt.classList.add("start");
  clicks = 0;
  lapcontainer.classList.add("hidden");
  laplist.textContent = "";
};

var lap = () => {
  clicks++;
  clicks == 1 ? lapcontainer.classList.remove("hidden") : console.log("meow");
  clicks >= 5
    ? (lapcontainer.style.overflow = "scroll")
    : (lapcontainer.style.overflow = "hidden");
  console.log(
    "lap-" +
      clicks +
      ":" +
      currenttime[2] +
      ":" +
      currenttime[1] +
      ":" +
      currenttime[0]
  );
  laparray.push([...currenttime]);
  var laplistitem = document.createElement("li");

  for (var i = 0; i < clicks; i++) {
    // console.log("laparray:" + laparray.length);
    // var laplistitem = document.createElement("li");
    laplistitem.textContent =
      "lap-" +
      (i + 1) +
      ":" +
      laparray[i][2] +
      ":" +
      laparray[i][1] +
      ":" +
      laparray[i][0];
    laplist.append(laplistitem);
    console.log(
      "lap-" +
        i +
        ":" +
        laparray[i][2] +
        ":" +
        laparray[i][1] +
        ":" +
        laparray[i][0] +
        "\n"
    );
  }
};

var lapreset = () => {
  if (resetbutt.classList.contains("lap")) {
    lap();
  } else {
    reset();
  }
};
resetbutt.addEventListener("click", lapreset);
