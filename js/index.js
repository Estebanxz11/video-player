const $video = document.querySelector('#video');
const $play = document.querySelector('#play');
const $pause = document.querySelector('#pause');
const $backward = document.querySelector('#backward');
const $forward = document.querySelector('#forward');

//funcion para darle plar al video
$play.addEventListener('click', handlePlay);
function handlePlay() {
    $video.play();
    $play.hidden = true;
    $pause.hidden = false;
    // console.log('le diste click al boton de play');
    
}

//funcion para pausar el video
$pause.addEventListener('click', handlePause);
function handlePause() {
    $video.pause();
    $pause.hidden = true;
    $play.hidden = false;
    // console.log('le diste click al boton de pausa');
        
}

//funcion para retroceder 10 segundos el video
$backward.addEventListener('click', handleBackward );
function handleBackward() {
    $video.currentTime -= 10 ;
    // console.log('le diste click al boton de retroceder',$video.currentTime);
}

//funcion para adelantar 10 segundos el video
$forward.addEventListener('click', handleForward );
function handleForward() {
    $video.currentTime += 10;
    // console.log('le diste click al boton de adelantar',$video.currentTime);
}

const $progress = document.querySelector('#progress'); 
$video.addEventListener('loadedmetadata', handleLoaded);
$video.addEventListener('timeupdate', handleTimeUpdate);

function handleLoaded() {
    $progress.max= $video.duration;
    // console.log('ha cargado mi video', $video.duration);
}

function handleTimeUpdate() {
    $progress.value = $video.currentTime
    // console.log('holi', $video.currentTime);
}

$progress.addEventListener('input', handleInput);

function handleInput() {
    $video.currentTime=$progress.value
    // console.log($progress.value);
}