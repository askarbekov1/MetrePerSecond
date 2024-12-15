const openNavbarEl = document.querySelector('.burger-tap');
const classBurger = document.querySelector('.burger');
const closeNavbarEl = document.querySelector('.burger-close');

openNavbarEl.addEventListener("click", ()=>{
  classBurger.classList.add("open");
})

closeNavbarEl.addEventListener("click", ()=>{
  classBurger.classList.remove("open");
})