const refs = {
    body: document.querySelector('body'),
    start: document.querySelector('button[data-start]'),
    stop: document.querySelector('button[data-stop]'),
};


refs.stop.disabled = true;

let timerId;

refs.start.addEventListener('click', onStartClick);
refs.stop.addEventListener('click', onStopClick);



function onStartClick(event) {
    refs.stop.disabled = false;
    refs.start.disabled = true;

    timerId = setInterval(changeBodyBgc, 1000);
}

function onStopClick(event) {
    refs.stop.disabled = true;
    refs.start.disabled = false;
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeBodyBgc() {
    refs.body.style.backgroundColor = getRandomHexColor();
}