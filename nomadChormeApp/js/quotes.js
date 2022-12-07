const quotes = [
    {
        quote: "True Knowledge exists in knowing that you know nothing.",
        author: "Socrates",
    },
    {
        quote: "Concentration is my motto. First honesty, then industry, then concentration.",
        author: "Andrew Carnegie",
    },
    {
        quote: "Never underestimate your own ignorance.",
        author: "Albert Einstein",
    },
    {
        quote: "If always seems impossible until it's done.",
        author: "Nelson Rolihlahla Mandela",
    },
    {
        quote: "Whatever you can do or dream you can, begin it. Boldness has genius, power, and magic in it.",
        author: "Johann Wolfgang von Goethe",
    },
    {
        quote: "If you can't get a miracle, Become one",
        author: "Nicholas James Vujicic",
    },
    {
        quote: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.",
        author: "Thomas Alva Edison",
    },
    {
        quote: "People who are unable to motivate themselves must be content with mediocrity, no matter how impressive their other talents.",
        author: "Andrew Carnegie",
    },
    {
        quote: "Success seems to be connected with action. Successful people keep moving. They make mistakes, but they don't quit.",
        author: "Conrad Nicholson Hilton",
    },
    {
        quote: "Whatever What I want to be.",
        author: "Nana",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// Math module의 random() 이용

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;