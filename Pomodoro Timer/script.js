

let timer;
let minutes = 25;
let seconds = 0;
let isRunning = false;

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        timer = setInterval(updateTimer, 1000);
        document.getElementById('startBtn').innerText = 'Pause';
    } else {
        isRunning = false;
        clearInterval(timer);
        document.getElementById('startBtn').innerText = 'Resume';
    }
}

function updateTimer() {
    if (minutes === 0 && seconds === 0) {
        clearInterval(timer);
        isRunning = false;
        document.getElementById('startBtn').innerText = 'Start';
        alert('Time for a break!'); // You can customize this message
        resetTimer();
    } else {
        if (seconds === 0) {
            minutes--;
            seconds = 59;
        } else {
            seconds--;
        }
        updateDisplay();
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    minutes = 25;
    seconds = 0;
    updateDisplay();
    document.getElementById('startBtn').innerText = 'Start';
}

function updateDisplay() {
    const timerDisplay = document.getElementById('timer');
    timerDisplay.innerText = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}
