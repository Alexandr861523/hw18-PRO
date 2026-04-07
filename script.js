const input = document.getElementById("secondsInput");
const display = document.getElementById("timerDisplay");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");

let timer = null;
let timeLeft = 0;

function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;

    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
startBtn.addEventListener("click", () => {
    const value = Number(input.value);

    if (!value || value <= 0) {
        alert("Please enter a valid number of seconds");
        return;
    }

    timeLeft = value;
    display.textContent = formatTime(timeLeft);

    clearInterval(timer);

    timer = setInterval(() => {
        timeLeft--;

        display.textContent = formatTime(timeLeft);

        if (timeLeft <= 0) {
            clearInterval(timer);
        }
    }, 1000);
});


stopBtn.addEventListener("click", () => {
    clearInterval(timer);
});