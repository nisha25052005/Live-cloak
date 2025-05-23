const timeEl = document.getElementById('time');
const dateEl = document.getElementById('date');
const dayEl = document.getElementById('day');

const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

function updateClock() {
  const now = new Date();

  // Time
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  timeEl.textContent = `${hours}:${minutes}:${seconds}`;

  // Date
  const month = months[now.getMonth()];
  const date = now.getDate();
  const year = now.getFullYear();
  dateEl.textContent = `${month} ${date}, ${year}`;

  // Day
  const day = weekdays[now.getDay()];
  dayEl.textContent = day;
}

// Initial call and interval setup
updateClock();
setInterval(updateClock, 1000);
