function menuOnClick() {
  document.getElementById("menu-bar").classList.toggle("change");
  document.getElementById("nav").classList.toggle("change");
  document.getElementById("menu-bg").classList.toggle("change-bg");
  document.querySelector("menu-bg").classList.toggle("blur");
}


document.querySelector("menu-bar").addEventListener("click",function(){
  document.querySelector("html").classList.toggle("blur")
})
