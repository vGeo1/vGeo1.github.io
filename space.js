

$(document).ready(function(){
    $('button.btn-extend').click(function(){
      $('.player-screen').addClass("active");
    });
    $('button.btn-close').click(function(){
      $('.player-screen').removeClass("active");
    });
  });
  
  const player = document.querySelector('.player');
  const playButton = document.getElementById('play-button');
  
  playButton.addEventListener('click', () => {
    player.classList.toggle('active');
  });