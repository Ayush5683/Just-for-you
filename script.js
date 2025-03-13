function playAudio() {
    let audio = document.getElementById("audio");
    audio.play();
    document.getElementById("sorry-text").style.opacity="1";
    document.getElementById("sorry-text").style.bottom="-80px";
    document.getElementById("sorry-text").style.scale="1.4";
    document.getElementById("use-button").style.opacity="0";
}
