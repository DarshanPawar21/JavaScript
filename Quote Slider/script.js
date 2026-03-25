const text = document.getElementById("quote-text");
const kavi = document.getElementById("kavi");
const pev = document.getElementById("pev");
const Next = document.getElementById("nex");
const bg = document.getElementById("bg");

const Quotes = [
    {
        "id": 4,
        "quote": "Stay hungry, stay foolish.",
        "lekhak": "Steve Jobs",
        "bg_url": "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1080",
        "category": "Innovation"
    },
    {
        "id": 5,
        "quote": "The journey of a thousand miles begins with a single step.",
        "lekhak": "Lao Tzu",
        "bg_url": "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?auto=format&fit=crop&q=80&w=1080",
        "category": "Wisdom"
    },
    {
        "id": 6,
        "quote": "Talk is cheap. Show me the code.",
        "lekhak": "Linus Torvalds",
        "bg_url": "https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=1080",
        "category": "Technology"
    },
    {
        "id": 7,
        "quote": "It does not matter how slowly you go as long as you do not stop.",
        "lekhak": "Confucius",
        "bg_url": "https://images.unsplash.com/photo-1502126324834-38f8e02d7160?auto=format&fit=crop&q=80&w=1080",
        "category": "Resilience"
    },
    {
        "id": 8,
        "quote": "The only true wisdom is in knowing you know nothing.",
        "lekhak": "Socrates",
        "bg_url": "https://images.unsplash.com/photo-1543504856-93f5b4200415?auto=format&fit=crop&q=80&w=1080",
        "category": "Philosophy"
    },
    {
        "id": 9,
        "quote": "Everything you've ever wanted is on the other side of fear.",
        "lekhak": "George Addair",
        "bg_url": "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&q=80&w=1080",
        "category": "Motivation"
    },
    {
        "id": 10,
        "quote": "Success is walking from failure to failure with no loss of enthusiasm.",
        "lekhak": "Winston Churchill",
        "bg_url": "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1080",
        "category": "Success"
    },
    {
        "id": 11,
        "quote": "The best way to predict the future is to invent it.",
        "lekhak": "Alan Kay",
        "bg_url": "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1080",
        "category": "Innovation"
    },
    {
        "id": 12,
        "quote": "Your time is limited, so don't waste it living someone else's life.",
        "lekhak": "Steve Jobs",
        "bg_url": "https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&q=80&w=1080",
        "category": "Life"
    },
    {
        "id": 13,
        "quote": "Quality is not an act, it is a habit.",
        "lekhak": "Aristotle",
        "bg_url": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=1080",
        "category": "Philosophy"
    },
    {
        "id": 14,
        "quote": "Whether you think you can or you think you can't, you're right.",
        "lekhak": "Henry Ford",
        "bg_url": "https://images.unsplash.com/photo-1494173853114-8a51460bc21b?auto=format&fit=crop&q=80&w=1080",
        "category": "Motivation"
    },
    {
        "id": 15,
        "quote": "Programs must be written for people to read, and only incidentally for machines to execute.",
        "lekhak": "Harold Abelson",
        "bg_url": "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=1080",
        "category": "Technology"
    },
    {
        "id": 16,
        "quote": "Do what you can, with what you have, where you are.",
        "lekhak": "Theodore Roosevelt",
        "bg_url": "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=1080",
        "category": "Resilience"
    },
    {
        "id": 17,
        "quote": "I have not failed. I've just found 10,000 ways that won't work.",
        "lekhak": "Thomas Edison",
        "bg_url": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1080",
        "category": "Success"
    },
    {
        "id": 18,
        "quote": "Happiness is not something ready made. It comes from your own actions.",
        "lekhak": "Dalai Lama",
        "bg_url": "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?auto=format&fit=crop&q=80&w=1080",
        "category": "Wisdom"
    },
    {
        "id": 19,
        "quote": "Simplicity is the ultimate sophistication.",
        "lekhak": "Leonardo da Vinci",
        "bg_url": "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?auto=format&fit=crop&q=80&w=1080",
        "category": "Innovation"
    },
    {
        "id": 20,
        "quote": "Believe you can and you're halfway there.",
        "lekhak": "Theodore Roosevelt",
        "bg_url": "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=1080",
        "category": "Motivation"
    },
    {
        "id": 21,
        "quote": "Knowledge is power.",
        "lekhak": "Francis Bacon",
        "bg_url": "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1080",
        "category": "Wisdom"
    },
    {
        "id": 22,
        "quote": "Change the world by being yourself.",
        "lekhak": "Amy Poehler",
        "bg_url": "https://images.unsplash.com/photo-1528605248644-14dd04cb11c7?auto=format&fit=crop&q=80&w=1080",
        "category": "Life"
    },
    {
        "id": 23,
        "quote": "Don’t let yesterday take up too much of today.",
        "lekhak": "Will Rogers",
        "bg_url": "https://images.unsplash.com/photo-1495364141860-b0d03eedd04f?auto=format&fit=crop&q=80&w=1080",
        "category": "Perspective"
    },
    {
        "id": 24,
        "quote": "One person can make a difference, and everyone should try.",
        "lekhak": "John F. Kennedy",
        "bg_url": "https://images.unsplash.com/photo-1506863530036-1efeddceb993?auto=format&fit=crop&q=80&w=1080",
        "category": "Motivation"
    },
    {
        "id": 25,
        "quote": "Life is what happens when you're busy making other plans.",
        "lekhak": "John Lennon",
        "bg_url": "https://images.unsplash.com/photo-1516541196182-6bdb0516ed27?auto=format&fit=crop&q=80&w=1080",
        "category": "Life"
    }

];

let index = 0;

text.textContent = Quotes[index].quote;
kavi.textContent = "- " + Quotes[index].lekhak;
document.body.style.backgroundImage = `url('${Quotes[index].bg_url}')`;
pev.addEventListener("click", () => {
    if (index <= 0) {
        pev.className = "btn btn-primary disabled"
    }
    index--;
    text.textContent = Quotes[index].quote;
    kavi.textContent = "- " + Quotes[index].lekhak;
    document.body.style.backgroundImage = `url('${Quotes[index].bg_url}')`;
})
Next.addEventListener("click", () => {
    if (index == 0) {
        pev.className = "btn btn-primary"
    }
    index++;
    text.textContent = Quotes[index].quote;
    kavi.textContent = "- " + Quotes[index].lekhak;
    document.body.style.backgroundImage = `url('${Quotes[index].bg_url}')`;

})
