var elButton = document.querySelector(".button")
var elBoxContent = document.querySelector(".menu")
var elBoxContent = document.querySelector(".menu__list")


elButton.addEventListener("click", function(){
  elBoxContent.classList.toggle("box__content--open")
});