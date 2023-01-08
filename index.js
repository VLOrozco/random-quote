const btn = document.getElementById("btn");
const quote = document.getElementById("quote");

const inspirationalQuotes = [
  `\"All our dreams can come true, if we have the courage to pursue them.\” —Walt Disney`,
  `\“The secret of getting ahead is getting started.\” —Mark Twain`,
  `\“Don\’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.\” —Mary Kay Ash`,
  `\“It\’s hard to beat a person who never gives up.\” —Babe Ruth`,
  `\“If people are doubting how far you can go, go so far that you can\’t hear them anymore.\” —Michele Ruiz`,
  `\“We need to accept that we won\’t always make the right decisions, that we\’ll screw up royally sometimes―understanding that failure is not the opposite of success, it\’s part of success.\” ―Arianna Huffington`,
  `\“You\’ve gotta dance like there\’s nobody watching, love like you\’ll never be hurt, sing like there\’s nobody listening, and live like it\’s heaven on earth.” —William W. Purkey`,
  `\“Happiness is not something ready made. It comes from your own actions.” ―Dalai Lama XIV`,
  `\"If you want to fly, give up everything that weighs you down.\” ―Buddha`,
  `\“On my own I will just create and if it works, it works. And if it doesn\’t, I\’ll just create something else. I don\’t have any limitations on what I think I could do or be.\” ―Oprah Winfrey`,
]

btn.addEventListener('click', generateQuote);

function generateQuote() {
  const randomQuote = Math.floor(Math.random(inspirationalQuotes) * 10);
  quote.innerHTML = inspirationalQuotes[randomQuote];
};