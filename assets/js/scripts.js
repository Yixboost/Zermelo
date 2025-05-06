// --- Live clock and date (Dutch days/months) ---
const clockTime = document.getElementById("clock-time");
const clockDate = document.getElementById("clock-date");
function updateClock() {
  const now = new Date();
  // Dutch day/months arrays
  const days = [
    "Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"
  ];
  const months = [
    "januari", "februari", "maart", "april", "mei", "juni", "juli", "augustus", "september", "oktober", "november", "december"
  ];

  // Time
  let h = String(now.getHours()).padStart(2, '0');
  let m = String(now.getMinutes()).padStart(2, '0');
  if (clockTime) clockTime.textContent = `${h}:${m}`;

  // Date
  const day = days[now.getDay()];
  const dat = now.getDate();
  const mon = months[now.getMonth()];
  if (clockDate) clockDate.textContent = `${day}. ${dat} ${mon}`;
}
setInterval(updateClock, 1000);
updateClock();

// --- Splash Screen Logic ---
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    if(splash) {
      splash.style.opacity = '0';
      setTimeout(() => {
        splash.setAttribute('hidden', '');
      }, 700);
    }
  }, 1100);
});

// --- Optionally: sidebar nav coolness (leave for future) ---
// For more complex interactivity, add event listeners here
