let curPos=0; // 현재 보여지고있는 이미지의 인덱스 번호
let positionValue = 0; //이미지 태그의 위치 값을 지정할 변수
const IMAGE_WIDTH = 640;

const prevBtn =document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const images = document.querySelector(".images");

//초기화 함
function init(){
  //첫 이미지 출력될때 prev 버튼 비활성화하는 함수
  prevBtn.setAttribute('disabled','true');
  nextBtn.addEventListener("click",next);
  prevBtn.addEventListener("click",prev);
}

function next(){
  if(curPos<3){
    prevBtn.removeAttribute('disabled');
    positionValue -= IMAGE_WIDTH;
    images.style.transform =`translateX(${positionValue}px)`;
    curPos +=1;
  }
  if(curPos === 3){
    nextBtn.setAttribute('disabled',`true`);
  }
}

function prev(){
  if(curPos>0){
    nextBtn.removeAttribute('disabled');
    positionValue += IMAGE_WIDTH;
    images.style.transform =`translateX(${positionValue}px)`;
    curPos -=1;
  }
  if(curPos === 0){
    prevBtn.setAttribute('disabled','true');
  }
}

 init();
