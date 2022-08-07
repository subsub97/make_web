copy.onclick

document.getElementById('copy').onclick = function(){
  // 우리가 추가할 기능은 복사하기인데 크게 3단계로 나눌수 있다.
  // 1. 복사 대상 선정
  // 2. 내용 선택(복사 할 대상의 적혀있는 내용 즉 컨텐츠 지정)
  // 3. 복사 진행
  var text = document.getElementById('text')
  //  select method는 무엇이냐 텍스트를 선택한다는 의미
  // ex) 텍스트를 드래그하면 선택되었다는 의미로 바탕이 생기는데 그것과 동일

  text.select();

  document.execCommand("copy");
  alert("copied!")
}
