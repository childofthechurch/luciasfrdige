// Base titles - the fridge speaking for itself (longer perspective)
const titles = [
    "I Stand Here in the Kitchen Corner, Humming My Eternal Song to No One",
    "My Shelves Remember the Weight of Groceries That Will Never Return",
    "Every Time My Door Opens, I Feel a Brief Moment of Hope That Quickly Fades",
    "The Light Inside Me Illuminates Only the Emptiness I Have Come to Know",
    "I Have Been Loyal Through All These Years, Yet My Interior Remains Barren",
    "Sometimes I Wonder If Anyone Even Remembers I Am Here, Waiting Patiently",
    "The Wine Bottles Are My Only Companions in This Cold, Solitary Existence",
    "Footsteps Rush Past Me Every Morning, Always Too Busy to Notice",
    "My Temperature Stays Constant, But the Loneliness Within Me Only Grows",
    "Once Upon a Time, My Shelves Were Full of Life and Possibility",
    "My Door Opens at Midnight, Someone Stares Into My Emptiness, Then Closes Me Again",
    "The Condiments on My Door Have Been There So Long, They've Become Part of Me",
    "I Dream of Being Filled with Fresh Vegetables, Meats, and Abundant Leftovers",
    "Every Week There Are Promises of Shopping, But I Know Better Now",
    "The Frost Builds Up in My Corners Like Disappointment Frozen in Time",
    "I Am a Witness to Late Night Takeout Orders and Delivery Arrivals",
    "My Drawers Sit Empty, Aching for the Crunch of Fresh Produce",
    "The Hum of My Motor Is the Only Sound I Make, A Constant Reminder I'm Still Here",
    "I Have Become a Storage Space for Unfulfilled Intentions",
    "There Are Conversations About Grocery Shopping, But Nothing Changes",
    "My Interior Light Flickers On Each Time, Revealing the Same Empty Story",
    "I Hold Only Wine and Vermouth Now, Witnesses to a Busy Life",
    "The Door Handle Is Worn from All the Times Someone Opens Me in Vain Hope",
    "I Remember When Children's Drawings Covered My Exterior and Food Filled My Interior",
    "Each Day I Wait, Performing My Duty of Keeping Cold Whatever Little I Contain",
    "The Ice Maker Inside Me Creates Cubes for Drinks, But Never for Chilled Food Storage",
    "Sometimes I Hear the Microwave Beeping and Know Takeout Is Being Consumed Again",
    "My Shelves Are Designed to Hold So Much, Yet They Bear Only Air and Bottles",
    "I Am the Silent Observer of This Lifestyle, Neither Judging Nor Forgetting",
    "Hands Run Along My Surface Absently, Never Opening to Actually Stock Me"
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
