let form = document.querySelector('.alarm-clock');
let alarmTime = document.querySelector('.alarm-clock__time');
let submit = document.querySelector('.submit');
let ringTime = document.querySelector('.ring_time');
let alarmOff = document.querySelector('.alarm-off-btn');


let alarmTimeArr = [];
let alarmTimeHours = 0;
let alarmTimeMinutes = 0;
let alarmAudio = new Audio('alarm.mp3');

form.onsubmit = function(e) {
    e.preventDefault();
    ringTime.innerHTML = `Будильник установлен на ${alarmTime.value}`;
    alert(`Будильник установлен на ${alarmTime.value}`);
    alarmTimeArr = alarmTime.value.split(':');
    alarmTimeHours = alarmTimeArr[0];
    alarmTimeMinutes = alarmTimeArr[1];
    alarmTime.value = '';
}

setInterval(() => {
    let time = new Date();
    if(alarmTimeHours == time.getHours() && alarmTimeMinutes == time.getMinutes()) {
        alarmAudio.play();
        alarmOff.style.display = 'inline-block';
        submit.disabled = true;
        submit.classList.remove('submit');
        submit.classList.add('submit_disabled');
    } 
}, 60000)

alarmOff.onclick = () => {
    alarmOff.style.display = 'none';
    alarmAudio.pause();
    alarmAudio.currentTime = 0;
    alarmTimeHours = 0;
    alarmTimeMinutes = 0;
    ringTime.innerHTML = '';
    submit.disabled = false;
    submit.classList.remove('submit_disabled');
    submit.classList.add('submit');
}