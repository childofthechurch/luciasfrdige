const titleElement = document.getElementById('title');

function changeTitle() {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    titleElement.textContent = randomTitle;
}

// Set initial title
changeTitle();

// Change title every 5 seconds
setInterval(changeTitle, 5000);

// Background images
const backgroundImages = [
    'images/IMG_2155.PNG',
    'images/IMG_2156.PNG',
    'images/IMG_2159.PNG',
    'images/IMG_2166.jpg',
    'images/IMG_2167.jpg',
    'images/IMG_2168.jpg',
    'images/IMG_2169.jpg'
];

let currentImageIndex = 0;

function changeBackground() {
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

    // Create a temporary element to fade in
    const tempBg = document.createElement('div');
    tempBg.style.position = 'fixed';
    tempBg.style.top = '0';
    tempBg.style.left = '0';
    tempBg.style.width = '100%';
    tempBg.style.height = '100%';
    tempBg.style.backgroundImage = `url('${randomImage}')`;
    tempBg.style.backgroundSize = '30%';
    tempBg.style.backgroundPosition = 'calc(100% - 2rem) center';
    tempBg.style.backgroundRepeat = 'no-repeat';
    tempBg.style.backgroundAttachment = 'fixed';
    tempBg.style.opacity = '0';
    tempBg.style.transition = 'opacity 1s ease-in-out';
    tempBg.style.zIndex = '-1';
    tempBg.style.pointerEvents = 'none';

    document.body.appendChild(tempBg);

    // Trigger fade in
    setTimeout(() => {
        tempBg.style.opacity = '1';
    }, 10);

    // After fade in, replace main background and remove temp element
    setTimeout(() => {
        document.body.style.backgroundImage = `url('${randomImage}')`;
        document.body.removeChild(tempBg);
    }, 1000);
}

// Change background every 5 seconds
setInterval(changeBackground, 5000);
