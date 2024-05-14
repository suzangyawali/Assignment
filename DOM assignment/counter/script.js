//  <button>Decrement by 1</button>
let value=document.querySelector("#plus");
console.log(value);
let count=0;
value.addEventListener("click",()=>
{
  console.log("button clicked");
  document.querySelector("#plus").style.color="blue";
  count++;
  document.querySelector("#odd").innerText = `${count}`;
});

let value2=document.querySelector("#minus");

value2.addEventListener("click", (event) => {
    console.log("minus clicked");
 document.querySelector("#minus").style.color="blue";
 count--;
  document.querySelector("#odd").innerText = `${count}`;
});

let value3=document.querySelector("#reset");
value3.addEventListener("click",()=>{
    console.log("minus clicked");
 document.querySelector("#reset").style.color="blue";
 count=0;
  document.querySelector("#odd").innerText = `${count}`;
})