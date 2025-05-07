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

// --- Startpage calendar list ---
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('list-calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    locale: 'nl',
    initialView: 'listWeek',
    height: '100%',
    headerToolbar: {
      start: 'prev,next today',
      center: 'title',
      end: ''
    },
    buttonText: {
      today: 'Vandaag'
    },
    views: {
      listWeek: {
        noEventsText: 'Geen resultaten',
      }
    },
    allDayText: 'Hele dag',
    events: [
      {
        title: 'Voorbeeld event',
        start: new Date().toISOString().split('T')[0]
      }
    ]
  });
  calendar.render();
});

// --- Big calendar ---
document.addEventListener('DOMContentLoaded', function () {
  const calendarEl = document.getElementById('calendar');
  const calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'timeGridWeek',
    nowIndicator: true,
    firstDay: 1,
    hiddenDays: [0, 6],
    locale: 'nl',
    height: '100%',
    headerToolbar: {
      start: 'timeGridWeek,timeGridDay', 
      center: 'title',
      end: 'today prev,next'
    },
    buttonText: {
      today: 'Vandaag',
      week: 'Week',
      day: 'Dag'
    },
    events: [
      {
        title: 'Wiskunde toets',
        start: new Date().toISOString().split('T')[0] + 'T09:00:00',
        end: new Date().toISOString().split('T')[0] + 'T10:00:00'
      },
      {
        title: 'Gym',
        start: new Date().toISOString().split('T')[0] + 'T13:00:00',
        end: new Date().toISOString().split('T')[0] + 'T14:00:00'
      },
      {
        title: 'Engels (vervallen)',
        start: new Date().toISOString().split('T')[0] + 'T10:00:00',
        end: new Date().toISOString().split('T')[0] + 'T11:00:00',
        color: 'red',
        textColor: 'white'
      }
    ],
    allDayText: 'Hele dag',
    noEventsContent: 'Geen resultaten',
    slotDuration: '00:30:00',
    slotLabelInterval: '01:00', 
    slotLabelFormat: { hour: 'numeric', minute: '2-digit', hour12: false },
    slotMinTime: '08:00:00', 
    slotMaxTime: '19:00:00' 
  });

  calendar.render();
});
