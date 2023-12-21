// AUDIO
const audio = document.querySelector('audio');
const playBtn = document.getElementById('icon');
console.log(audio);

function playAudio() {
    if(audio.paused){
        audio.play();
        playBtn.classList.remove('fa-play');
        playBtn.classList.add('fa-pause');
    } else {
        audio.pause();
        playBtn.classList.remove('fa-pause');
        playBtn.classList.add('fa-play');
    }
}

// TIMER

const items = document.querySelectorAll("div#timer p");
const countDownDate = new Date("Dec 29, 2023 23:00:00").getTime();
let counter = setInterval( () => {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const values = [days, hours, minutes, seconds];

    const format = (item) => {
        return item < 10 ? item = `0${item}` : item;
    }

    items.forEach((item, index) => {
        item.innerHTML = format(values[index]);
    })

    if(timeLeft < 0){
        clearInterval(counter);
        items.forEach(item => {
            item.innerHTML = "00";
        })
    }

}, 1000);