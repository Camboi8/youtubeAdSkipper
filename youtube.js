const site = window.location.hostname

if (site.includes("youtube.com")){
    alert("slay queen");
}
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;

    if (name === 'e') {
        document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate=12;
    }
    else if (name === 'r') {
        document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate=1;
    }
    else if (name === 'y') {
        document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate=2;
    }
}, false);