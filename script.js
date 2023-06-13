//create variables
let bg = document.getElementById("bg");
let bird =document.getElementById("bird");
let mountains =document.getElementById("mountains");
let nametext = document.getElementById("nametext");
let darkmode = document.getElementById("darkmode-button");
let sendButton= document.getElementById("send-button");
let revealableContainers= document.querySelectorAll('.revealable');

/*  movement rates */
let rates={
  bg: 0.1,
  bird: 0.2,
  mountains: 0.005,
  text:0.6
};

//Dark Mode function
const DarkMode = ()=>{
  document.body.classList.toggle("dark-mode");
}
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

// This function validate a contact form before submitting it.
const validateForm=() =>{
  let contactform =document.getElementById("contactform").elements;
  let containerror= false;

  //create person object
  let person ={
    name:contactform[0].value,
    email:contactform[1].value,
    message:contactform[2].value
  };

  //loop through all element if input is < 2
  for(let i=0; i < contactform.length; i++){
    console.log(contactform[i].value);
    if (contactform[i].value.length <2 ){
      containerror = true;
      contactform[i].classList.add('error');
    }
    else{
      contactform[i].classList.remove('error');
    }
  }
  if (!person.email.includes('.com')){
    containerror = true;
    email.classList.add('error');
  }
  else{
    email.classList.remove('error');
  }
  if(containerror ==false){
    toggleModal(person);
  } 
}
sendButton.addEventListener('click', validateForm)

/* This function designed to display a modal with personalized message for person. */
const toggleModal =(person) =>{
  //modal cover  background and prevent user interactions
  let modal= document.getElementById("thanks-modal");
  //contain all conent and images
  let modalContent = document.getElementById("thanks-modal-content");

  modal.style.display="flex";
  modalContent.textContent=`Thank you, ${person.name}.`;

  setTimeout(() =>{
    modal.style.display="none";
  },2000); 
}

let animation ={
  revealDistance:150,
  intialOpacity:0,
  transitionDelay:0,
  transitionDuration:'6s',
  transitionProperty:'all',
  transitionTimingFunction:'ease'  
}

/*This function add or remove active class to revealable container based on their postion in relation to window scroll*/
function reveal(){
  for(i=0; i < revealableContainers.length; i++){
    let windowHeight = window.innerHeight;
    let topOfRevealableContainer= revealableContainers[i].getBoundingClientRect().top;
    if(topOfRevealableContainer < windowHeight - animation.revealDistance){
      //add class to revealable container class
      revealableContainers[i].classList.add('active');
    }else{
      //remove active class to container class
      revealableContainers[i].classList.remove('active');
    }
  }
}
window.addEventListener('scroll',reveal);