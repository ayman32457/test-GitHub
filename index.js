const hourEl = document.getElementById("hours");
const minuteEL = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

updateClock();

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let a = "AM";

  if(h > 12){
    a = "PM";
  }



/* if(s < 10) {
  s = "0" + s;
}

if (m < 10) {
  m = "0" + m;
}

if (h < 10) {
   h = "0" + h;
} */

//conditional operator eller ternary opreator 
h = h < 10 ? "0" + h : h;
m = m < 10 ? "0" + m : m;
s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEL.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = a;

  setTimeout(() => {
    updateClock();
  }, 1000) ;
  
}