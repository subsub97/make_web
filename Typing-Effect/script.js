const content = "안녕하세요"
const text = document.querySelector(".text")
// content 문자열의 접근을 위한 인덱스 생성
let index = 0;

function typing(){
  text.textContent += content[index++];
  if(index > content.length){
    text.textContent = ""
    index = 0;
  }
}

setInterval(typing,500)
