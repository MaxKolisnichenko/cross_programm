const quoteContainer = document.querySelector('.quote_container');
const quoteText = document.querySelector('.quote');
const newQuoteBtn = document.getElementById('new_quote');

const getQuote = async () => {
  const apiUrl = 'https://api.quotable.io/random';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    quoteText.textContent = data.content;
  } catch (error) {
    console.error('Error fetching quote:', error);
  }
}

newQuoteBtn.addEventListener('click', getQuote);

getQuote();

