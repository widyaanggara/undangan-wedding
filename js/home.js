const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

let countDown = new Date('Sep 13, 2024 15:00:00').getTime();

let x = setInterval(function() {
    let now = new Date().getTime(),
        distance = countDown - now;

    document.getElementById('day').innerText = Math.floor(distance / day);
    document.getElementById('hour').innerText = Math.floor((distance % day) / hour);
    document.getElementById('minute').innerText = Math.floor((distance % hour) / minute);
    document.getElementById('second').innerText = Math.floor((distance % minute) / second);

}, 1000);


// Music
const audio = document.getElementById('myAudio');
const playPauseBtn = document.getElementById('playPauseBtn');

playPauseBtn.addEventListener('click', function() {
    if (audio.paused) {
        audio.play();
        playPauseBtn.classList.remove('icon-pause');
        playPauseBtn.classList.add('icon-music');
    } else {
        audio.pause();
        playPauseBtn.classList.remove('icon-music');
        playPauseBtn.classList.add('icon-pause');
    }
});
