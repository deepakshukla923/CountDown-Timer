const daysEl = document.getElementById("days");
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById("mins");
const secsEl = document.getElementById("secs");
const year = new Date().getFullYear();
const month = new Date().getMonth();
const ageEl = document.getElementById('age');

function countdown(){
    const myBirthDay = new Date(year, 6, 31);
    const currentDate = new Date();
    const next = new Date(year +1, 6, 31);

    let diff, age;
    if (month>6) {
        diff = (next - currentDate) / 1000;
        age = (year + 1) - 1998
    }
    else{
        diff = (myBirthDay - currentDate) / 1000;
        age = year - 1998
    }


    const days = Math.floor(diff / 3600 / 24);
    const hours = Math.floor(diff/3600) % 24;
    const mins = Math.floor(diff / 60) % 60;
    const secs = Math.floor(diff) % 60;


    daysEl.innerHTML = days;
    hoursEl.innerHTML = formatTime(hours);
    minsEl.innerHTML = formatTime(mins);
    secsEl.innerHTML = formatTime(secs);

}

let age;
    if (month>6) {
        age = (year + 1) - 1998
    }
    else{
        age = year - 1998
    }

ageEl.innerHTML = age;
console.log(age)

function formatTime(time){
    return time < 10 ? `0${time}` : time;
}

countdown();
setInterval(countdown, 1000);
