let countDownDate = new Date("Dec 31, 2023 00:00:00").getTime();

let counter = setInterval(() => {
  // Get Date Now
  let dateNow = new Date().getTime();

  // Find The Date Difference Between Now And Countdown Date
  let dateDiff = countDownDate - dateNow;

  let days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDiff % (1000 * 60)) / 1000);

  document.querySelector(".days").innerHTML = days + `<br>` + `<br>` + "days";
  document.querySelector(".hours").innerHTML =
    hours + `<br>` + `<br>` + "hours";
  document.querySelector(".minutes").innerHTML =
    minutes + `<br>` + `<br>` + "minutes";
  document.querySelector(".seconds").innerHTML =
    seconds + `<br>` + `<br>` + "seconds";

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);
