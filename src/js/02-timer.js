import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';

const dateInput = document.querySelector("#datetime-picker");
const startBtn = document.querySelector('button[data-start]');

const days = document.querySelector(`span[data-days]`);
const hours = document.querySelector(`span[data-hours]`);
const minutes = document.querySelector(`span[data-minutes]`);
const seconds = document.querySelector(`span[data-seconds]`);

startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,  
    onClose(selectedDates) {
        const currentTime = Date.now();
        const futureTimeSelected = selectedDates[0];
        const futureTime = futureTimeSelected.getTime();
        if (futureTime > currentTime) {
          startBtn.disabled = false;
        } else {
            Notiflix.Notify.failure('Please choose a date in the future');
      }
        console.log('selectedDates[0].getTime()', selectedDates[0].getTime());
        

        startBtn.addEventListener('click', onStartBtnClick);
        
        function onStartBtnClick(event) {
    dateInput.disabled = true;
    startBtn.disabled = true;   
            
            const timerId = setInterval(() => {
        const currentTime = Date.now();
    const timeToStop = futureTime - currentTime;
    
    if (timeToStop <= 0 ) {
    clearInterval(timerId);
        dateInput.disabled = false;
        console.log('stop!');
        return;
    }
    
    const stopTime = futureTime - currentTime;    
    const timeToFinish = convertMs(stopTime);

        days.textContent = addLeadingZero(timeToFinish.days);
        hours.textContent = addLeadingZero(timeToFinish.hours);
        minutes.textContent = addLeadingZero(timeToFinish.minutes);
        seconds.textContent = addLeadingZero(timeToFinish.seconds);
    
    }, 1000);
}

  },
};


const fp = flatpickr(dateInput, options);



function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

// console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
// console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
// console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}


function addLeadingZero(value) {
      return String(value).padStart(2, '0')
}
  

