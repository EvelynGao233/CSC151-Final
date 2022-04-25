// trying to go back to the original style. Attempted using the same filter effects module.
// It seems that rotating 180 degrees back doesn't work.
(function () {
    
    document.querySelector("html").style.filter = "invert(0) hue-rotate(0deg)";
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(0) hue-rotate(0deg)"
    })
})();