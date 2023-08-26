const hour=document.querySelector('.hrs');
const minute=document.querySelector('.min');
const second=document.querySelector('.sec');

setInterval(runClock,1000);

function runClock(){
let time=new Date();
let sec=time.getSeconds()/60;
let min=(sec+time.getMinutes())/60;
let hrs=(min+time.getHours())/12;
//console.log(hrs,min,sec);
hour.style.setProperty('--rotation',hrs*360);
minute.style.setProperty('--rotation',min*360);
second.style.setProperty('--rotation',sec*360);

}

runClock();
