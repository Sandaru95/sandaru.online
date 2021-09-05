// Placeholders
let allImages = undefined;
let bannerIter = 0;
let bannerInterval = setInterval(() => {
    allImages = document.getElementsByTagName("img");allImages[allImages.length - 1].style.display = "none";
    bannerIter++;

    // Quiting the loop after some iterations
    if(bannerIter == 4){
        clearInterval(bannerInterval);
    };
}, 2000);
