// 몇번째 블록인 알려주기 위한 변수
var count = 2;

// 스크롤 동작이 발생한다면
window.onscroll =function(){
  if((window.innerHeight + window.scrollY) >= document.body.offsetHeight){
    var toAdd = document.createElement("div");
    toAdd.classList.add("box")
    toAdd.textContent = `${++count}번째 블록`
    document.querySelector('section').appendChild(toAdd);
  }
}
