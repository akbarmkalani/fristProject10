let menuIocn = document.querySelector(".iconMenu")
let closeIocn = document.querySelector(".closeIocn")
let hamburgerMneu = document.querySelector('.hamburger-menu')


menuIocn.addEventListener('click',function (){
  hamburgerMneu.classList.add('showMenu')
})
closeIocn.addEventListener('click', function(){
  hamburgerMneu.classList.remove('showMenu')
})
