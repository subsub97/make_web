let min = 0;
let sec = 0;
let ten_Msec = 0;

const appendTens = document.getElementById('ten_Msec');
const appendMin = document.getElementById('min');
const appendSec = document.getElementById('sec');
const buttonStart = document.getElementById('bt_start');
const buttonStop = document.getElementById('bt_stop');
const buttonReset = document.getElementById('bt_reset');
let intervalId;


buttonStart.onclick = function () {
  clearInterval(intervalId)
  intervalId = setInterval(operateTimer, 10)
}

buttonStop.onclick = function () {
  clearInterval(intervalId)
}

buttonReset.onclick = function () {
  clearInterval(intervalId)
  ten_Msec = 0; sec = 0; min = 0;
  appendTens.textContent = "00"
  appendSec.textContent = "00"
  appendMin.textContent = "00"
}

//10ms 마다 시간에 대한 숫자가 증가한다.
function operateTimer() {
  ten_Msec++;
  appendTens.textContent = ten_Msec > 9 ? ten_Msec : '0' + ten_Msec;
  if (ten_Msec > 99) {
    sec++;
    appendSec.textContent = sec > 9 ? sec : '0' + sec;
    ten_Msec = 0;
  }
  if (sec > 59) {
    min++;
    appendMin.textContent = min > 9 ? min : '0' + min;
    sec = 0;
    appendSec.textContent = "00"
  }
}
