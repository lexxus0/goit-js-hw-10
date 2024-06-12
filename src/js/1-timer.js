import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const dateInput = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('button[data-action="start"]');
const daysSpan = document.querySelector('span[data-action="days"]');
const hoursSpan = document.querySelector('span[data-action="hours"]');
const minutesSpan = document.querySelector('span[data-action="minutes"]');
const secondsSpan = document.querySelector('span[data-action="seconds"]');

let userSelectedDate = null;
let interval = null;


startBtn.disabled = true;

// функція конвертування часу
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// функція для додавання 0
function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

//const options
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  allowInput: false,
  dateFormat: 'Y-m-d H:i',
  onClose(selectedDates) {
    const selectedDate = selectedDates[0];
    const timeNow1 = new Date();

    if (selectedDate <= timeNow1) {
      iziToast.warning({
        title: 'Error',
        message: 'Please choose a date in the future',
        backgroundColor: '#ef4040',
        titleColor: '#fff',
        messageColor: '#fff',
        messageSize: '16px',
        messageLineHeight: '150%',
        titleSize: '16px',
        titleLineHeight: '150%',
        position: 'topRight',
        timeout: 5000,
        maxWidth: '400px',
        closeOnClick: true,
        pauseOnHover: true,
        iconColor: '#fff',
        closeOnEscape: true,
      });
      startBtn.disabled = true;
    } else {
      userSelectedDate = selectedDate;
      startBtn.disabled = false;
    }
  },
};

// flatpickr 
flatpickr('#datetime-picker', options);


startBtn.addEventListener('click', () => {
  if (!userSelectedDate) {
    return;
  }

  dateInput.disabled = true;
  startBtn.disabled = true;

  clearInterval(interval);
  interval = setInterval(() => {
    const timeNow2 = new Date();
    const timeLeft = userSelectedDate - timeNow2;

    if (timeLeft <= 0) {
      clearInterval(interval);
      iziToast.success({
        title: 'Finally!',
        message: 'Countdown has ended',
        backgroundColor: '##228B22',
        position: 'topRight',
        timeout: 3000,
        maxWidth: '400px',
        closeOnClick: true,
        pauseOnHover: false,
        messageSize: '16px',
        messageLineHeight: '150%',
        titleSize: '16px',
        titleLineHeight: '150%',
        closeOnEscape: true,
        titleColor: '#fff',
        messageColor: '#fff',
      });
      dateInput.disabled = false;
      startBtn.disabled = true;
      return;
    }

    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    daysSpan.textContent = addLeadingZero(days);
    hoursSpan.textContent = addLeadingZero(hours);
    minutesSpan.textContent = addLeadingZero(minutes);
    secondsSpan.textContent = addLeadingZero(seconds);
  }, 1000);
});