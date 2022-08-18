
let min = 0;
let sec = 0;
let ten_Msec = 0;
let cnt = 0;

let recode_list = [];

const appendTens = document.getElementById('ten_Msec');
const appendMin = document.getElementById('min');
const appendSec = document.getElementById('sec');


const r_appendTens = document.getElementById('r_ten_Msec');
const r_appendMin = document.getElementById('r_min');
const r_appendSec = document.getElementById('r_sec');
const r_cnt = document.getElementById('r_cnt');
const r_all = document.getElementById('r_all');

const buttonStart = document.getElementById('bt_start');
const buttonStop = document.getElementById('bt_stop');
const buttonReset = document.getElementById('bt_reset');
const buttonRecode = document.getElementById('bt_recode');
const appendcomma = document.getElementById('comma2');
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

  r_cnt.textContent = "-번"
  r_appendMin.textContent = "00"
  r_appendSec.textContent = "00"
  r_appendTens.textContent = "00"

  for(i = 0 ; i < cnt; i++){
  document.querySelector('.r_all').remove();
  }

  cnt = 0;



}



buttonRecode.onclick = function()
{
    r_cnt.textContent = `${++cnt} 번째 `
    r_appendMin.textContent = min > 9 ? min : '0' + min
    r_appendSec.textContent = sec > 9 ? sec : '0' + sec
    r_appendTens.textContent = ten_Msec > 9 ? ten_Msec : '0' + ten_Msec


    // 모든 레코드를 출력하기위한 코드

    var toAdd = document.createElement("div");
    toAdd.classList.add("r_all")
    toAdd.textContent = r_cnt.textContent + ':' + r_appendMin.textContent + ':' + r_appendSec.textContent + ':' + r_appendTens.textContent
    document.querySelector('section').append(toAdd);

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
  // 특정 시간부터 색상 바꾸기
  if(55< sec){
    appendSec.style.color = 'gold'
    appendTens.style.color ='gold'
    comma2.style.color = 'gold'
    if(59 < sec){
      appendSec.style.color = 'red'
      appendTens.style.color = 'red'
      comma2.style.color = 'red'
    }
  }

function reset_recodetime() {
  r_cnt.textContent = `${++cnt} 번째 `
  r_appendMin.textContent = min > 9 ? min : '0' + min
  r_appendSec.textContent = sec > 9 ? sec : '0' + sec
  r_appendTens.textContent = ten_Msec > 9 ? ten_Msec : '0' + ten_Msec
}




}
