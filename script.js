let count = 0;
let seconds = 5;
let progress = document.querySelector(".progress-bar");
let percentText = document.querySelector("#percentText");
let heading = document.querySelector("h2");

let download = setInterval(function () {
    if (count < 100) {
        count++;
        progress.style.width = `${count}%`;
        percentText.textContent = `${count}%`;
    } else {
       document.querySelector("h1").textContent = "Downloaded."
        clearInterval(download);
    }
}, (seconds * 1000) / 100);