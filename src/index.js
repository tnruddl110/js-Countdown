import "./styles.css";

// You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000;
const TIME = document.querySelector(".js-clock");

function getTime() {
  // Don't delete this.

  const seconds = 1000;
  const minutes = seconds * 60;
  const hours = minutes * 60;
  const days = hours * 24;

  const today = new Date();
  const xmasDay = new Date("2020-12-25:00:00:00+0900");
  const countdown = xmasDay - today;

  const todayDay = Math.floor(countdown / days);
  const todayHours = Math.floor((countdown / hours) % 24);
  const todayMinutes = Math.floor((countdown / minutes) % 1440);
  const todaySeconds = Math.floor((countdown / seconds) % 3600);

  TIME.innerText = `
  ${todayDay < 10 ? `0${todayDay}` : todayDay}d ${
    todayHours < 10 ? `0${todayHours}` : todayHours
  }h ${todayMinutes < 10 ? `0${todayMinutes}` : todayMinutes}m  ${
    todaySeconds < 10 ? `0${todaySeconds}` : todaySeconds
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}
init();
