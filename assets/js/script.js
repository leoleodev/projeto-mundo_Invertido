
function changeTheme(){
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('ligth-theme');

    const theme = document.body.classList[0];
    const music = theme === 'light-theme' ? 'normal-world.mpeg' : 'inverted-world.mpeg'

    const audio = document.getElementById('song');
    audio.src = `assets/musics/${music}`;
    audio.play();
    audio.volume = 0.3;
}

window.addEventListener('click', function() {
    const audio = document.getElementById('song');
    audio.play();
    audio.volume = 0.3;
  })