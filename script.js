// Random title related to empty fridge
const titles = [
    "The Working Maiden's Icebox: A Tale of Vermouth",
    "Toil All Day, Yet Mine Fridge Remaineth Bare",
    "Alas! Too Busy to Stock the Cupboard",
    "The Laboring Lady's Lament: A Fridge",
    "From Morn to Eve She Toils, Her Shelves Forsaken",
    "O Busy Damsel! When Shalt Thou Find Time to Sup?",
    "Mine Career Doth Thrive, Mine Fridge Doth Not",
    "She Labors Much, Yet Hath No Time for Market",
    "The Industrious Lady's Empty Provisions",
    "Busy Hands Make for Barren Shelves",
    "All Work and No Shop Makes Jack a Hungry Girl",
    "The Professional Maiden's Perpetual Takeout",
    "Meetings All Day, Nary a Morsel at Home",
    "She Who Works from Dawn to Dusk Eats Not from Her Fridge",
    "The Woman's Cold and Empty Box",
    "Ambition Fills Her Day, Yet Leaves Her Cupboard Void",
    "Coffee She Hath Plenty, Food She Hath None",
    "By Moonlight She Returns, To Emptiness Most Pure",
    "The Briefcase Heavy, The Pantry Light as Air",
    "What Dreams May Come, When Shelves Are Bare",
    "In This Cold Chamber, Only Silence Dwells",
    "She Conquers Boardrooms, Yet Starves at Home",
    "The Frost Within Mirrors the Void Without",
    "O Cruel Irony! Success and Hunger, Hand in Hand",
    "Time, Thou Art a Thief of Both Rest and Sustenance",
    "The Ice Box Weeps, For It Knows Not Fullness",
    "Her Days Are Rich, Her Larder Poor",
    "Between Meetings and Dreams, No Time for Bread",
    "The Working Soul's Eternal Hunger",
    "She Gives Her All, Save Time to Feed Herself",
    "Merry in Spirit, Light in Provisions",
    "The Joyful Maiden's Wine-Filled Refuge",
    "Happiness Flows from Bottles, Not from Shelves",
    "She Laughs with Cabernet, Dines on Dreams",
    "Blissful and Tipsy, Empty Yet Content",
    "The Happy Hour That Lasts All Night",
    "Prosecco for Breakfast, Joy for Dinner",
    "Dancing with Wine, Singing to Empty Plates",
    "Merriment in a Glass, Barren in the Fridge",
    "The Gleeful Lady's Liquid Diet",
    "Champagne Wishes, Takeout Reality",
    "She Toasts to Life, Forgets to Shop for It"
];

const titleElement = document.getElementById('title');

function changeTitle() {
    const randomTitle = titles[Math.floor(Math.random() * titles.length)];
    titleElement.textContent = randomTitle;
}

// Set initial title
changeTitle();

// Change title every 3 seconds
setInterval(changeTitle, 3000);

const images = [
    'images/IMG_2155.PNG',
    'images/IMG_2156.PNG',
    'images/IMG_2159.PNG',
    'images/IMG_2166.jpg',
    'images/IMG_2167.jpg',
    'images/IMG_2168.jpg',
    'images/IMG_2169.jpg',
    'images/IMG_2170.jpg',
    'images/IMG_2171.jpg',
    'images/IMG_8929.PNG'
];

images.forEach((src, index) => {
    const img = document.createElement('img');
    img.src = src;
    img.className = 'floating-image';

    // Determine image width based on screen size
    const imgWidth = window.innerWidth <= 768 ? 120 : 200;

    // Random starting position on the right side (or full screen on mobile)
    const isMobile = window.innerWidth <= 768;
    const startX = isMobile
        ? Math.random() * (window.innerWidth - imgWidth)
        : window.innerWidth / 2 + Math.random() * (window.innerWidth / 2 - imgWidth);
    const startY = Math.random() * (window.innerHeight - imgWidth);
    img.style.left = startX + 'px';
    img.style.top = startY + 'px';

    document.body.appendChild(img);

    // Random velocity for each image (slower on mobile)
    const speed = isMobile ? 1 : 2;
    let velocityX = (Math.random() - 0.5) * speed;
    let velocityY = (Math.random() - 0.5) * speed;
    let isHovered = false;

    img.addEventListener('mouseenter', () => {
        isHovered = true;
        img.style.zIndex = '3000';
    });

    img.addEventListener('mouseleave', () => {
        isHovered = false;
        img.style.zIndex = '100';
    });

    function animate() {
        if (!isHovered) {
            let rect = img.getBoundingClientRect();
            let x = rect.left + velocityX;
            let y = rect.top + velocityY;

            // Bounce off edges
            if (isMobile) {
                // Full screen bouncing on mobile
                if (x <= 0 || x + rect.width >= window.innerWidth) {
                    velocityX *= -1;
                }
            } else {
                // Constrained to right side on desktop
                if (x <= window.innerWidth / 2 || x + rect.width >= window.innerWidth) {
                    velocityX *= -1;
                }
            }

            if (y <= 0 || y + rect.height >= window.innerHeight) {
                velocityY *= -1;
            }

            img.style.left = x + 'px';
            img.style.top = y + 'px';
        }

        requestAnimationFrame(animate);
    }

    animate();
});
