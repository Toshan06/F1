const images = ['speed_image.jpg','BG,jpg']
let currentIndex = 0;

function nextImage(){
    currentIndex = (currentIndex + 1)%images.length;
}

document.getElementById('back').style.backgroundImage = 'url(${images[currentIndex]})';