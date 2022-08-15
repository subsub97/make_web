const spans =document.querySelectorAll('span')
const contents = document.querySelectorAll(".content")
const firstTop = contents[0].offsetLeft
const secondTop = contents[1].offsetLeft
const thirdTop = contents[2].offsetLeft

spans[0].onclick = function(){
  window.scroll({left:firstTop,behavior:'smooth'})
}
spans[1].onclick = function(){
  window.scroll({left:secondTop,behavior:'smooth'})
}
spans[2].onclick = function(){
  window.scroll({left:thirdTop,behavior:'smooth'})
}
