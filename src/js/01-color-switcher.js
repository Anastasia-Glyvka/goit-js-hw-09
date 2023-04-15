const btnStart = document.querySelector('[data-start');
const btnStop = document.querySelector('[data-stop]');

btnStart.addEventListener('click', onClickStart);
btnStop.addEventListener('click', onClickStop);

let id = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function onClickStart() {
  id = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.setAttribute('disabled', '');
}

function onClickStop() {
  clearInterval(id);
  btnStart.removeAttribute('disabled');
}
