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
const ranges = player.querySelectorAll('.video-slider');

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

toggle.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);