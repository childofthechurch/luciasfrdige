// Base titles related to working woman's empty fridge
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

// Function to generate new titles dynamically
function generateNewTitle() {
    const templates = [
        "The {adjective} Woman's {place}: A Tale of {item}",
        "{verb} All Day, Yet Mine Fridge Remaineth {state}",
        "O {descriptor}! When Shalt Thou Find Time to {action}?",
        "Mine {thing} Doth Thrive, Mine Fridge Doth Not",
        "She {activity}, Yet Hath No Time for {need}",
        "{timePhrase} She {works}, Her Shelves {condition}",
        "The {profession}'s {consequence}",
        "{emotion} in {container}, {state} in the Fridge",
        "She {celebration} with {drink}, {meals} on {food}"
    ];

    const words = {
        adjective: ["Working", "Busy", "Industrious", "Laboring", "Career-Driven", "Professional"],
        place: ["Icebox", "Refrigerator", "Cold Box", "Larder", "Pantry", "Kitchen"],
        item: ["Vermouth", "Wine", "Emptiness", "Hope", "Dreams", "Takeout Menus"],
        verb: ["Toil", "Labor", "Work", "Strive", "Hustle", "Grind"],
        state: ["Bare", "Empty", "Void", "Unfilled", "Vacant", "Barren"],
        descriptor: ["Busy Damsel", "Weary Lady", "Ambitious Soul", "Tired Maiden"],
        action: ["Sup", "Eat", "Dine", "Feast", "Shop", "Cook"],
        thing: ["Career", "Ambition", "Work", "Job", "Business"],
        activity: ["Labors Much", "Works Hard", "Toils Daily", "Strives Endlessly"],
        need: ["Market", "Shopping", "Groceries", "Food", "Sustenance"],
        timePhrase: ["From Morn to Eve", "Dawn to Dusk", "Day and Night", "Morning Till Night"],
        works: ["Toils", "Labors", "Works", "Strives"],
        condition: ["Forsaken", "Empty", "Bare", "Void", "Forgotten"],
        profession: ["Professional Maiden", "Working Woman", "Career Lady", "Busy Professional"],
        consequence: ["Perpetual Takeout", "Empty Provisions", "Eternal Hunger"],
        emotion: ["Merry", "Joyful", "Happy", "Blissful", "Cheerful"],
        container: ["Spirit", "Heart", "Soul", "Glass"],
        drink: ["Wine", "Cabernet", "Prosecco", "Champagne", "Vermouth"],
        celebration: ["Laughs", "Dances", "Celebrates", "Rejoices", "Toasts"],
        meals: ["Dines", "Feasts", "Sups", "Eats"],
        food: ["Dreams", "Air", "Wishes", "Hope", "Nothing"]
    };

    const template = templates[Math.floor(Math.random() * templates.length)];
    let newTitle = template;

    // Replace placeholders with random words
    Object.keys(words).forEach(key => {
        const placeholder = `{${key}}`;
        if (newTitle.includes(placeholder)) {
            const randomWord = words[key][Math.floor(Math.random() * words[key].length)];
            newTitle = newTitle.replace(placeholder, randomWord);
        }
    });

    // Add the new title to the array if it doesn't exist
    if (!titles.includes(newTitle)) {
        titles.push(newTitle);
    }

    return newTitle;
}

// Generate additional titles on load
for (let i = 0; i < 10; i++) {
    generateNewTitle();
}
