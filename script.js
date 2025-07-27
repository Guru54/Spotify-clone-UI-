const playPauseBtn = document.getElementById("playPause");
const progressBar = document.querySelector(".playback-bar");
const currentTimeDisplay = document.querySelector(".current-time");
const totalTimeDisplay = document.querySelector(".tol-time");

// Creating an audio element
const audio = new Audio("assets/sample_song.mp3"); 

// Play/Pause Toggle
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.src = "assets/pause_icon.png"; // Update button to pause icon
    } else {
        audio.pause();
        playPauseBtn.src = "assets/play_icon.png"; // Update button to play icon
    }
});

// Update Progress Bar
audio.addEventListener("timeupdate", () => {
    let progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;

    // Update Time Display
    currentTimeDisplay.textContent = formatTime(audio.currentTime);
    totalTimeDisplay.textContent = formatTime(audio.duration);
});

// Seek to Position
progressBar.addEventListener("input", () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Format Time Function
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds % 60);
    return `${min}:${sec < 10 ? "0" + sec : sec}`;
}
