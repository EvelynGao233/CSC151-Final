// Web page effect after turning the dark mode on.

(function () {

    // change the color of the page into dark mode through using Javascript's filter effects module
    document.querySelector("html").style.filter = "invert(1) hue-rotate(180deg)";
    
    // keep images, pictures and videos their original colors by inverting the colors again
    let media = document.querySelectorAll("img, picture, video");
    media.forEach((mediaItem) => {
        mediaItem.style.filter = "invert(1) hue-rotate(180deg)"
    })

})();