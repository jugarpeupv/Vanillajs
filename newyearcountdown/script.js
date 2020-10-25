const newYear = "1 Jan 2021";

const pdays = document.getElementById("p_days");
const phours = document.getElementById("p_hours");
const pminutes = document.getElementById("p_minutes");
const pseconds = document.getElementById("p_seconds");

function countdown(){
    const endYear = new Date(newYear);
    const actualDate = new Date();

    const seconds = Math.floor((endYear-actualDate)/1000);
    const days = Math.floor(seconds/3600/24);
    const hours = Math.floor(seconds/3600-days*24);
    const minutes = Math.floor(seconds/60-days*24*60-hours*60);
    const actualseconds = Math.floor(seconds-days*24*3600-hours*3600-minutes*60);
    pdays.innerHTML = formatTime(days);
    phours.innerHTML = formatTime(hours);
    pminutes.innerHTML= formatTime(minutes);
    pseconds.innerHTML=formatTime(actualseconds);
    
}

function formatTime(time){
    return time<10 ? (`0${time}`): time;  
}

countdown();

setInterval(countdown, 1000);
