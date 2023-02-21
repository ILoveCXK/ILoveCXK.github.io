var clickCount = 0;
var gif = new Image();
var audio = new Audio();
var threshold = [10, 50, 100, 500, 1000];
var gifIndex = 0;
var audioIndex = 0;

function incrementCounter() {
    clickCount++;
    localStorage.setItem("clickCount", clickCount)
    document.getElementById("counter").innerHTML = "次数: " + clickCount;
    if (clickCount == threshold[gifIndex]) {
        gifIndex++;
        audioIndex++;
        if (gifIndex >= threshold.length) {
            gifIndex = threshold.length - 1;
        }
        if (audioIndex >= threshold.length) {
            audioIndex = threshold.length - 1;
        }
        document.getElementById("gif").src = "gif" + threshold[gifIndex] + ".gif";
        audio.src = "audio" + threshold[audioIndex] + ".mp3";
        audio.play();
    }
    else {
        document.getElementById("gif").src = document.getElementById("gif").src;
        audio.src = "audio" + threshold[audioIndex] + ".mp3";
        audio.play();
    }
}

function resetCounter() {
    clickCount = 0;
    document.getElementById("counter").innerHTML = "次数: " + clickCount;
    document.getElementById("gif").src = "gif10.gif";
    audio.src = "audio10.mp3";
    audio.play();
    gifIndex = 0;
    audioIndex = 0;
}

function onPageLoad() {
    var stored_click_count = localStorage.getItem("clickCount")
    clickCount = stored_click_count
    document.getElementById("counter").innerHTML = "次数: " + clickCount;
}

window.onload = onPageLoad()
