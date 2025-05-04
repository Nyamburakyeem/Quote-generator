let quotes = [
    "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
      "The way to get started is to quit talking and begin doing. - Walt Disney",
      "Life is what happens when you're busy making other plans. - John Lennon",
      "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
      "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
      "You only live once, but if you do it right, once is enough. - Mae West",
      "In the end, we will remember not the words of our enemies, but the silence of our friends. - Martin Luther King Jr.",
      "The only impossible journey is the one you never begin. - Tony Robbins",
      "The purpose of our lives is to be happy. - Dalai Lama",
      "Life is either a daring adventure or nothing at all. - Helen Keller",
      "Get busy living or get busy dying. - Stephen King",];

      let quoteText = document.getElementById("quote-text");
let newQuoteButton = document.getElementsByClassName("btn")[0];

function getRandomQuote(){
    let randomIndex = Math.floor(Math.random()*quotes.length);
    quoteText.textContent= quotes[randomIndex]
}

newQuoteButton.addEventListener("click", getRandomQuote);
   
    




