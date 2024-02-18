const site = window.location.hostname

if (site.includes("youtube.com") || site.includes("schoology.com")){
    alert("slay queen");
    document.addEventListener('keydown', (event) => {
        var name = event.key;
    
        if ((name === 'e') || (name === 'E')) {
            document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate=12;
        }
        else if ((name === 'r') || (name === 'R')) {
            document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate=1;
        }
        else if ((name === 'y') || (name === 'Y')) {
            document.getElementsByClassName("video-stream html5-main-video")[0].playbackRate=2;
        }
    }, false);
}
