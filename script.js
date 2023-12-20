//your JS code here. If required.
let counter = 0;
const btn = document.getElementById("incrementBtn")
const para = document.getElementById("counter")
btn.addEventListener("click",()=>{
	alert(counter);
	counter++;
	para.innerText=`${counter}`
})
