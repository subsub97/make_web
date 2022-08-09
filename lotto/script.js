// 클래스영역을 가져온 numbers는 .으로 가져왔다
// id영역을 가져온 draw,reset은 # 으로 가져옴

const numbersDiv = document.querySelector(".numbers")
const drawButton = document.querySelector("#draw")
const resetButton = document.querySelector("#reset")

// 6개의 숫자를 필요할때 마다 관리하기 위함
const lottoNumbers = []
// 로또번호를 색깔로 구분하기 위함
const colors = ['red','navy','gray','skyblue','coral']

function paintNumber(number){
  const eachNumDiv = document.createElement("div")
  // 각 구간에 따른 색 구분하기
  let colorIndex = Math.floor(number / 10)
  eachNumDiv.classList.add('eachnum')
  eachNumDiv.style.backgroundColor = colors[colorIndex]

  eachNumDiv.textContent = number
  numbersDiv.appendChild(eachNumDiv)
}

drawButton.addEventListener("click",function() {
  alert("당신을 1등으로 만들어줄 로또 번호가 궁금합니까?")
  //숫자 6개를 만들어야한다.
  while(lottoNumbers.length < 6){
    //Math.random은 소수점을 가지고 나오기때문에 floor 을 이용해 내림한다.
    let ran = Math.floor(Math.random() * 45) + 1
    // random 중복 숫자 생성 방지하기
    // indexOf이용하기
    if(lottoNumbers.indexOf(ran) === -1){
      lottoNumbers.push(Number(ran))
      lottoNumbers.sort(function(a,b){
        return a - b;
      })
    }
  }
  // 오름차순 정렬을 for loop
  for (i = 0; i < 6 ; i++){
    paintNumber(lottoNumbers[i])
  }
})

resetButton.addEventListener('click', function(){
  //splice(a,b) 는 a번째 인덱스부터 b개 지우겠다는 배열 메소드
  lottoNumbers.splice(0,6)
  // numbersDiv를 없는것으로 만듬 ""를 이용해서
  numbersDiv.innerHTML =""
})
