// 定数と変数の宣言
const time = document.getElementById('time');
const startButton = document.getElementById('startButton');
const stopButton = document.getElementById('stopButton');
const resetButton = document.getElementById('resetButton');

let startTime;
let stopTime = 0;
let totalTime;

//　経過時間表示
function displayTime() {
    const currentTime = new Date(Date.now ()- startTime + stopTime);
    const hour = String(currentTime.getHours()-9).padStart(1, '0');
    const minute = String(currentTime.getMinutes()).padStart(2, '0');
    const second = String(currentTime.getSeconds()).padStart(2, '0');
    const milliSecond = String(currentTime.getMilliseconds()).padStart(3, '0');
    time.textContent = `${hour}:${minute}:${second}:${milliSecond}`;
    totalTime = setTimeout(displayTime, 10);
}

// スタートボタン
startButton.addEventListener('click',() => {
    startButton.disabled = true;
    stopButton.disabled = false;
    resetButton.disabled = true;
    startTime = Date.now();
    displayTime();
});

//　ストップボタン
stopButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = false;
    clearTimeout(totalTime);
    stopTime += (Date.now() - startTime);
});

//　リセットボタン
resetButton.addEventListener('click', function() {
    startButton.disabled = false;
    stopButton.disabled = true;
    resetButton.disabled = true;
    time.textContent = '0:00:00:000';
    stopTime = 0;
});