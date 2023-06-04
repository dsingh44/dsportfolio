let bg = document.getElementById("bg");
let bird =document.getElementById("bird");
let mountains =document.getElementById("mountains");
let nametext = document.getElementById("nametext");
let darkmode = document.getElementById("darkmode-button");

let rates={
  bg: 0.05,
  bird: 2.5,
  mountains: 0.15,
  text:14
};

const DarkMode = ()=>{
  document.body.classList.toggle("dark-mode");
}
//event listener
darkmode.addEventListener("click",DarkMode);


// This function handles scroll event
const handlescroll = ()=> {
  let scrollDistance = window.scrollY;
  /*background rate*/
  bg.style.top= scrollDistance * rates.bg+'px';
  bird.style.left= - scrollDistance * rates.bird+'px';
  mountains.style.top= - scrollDistance * rates.mountains+'px';
  nametext.style.top = scrollDistance * rates.text +'px';
}
window.addEventListener('scroll',handlescroll)