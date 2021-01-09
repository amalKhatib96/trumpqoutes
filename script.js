
const qouteButton = document.querySelector('.quote-button');
const tweetButton = document.querySelector('.tweetit');
qouteButton.addEventListener('click', newQuote)

const API = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';





async function newQuote() {

try {
const response = await fetch(API);
if (!response.ok) {
    throw Error(response.statusText);
  }
const json = await response.json();
displayQuote(json.message);
tweetIt(json.message);

} catch {
    alert('Failed to show a new qoute');
}

} 


function displayQuote(quote) {
    const quotePlace = document.querySelector('.quote-place');
    quotePlace.textContent = quote;
}


function tweetIt(quote) {
    tweetButton.setAttribute('href', `https://twitter.com/share?text=${quote} - Donald Trump`);
}

newQuote();