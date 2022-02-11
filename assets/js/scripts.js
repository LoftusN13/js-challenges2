// Checkbox Challenge
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked;

function handleCheck(e) {
    //check if shift key was down
    // AND that they are checking (rather than unchecking)
    let inBetween = false;

    if(e.shiftKey && this.checked) {
        //loop over every checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
                console.log("starting to check inbetween");
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }

    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));

// Video Player Challenge
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');

const progress = player.querySelector('.progress-bar');
const progressBar = player.querySelector('.progress-filled');

const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const range = player.querySelector('.video-slider');
const fullscreen = player.querySelector('.fullscreen');

//allows video to be played and paused
function togglePlay() {
    if(video.paused) {
        video.play();
        document.getElementById('icon').innerHTML = '<i class="fas fa-pause"></i>';

    } else {
        video.pause();
        document.getElementById('icon').innerHTML = '<i class="fas fa-play"></i>';
    }
}

//allows video to be skipped forward and backward
function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

//allows video playback speed to be changed
function handleRangeUpdate() {
    video[this.name] = this.value;
}

//fills progress bar accurately while video plays
function handleProgress() {
    const percent = (video.currentTime / video.duration) * 100;
    progressBar.style.flexBasis = `${percent}%`;
}

//scrub through video, pick where to play from by clicking in progress bar
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

//opens video into fullscreen
function openFullscreen() {
    if(player.requestFullscreen) {    
        player.requestFullscreen();
    }
}

//closes fullscreen
function closeFullscreen() {   
    if(document.exitFullscreen) {
        document.exitFullscreen();
    }
}

//toggles fullscreen button icon depending on current state
function toggleFullscreen() {
    if(document.fullscreenElement) {
        document.getElementById('full').innerHTML = '<i class="fas fa-expand"></i>';
    } else if(!document.fullscreenElement) {
        document.getElementById('full').innerHTML = '<i class="fas fa-compress"></i>';
    }
}
 
toggle.addEventListener('click', togglePlay);

video.addEventListener('click', togglePlay);
video.addEventListener('timeupdate', handleProgress);

skipButtons.forEach(button => button.addEventListener('click', skip));

range.addEventListener('change', handleRangeUpdate);
range.addEventListener('mousemove', handleRangeUpdate);

let mousedown = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mousedown && scrub(e));
progress.addEventListener('mousedown', () => mousedown = true);
progress.addEventListener('mouseup', () => mousedown = false);

fullscreen.addEventListener('click', openFullscreen);
fullscreen.addEventListener('click', closeFullscreen);
fullscreen.addEventListener('click', toggleFullscreen);