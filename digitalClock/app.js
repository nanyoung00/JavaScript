let calendarTarget = document.getElementById("calendar"); 
let clockTarget = document.getElementById("clock");



function calendar(){
    let date = new Date();
    let year = date.getYear();
    let month = date.getMonth();
    let clockDate = date.getDate();
    let day = date.getDay();
    let week = ['일','월','화','수','목','금','토'];
    
    calendarTarget.innerText = `${month+1}월 ${clockDate}일 ${week[day]}요일`

}


function nowClock(){
    let date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    clockTarget.innerText = 
    `${hour<10 ? `0${hour}`: hour} : ${min < 10 ? `0${min}`:min} : ${sec<10 ? `0${sec}`:sec}`;
}


setInterval(nowClock, 1000);
calendar();