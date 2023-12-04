const site = window.location.hostname

if (site.includes("youtube.com")){ //easy check for whether or not program
    alert("slay queen");
}
document.addEventListener('keydown', (event) => { //adds something that waits to see if a key is pressed
    var name = event.key;

    if (name === 'e') { //runs when press 'e' key
        document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate=12;
    }
    else if (name === 'r') { //runs when press 'r' key
        document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate=1;
    }
    else if (name === 'y') { //runs when press 'y' key
        document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate=2;
    }
}, false);
