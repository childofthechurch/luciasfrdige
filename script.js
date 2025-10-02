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
setInterval(changeTitle, 6000);

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

function changeBackground() {
    const randomImage = backgroundImages[Math.floor(Math.random() * backgroundImages.length)];

    // Slide out to the right
    document.body.style.backgroundPosition = '120% center';

    // After slide out, change image and slide in from right
    setTimeout(() => {
        document.body.style.backgroundImage = `url('${randomImage}')`;
        document.body.style.backgroundPosition = '120% center';

        // Slide in to final position
        setTimeout(() => {
            document.body.style.backgroundPosition = '75% center';
        }, 50);
    }, 1000);
}

// Change background every 6 seconds
setInterval(changeBackground, 6000);
