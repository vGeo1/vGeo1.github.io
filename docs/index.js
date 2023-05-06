

 var audio = new Audio('https://dl.sndup.net/r6kq/bbno$%20-%20help%20herself.mp3');
var progress = document.querySelector('.progress');
var progressBar = document.querySelector('.proggres-bar');
var currentTime = document.querySelectorAll('.time')[0];
var durationTime = document.querySelectorAll('.time')[1];

function toggleAudio() {
  var button = document.querySelector('.btn-play');
  var player = document.querySelector('#player');
  if (audio.paused) {
    audio.play();
    player.appendChild(audio);
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-pause" fill="currentColor"><path d="M6 4h4v16H6zM14 4h4v16h-4z"/></svg>';
  } else {
    audio.pause();
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-play" fill="currentColor"><path d="M5 3l14 9-14 9V3z"/></svg>';
  }
}
$(document).ready(function(){
  $('button.btn-extend').click(function(){
    $('.player-screen').addClass("active");
  });
  $('button.btn-close').click(function(){
    $('.player-screen').removeClass("active");
  });
});


audio.addEventListener('timeupdate', function() {
  var duration = audio.duration;
  var currentTimeVal = audio.currentTime;
  var progressWidth = (currentTimeVal / duration) * 100;
  progress.style.width = progressWidth + '%';
  currentTime.textContent = formatTime(currentTimeVal);
  durationTime.textContent = formatTime(duration);
});

function formatTime(time) {
  var minutes = Math.floor(time / 60);
  var seconds = Math.floor(time % 60);
  return (minutes < 10 ? '0' : '') + minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
}
  const player = document.querySelector('.player');
const playButton = document.getElementById('play-button');

playButton.addEventListener('click', () => {
  player.classList.toggle('active');
});
