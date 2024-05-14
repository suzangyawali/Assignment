// keydown and keyup event

// keydown
// The keydown event is fired when a key is pressed

//keyup
// The keyup event is fired when a key is released.

let keyup = document.querySelector(".keyup");
let keydown = document.querySelector(".keydown");
let keypress = document.querySelector(".keypress");

keyup.addEventListener("keyup",(e)=>{
  keyup.style.color = "red";
  document.querySelector("#form").style.backgroundColor=e.target.value;
  console.log(e);
});

keydown.addEventListener("keydown",(e1)=>{
  keydown.style.color = "red";
  document.querySelector("#form").style.backgroundColor=e1.target.value;
  console.log(e1);
});

keypress.addEventListener("keypress",(e)=>{
  keypress.style.color = "red";
  document.querySelector("#form").style.backgroundColor=e.target.value;
  console.log(e);
});

