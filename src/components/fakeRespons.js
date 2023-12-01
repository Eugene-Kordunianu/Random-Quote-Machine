export let arrFetch = '';

export function fakeFetch() {
   // Використовуємо ( flat ) для створення одновимірного масиву
   let allArr = arr.flat();

   // Використовуємо reduce для створення нового масиву з унікальними об'єктами
   const uniqueQuotesArray = allArr.reduce((accumulator, current) => {
      // Перевіряємо, чи вже є така цитата в accumulator
      const existingQuote = accumulator.find(item => item.quote === current.quote);
      // Якщо цитата вже є, то не додаємо новий об'єкт
      if (!existingQuote) {
         accumulator.push({
            quote: current.quote,
            author: current.author,
            category: current.category,
         });
      }
      return accumulator;
   }, []);

   // Сортуємо відсортований масив за потребою ( localeCompare ) в алфавітному порядку
   arrFetch = uniqueQuotesArray.sort((a, b) => a.quote.localeCompare(b.quote));

   // Вивід результату в console
   // console.log(arrFetch);
}
// response яки я отримував із запитів  багато цитат повторювались тому було приняте рішення відсортувати 
// для більш зручного показу та меншої пересічності цитат коли користувач використає ліміт зпитів ліміт ( 50 в місяць )
const arr = [
   [
      {
         "quote": "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.",
         "author": "Albert Einstein",
         "category": "Famous"
      },
      {
         "quote": "I have nothing to declare except my genius.",
         "author": "Oscar Wilde",
         "category": "Famous"
      },
      {
         "quote": "You may not be interested in war, but war is interested in you.",
         "author": "Leon Trotsky",
         "category": "Famous"
      },
      {
         "quote": "A friendship founded on business is better than a business founded on friendship.",
         "author": "John D. Rockefeller",
         "category": "Famous"
      },
      {
         "quote": "His ignorance is encyclopedic",
         "author": "Abba Eban",
         "category": "Famous"
      },
      {
         "quote": "Facts are the enemy of truth.",
         "author": "Don Quixote 'Man of La Mancha'",
         "category": "Famous"
      },
      {
         "quote": "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.",
         "author": "Edsgar Dijkstra",
         "category": "Famous"
      },
      {
         "quote": "I find that the harder I work, the more luck I seem to have.",
         "author": "Thomas Jefferson",
         "category": "Famous"
      },
      {
         "quote": "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
         "author": "Sir Winston Churchill",
         "category": "Famous"
      },
      {
         "quote": "The artist is nothing without the gift, but the gift is nothing without work.",
         "author": "Emile Zola",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
         "author": "Ayn Rand",
         "category": "Famous"
      },
      {
         "quote": "There are no facts, only interpretations.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
         "author": "A. J. Liebling",
         "category": "Famous"
      },
      {
         "quote": "Women might be able to fake orgasms. But men can fake a whole relationship.",
         "author": "Sharon Stone",
         "category": "Famous"
      },
      {
         "quote": "His ignorance is encyclopedic",
         "author": "Abba Eban",
         "category": "Famous"
      },
      {
         "quote": "Try to learn something about everything and everything about something.",
         "author": "Thomas Henry Huxley",
         "category": "Famous"
      },
      {
         "quote": "Don't stay in bed, unless you can make money in bed.",
         "author": "George Burns",
         "category": "Famous"
      },
      {
         "quote": "This book fills a much-needed gap.",
         "author": "Moses Hadas in a review",
         "category": "Famous"
      },
      {
         "quote": "If you can count your money, you don't have a billion dollars.",
         "author": "J. Paul Getty",
         "category": "Famous"
      },
      {
         "quote": "I'm living so far beyond my income that we may almost be said to be living apart.",
         "author": "e e cummings",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "I find that the harder I work, the more luck I seem to have.",
         "author": "Thomas Jefferson",
         "category": "Famous"
      },
      {
         "quote": "If you can't get rid of the skeleton in your closet, you'd best teach it to dance.",
         "author": "George Bernard Shaw",
         "category": "Famous"
      },
      {
         "quote": "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
         "author": "Frank Lloyd Wright",
         "category": "Famous"
      },
      {
         "quote": "There are no facts, only interpretations.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "The power of accurate observation is frequently called cynicism by those who don't have it.",
         "author": "George Bernard Shaw",
         "category": "Famous"
      },
      {
         "quote": "His ignorance is encyclopedic",
         "author": "Abba Eban",
         "category": "Famous"
      },
      {
         "quote": "It's kind of fun to do the impossible.",
         "author": "Walt Disney",
         "category": "Famous"
      },
      {
         "quote": "But at my back I always hear Time's winged chariot hurrying near.",
         "author": "Andrew Marvell",
         "category": "Famous"
      },
      {
         "quote": "An inconvenience is only an adventure wrongly considered; an adventure is an inconvenience rightly considered.",
         "author": "Gilbert Keith Chesterton",
         "category": "Famous"
      },
      {
         "quote": "Everybody pities the weak; jealousy you have to earn.",
         "author": "Arnold Schwarzenegger",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
         "author": "Frank Lloyd Wright",
         "category": "Famous"
      },
      {
         "quote": "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.",
         "author": "Galileo Galilei",
         "category": "Famous"
      },
      {
         "quote": "When you do the common things in life in an uncommon way, you will command the attention of the world.",
         "author": "George Washington Carver",
         "category": "Famous"
      },
      {
         "quote": "I'm living so far beyond my income that we may almost be said to be living apart.",
         "author": "e e cummings",
         "category": "Famous"
      },
      {
         "quote": "He is one of those people who would be enormously improved by death.",
         "author": "H. H. Munro",
         "category": "Famous"
      },
      {
         "quote": "Each problem that I solved became a rule which served afterwards to solve other problems.",
         "author": "Rene Descartes",
         "category": "Famous"
      },
      {
         "quote": "Not everything that can be counted counts, and not everything that counts can be counted.",
         "author": "Albert Einstein",
         "category": "Famous"
      },
      {
         "quote": "You can only find truth with logic if you have already found truth without it.",
         "author": "Gilbert Keith Chesterton",
         "category": "Famous"
      },
      {
         "quote": "All are lunatics, but he who can analyze his delusion is called a philosopher.",
         "author": "Ambrose Bierce",
         "category": "Famous"
      },
      {
         "quote": "The only way to get rid of a temptation is to yield to it.",
         "author": "Oscar Wilde",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "Whether you think that you can, or that you can't, you are usually right.",
         "author": "Henry Ford",
         "category": "Famous"
      },
      {
         "quote": "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
         "author": "A. J. Liebling",
         "category": "Famous"
      },
      {
         "quote": "I'm all in favor of keeping dangerous weapons out of the hands of fools. Let's start with typewriters.",
         "author": "Frank Lloyd Wright",
         "category": "Famous"
      },
      {
         "quote": "When you do the common things in life in an uncommon way, you will command the attention of the world.",
         "author": "George Washington Carver",
         "category": "Famous"
      },
      {
         "quote": "Facts are the enemy of truth.",
         "author": "Don Quixote 'Man of La Mancha'",
         "category": "Famous"
      },
      {
         "quote": "If you can count your money, you don't have a billion dollars.",
         "author": "J. Paul Getty",
         "category": "Famous"
      },
      {
         "quote": "How wrong it is for a woman to expect the man to build the world she wants, rather than to create it herself.",
         "author": "Anais Nin",
         "category": "Famous"
      },
      {
         "quote": "I find that the harder I work, the more luck I seem to have.",
         "author": "Thomas Jefferson",
         "category": "Famous"
      },
      {
         "quote": "Give me chastity and continence, but not yet.",
         "author": "Saint Augustine",
         "category": "Famous"
      },
      {
         "quote": "The artist is nothing without the gift, but the gift is nothing without work.",
         "author": "Emile Zola",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "There are no facts, only interpretations.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "Maybe this world is another planet's Hell.",
         "author": "Aldous Huxley",
         "category": "Famous"
      },
      {
         "quote": "Whenever I climb I am followed by a dog called 'Ego'.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "If a man does his best, what else is there?",
         "author": "General George S. Patton",
         "category": "Famous"
      },
      {
         "quote": "A friendship founded on business is better than a business founded on friendship.",
         "author": "John D. Rockefeller",
         "category": "Famous"
      },
      {
         "quote": "The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.",
         "author": "James Branch Cabell",
         "category": "Famous"
      },
      {
         "quote": "I've had a wonderful time, but this wasn't it.",
         "author": "Groucho Marx",
         "category": "Famous"
      },
      {
         "quote": "All are lunatics, but he who can analyze his delusion is called a philosopher.",
         "author": "Ambrose Bierce",
         "category": "Famous"
      },
      {
         "quote": "I find that the harder I work, the more luck I seem to have.",
         "author": "Thomas Jefferson",
         "category": "Famous"
      },
      {
         "quote": "When you do the common things in life in an uncommon way, you will command the attention of the world.",
         "author": "George Washington Carver",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "Each problem that I solved became a rule which served afterwards to solve other problems.",
         "author": "Rene Descartes",
         "category": "Famous"
      },
      {
         "quote": "Don't stay in bed, unless you can make money in bed.",
         "author": "George Burns",
         "category": "Famous"
      },
      {
         "quote": "He is one of those people who would be enormously improved by death.",
         "author": "H. H. Munro",
         "category": "Famous"
      },
      {
         "quote": "Facts are the enemy of truth.",
         "author": "Don Quixote 'Man of La Mancha'",
         "category": "Famous"
      },
      {
         "quote": "In the End, we will remember not the words of our enemies, but the silence of our friends.",
         "author": "Martin Luther King Jr.",
         "category": "Famous"
      },
      {
         "quote": "People demand freedom of speech to make up for the freedom of thought which they avoid.",
         "author": "Soren Aabye Kierkegaard",
         "category": "Famous"
      },
      {
         "quote": "It's kind of fun to do the impossible.",
         "author": "Walt Disney",
         "category": "Famous"
      },
      {
         "quote": "Political correctness is tyranny with manners.",
         "author": "Charlton Heston",
         "category": "Famous"
      },
      {
         "quote": "He who has a 'why' to live, can bear with almost any 'how'.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "In theory, there is no difference between theory and practice. But in practice, there is.",
         "author": "Yogi Berra",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
         "author": "Sherlock Holmes",
         "category": "Famous"
      },
      {
         "quote": "I have never killed anyone, but I have read some obituary notices with great satisfaction.",
         "author": "Clarence Darrow",
         "category": "Famous"
      },
      {
         "quote": "Give me a museum and I'll fill it.",
         "author": "Pablo Picasso",
         "category": "Famous"
      },
      {
         "quote": "Whether you think that you can, or that you can't, you are usually right.",
         "author": "Henry Ford",
         "category": "Famous"
      },
      {
         "quote": "All are lunatics, but he who can analyze his delusion is called a philosopher.",
         "author": "Ambrose Bierce",
         "category": "Famous"
      },
      {
         "quote": "I begin by taking. I shall find scholars later to demonstrate my perfect right.",
         "author": "Frederick (II) the Great",
         "category": "Famous"
      },
      {
         "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
         "author": "Ayn Rand",
         "category": "Famous"
      },
      {
         "quote": "I don't know why we are here, but I'm pretty sure that it is not in order to enjoy ourselves.",
         "author": "Ludwig Wittgenstein",
         "category": "Famous"
      },
      {
         "quote": "Against stupidity, the gods themselves contend in vain.",
         "author": "Friedrich von Schiller",
         "category": "Famous"
      },
      {
         "quote": "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.",
         "author": "Albert Einstein",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "All are lunatics, but he who can analyze his delusion is called a philosopher.",
         "author": "Ambrose Bierce",
         "category": "Famous"
      },
      {
         "quote": "In theory, there is no difference between theory and practice. But in practice, there is.",
         "author": "Yogi Berra",
         "category": "Famous"
      },
      {
         "quote": "Talent does what it can; genius does what it must.",
         "author": "Edward George Bulwer-Lytton",
         "category": "Famous"
      },
      {
         "quote": "Problems worthy of attack prove their worth by fighting back.",
         "author": "Paul Erdos",
         "category": "Famous"
      },
      {
         "quote": "The significant problems we face cannot be solved at the same level of thinking we were at when we created them.",
         "author": "Albert Einstein",
         "category": "Famous"
      },
      {
         "quote": "The only difference between me and a madman is that I'm not mad.",
         "author": "Salvador Dali",
         "category": "Famous"
      },
      {
         "quote": "Give me chastity and continence, but not yet.",
         "author": "Saint Augustine",
         "category": "Famous"
      },
      {
         "quote": "How wrong it is for a woman to expect the man to build the world she wants, rather than to create it herself.",
         "author": "Anais Nin",
         "category": "Famous"
      },
      {
         "quote": "I find that the harder I work, the more luck I seem to have.",
         "author": "Thomas Jefferson",
         "category": "Famous"
      },
      {
         "quote": "I have come to believe that the whole world is an enigma, a harmless enigma that is made terrible by our own mad attempt to interpret it as though it had an underlying truth.",
         "author": "Umberto Eco",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "He who has a 'why' to live, can bear with almost any 'how'.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "Whenever I climb I am followed by a dog called 'Ego'.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "Some cause happiness wherever they go; others, whenever they go.",
         "author": "Oscar Wilde",
         "category": "Famous"
      },
      {
         "quote": "Never interrupt your enemy when he is making a mistake.",
         "author": "Napoleon Bonaparte",
         "category": "Famous"
      },
      {
         "quote": "Blessed is the man, who having nothing to say, abstains from giving wordy evidence of the fact.",
         "author": "George Eliot",
         "category": "Famous"
      },
      {
         "quote": "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
         "author": "A. J. Liebling",
         "category": "Famous"
      },
      {
         "quote": "The artist is nothing without the gift, but the gift is nothing without work.",
         "author": "Emile Zola",
         "category": "Famous"
      },
      {
         "quote": "The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.",
         "author": "James Branch Cabell",
         "category": "Famous"
      },
      {
         "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
         "author": "Ayn Rand",
         "category": "Famous"
      },
      {
         "quote": "All are lunatics, but he who can analyze his delusion is called a philosopher.",
         "author": "Ambrose Bierce",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "The true measure of a man is how he treats someone who can do him absolutely no good.",
         "author": "Samuel Johnson",
         "category": "Famous"
      },
      {
         "quote": "We are all atheists about most of the gods humanity has ever believed in. Some of us just go one god further.",
         "author": "Richard Dawkins",
         "category": "Famous"
      },
      {
         "quote": "God is a comedian playing to an audience too afraid to laugh.",
         "author": "Voltaire",
         "category": "Famous"
      },
      {
         "quote": "When you do the common things in life in an uncommon way, you will command the attention of the world.",
         "author": "George Washington Carver",
         "category": "Famous"
      },
      {
         "quote": "Some cause happiness wherever they go; others, whenever they go.",
         "author": "Oscar Wilde",
         "category": "Famous"
      },
      {
         "quote": "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.",
         "author": "Edsgar Dijkstra",
         "category": "Famous"
      },
      {
         "quote": "The artist is nothing without the gift, but the gift is nothing without work.",
         "author": "Emile Zola",
         "category": "Famous"
      },
      {
         "quote": "If you can count your money, you don't have a billion dollars.",
         "author": "J. Paul Getty",
         "category": "Famous"
      },
      {
         "quote": "Try to learn something about everything and everything about something.",
         "author": "Thomas Henry Huxley",
         "category": "Famous"
      },
      {
         "quote": "The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.",
         "author": "James Branch Cabell",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "You can only find truth with logic if you have already found truth without it.",
         "author": "Gilbert Keith Chesterton",
         "category": "Famous"
      },
      {
         "quote": "I find that the harder I work, the more luck I seem to have.",
         "author": "Thomas Jefferson",
         "category": "Famous"
      },
      {
         "quote": "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.",
         "author": "Bjarne Stroustrup",
         "category": "Famous"
      },
      {
         "quote": "The difference between 'involvement' and 'commitment' is like an eggs-and-ham breakfast: the chicken was 'involved' the pig was 'committed'.",
         "author": "unknown",
         "category": "Famous"
      },
      {
         "quote": "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.",
         "author": "Galileo Galilei",
         "category": "Famous"
      },
      {
         "quote": "Good people do not need laws to tell them to act responsibly, while bad people will find a way around the laws.",
         "author": "Plato",
         "category": "Famous"
      },
      {
         "quote": "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
         "author": "Sir Winston Churchill",
         "category": "Famous"
      },
      {
         "quote": "If you can count your money, you don't have a billion dollars.",
         "author": "J. Paul Getty",
         "category": "Famous"
      },
      {
         "quote": "Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity.",
         "author": "Martin Luther King Jr.",
         "category": "Famous"
      },
      {
         "quote": "A friendship founded on business is better than a business founded on friendship.",
         "author": "John D. Rockefeller",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "Life isn't about waiting for the storm to pass; it's about learning to dance in the rain.",
         "author": "Vivian Greene",
         "category": "Famous"
      },
      {
         "quote": "Facts are the enemy of truth.",
         "author": "Don Quixote 'Man of La Mancha'",
         "category": "Famous"
      },
      {
         "quote": "We have art to save ourselves from the truth.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
         "author": "Sherlock Holmes",
         "category": "Famous"
      },
      {
         "quote": "The power of accurate observation is frequently called cynicism by those who don't have it.",
         "author": "George Bernard Shaw",
         "category": "Famous"
      },
      {
         "quote": "If a man does his best, what else is there?",
         "author": "General George S. Patton",
         "category": "Famous"
      },
      {
         "quote": "We didn't lose the game; we just ran out of time.",
         "author": "Vince Lombardi",
         "category": "Famous"
      },
      {
         "quote": "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
         "author": "Sir Winston Churchill",
         "category": "Famous"
      },
      {
         "quote": "I have come to believe that the whole world is an enigma, a harmless enigma that is made terrible by our own mad attempt to interpret it as though it had an underlying truth.",
         "author": "Umberto Eco",
         "category": "Famous"
      },
      {
         "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
         "author": "Ayn Rand",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "Be nice to people on your way up because you meet them on your way down.",
         "author": "Jimmy Durante",
         "category": "Famous"
      },
      {
         "quote": "I don't know why we are here, but I'm pretty sure that it is not in order to enjoy ourselves.",
         "author": "Ludwig Wittgenstein",
         "category": "Famous"
      },
      {
         "quote": "The difference between 'involvement' and 'commitment' is like an eggs-and-ham breakfast: the chicken was 'involved' the pig was 'committed'.",
         "author": "unknown",
         "category": "Famous"
      },
      {
         "quote": "The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.",
         "author": "James Branch Cabell",
         "category": "Famous"
      },
      {
         "quote": "Whenever I climb I am followed by a dog called 'Ego'.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "Political correctness is tyranny with manners.",
         "author": "Charlton Heston",
         "category": "Famous"
      },
      {
         "quote": "All are lunatics, but he who can analyze his delusion is called a philosopher.",
         "author": "Ambrose Bierce",
         "category": "Famous"
      },
      {
         "quote": "In theory, there is no difference between theory and practice. But in practice, there is.",
         "author": "Yogi Berra",
         "category": "Famous"
      },
      {
         "quote": "Life isn't about waiting for the storm to pass; it's about learning to dance in the rain.",
         "author": "Vivian Greene",
         "category": "Famous"
      },
      {
         "quote": "I have not failed. I've just found 10,000 ways that won't work.",
         "author": "Thomas Alba Edison",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "I begin by taking. I shall find scholars later to demonstrate my perfect right.",
         "author": "Frederick (II) the Great",
         "category": "Famous"
      },
      {
         "quote": "If a man does his best, what else is there?",
         "author": "General George S. Patton",
         "category": "Famous"
      },
      {
         "quote": "In theory, there is no difference between theory and practice. But in practice, there is.",
         "author": "Yogi Berra",
         "category": "Famous"
      },
      {
         "quote": "We are all atheists about most of the gods humanity has ever believed in. Some of us just go one god further.",
         "author": "Richard Dawkins",
         "category": "Famous"
      },
      {
         "quote": "It's kind of fun to do the impossible.",
         "author": "Walt Disney",
         "category": "Famous"
      },
      {
         "quote": "If you are going through hell, keep going.",
         "author": "Sir Winston Churchill ",
         "category": "Famous"
      },
      {
         "quote": "Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity.",
         "author": "Martin Luther King Jr.",
         "category": "Famous"
      },
      {
         "quote": "Women might be able to fake orgasms. But men can fake a whole relationship.",
         "author": "Sharon Stone",
         "category": "Famous"
      },
      {
         "quote": "Life isn't about waiting for the storm to pass; it's about learning to dance in the rain.",
         "author": "Vivian Greene",
         "category": "Famous"
      },
      {
         "quote": "If you can't get rid of the skeleton in your closet, you'd best teach it to dance.",
         "author": "George Bernard Shaw",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "Dancing is silent poetry.",
         "author": "Simonides",
         "category": "Famous"
      },
      {
         "quote": "We didn't lose the game; we just ran out of time.",
         "author": "Vince Lombardi",
         "category": "Famous"
      },
      {
         "quote": "We are all atheists about most of the gods humanity has ever believed in. Some of us just go one god further.",
         "author": "Richard Dawkins",
         "category": "Famous"
      },
      {
         "quote": "It's kind of fun to do the impossible.",
         "author": "Walt Disney",
         "category": "Famous"
      },
      {
         "quote": "I have nothing to declare except my genius.",
         "author": "Oscar Wilde",
         "category": "Famous"
      },
      {
         "quote": "I can write better than anybody who can write faster, and I can write faster than anybody who can write better.",
         "author": "A. J. Liebling",
         "category": "Famous"
      },
      {
         "quote": "I have come to believe that the whole world is an enigma, a harmless enigma that is made terrible by our own mad attempt to interpret it as though it had an underlying truth.",
         "author": "Umberto Eco",
         "category": "Famous"
      },
      {
         "quote": "Facts are the enemy of truth.",
         "author": "Don Quixote 'Man of La Mancha'",
         "category": "Famous"
      },
      {
         "quote": "God is a comedian playing to an audience too afraid to laugh.",
         "author": "Voltaire",
         "category": "Famous"
      },
      {
         "quote": "I have never killed anyone, but I have read some obituary notices with great satisfaction.",
         "author": "Clarence Darrow",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "He who has a 'why' to live, can bear with almost any 'how'.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "I begin by taking. I shall find scholars later to demonstrate my perfect right.",
         "author": "Frederick (II) the Great",
         "category": "Famous"
      },
      {
         "quote": "When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion.",
         "author": "Robert Pirsig",
         "category": "Famous"
      },
      {
         "quote": "He is one of those people who would be enormously improved by death.",
         "author": "H. H. Munro",
         "category": "Famous"
      },
      {
         "quote": "In theory, there is no difference between theory and practice. But in practice, there is.",
         "author": "Yogi Berra",
         "category": "Famous"
      },
      {
         "quote": "The full use of your powers along lines of excellence.",
         "author": "Definition of 'happiness' by J",
         "category": "Famous"
      },
      {
         "quote": "Nothing in the world is more dangerous than sincere ignorance and conscientious stupidity.",
         "author": "Martin Luther King Jr.",
         "category": "Famous"
      },
      {
         "quote": "Facts are the enemy of truth.",
         "author": "Don Quixote 'Man of La Mancha'",
         "category": "Famous"
      },
      {
         "quote": "Women might be able to fake orgasms. But men can fake a whole relationship.",
         "author": "Sharon Stone",
         "category": "Famous"
      },
      {
         "quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
         "author": "Sherlock Holmes",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "Don't stay in bed, unless you can make money in bed.",
         "author": "George Burns",
         "category": "Famous"
      },
      {
         "quote": "We have art to save ourselves from the truth.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "Give me a museum and I'll fill it.",
         "author": "Pablo Picasso",
         "category": "Famous"
      },
      {
         "quote": "We are all atheists about most of the gods humanity has ever believed in. Some of us just go one god further.",
         "author": "Richard Dawkins",
         "category": "Famous"
      },
      {
         "quote": "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
         "author": "Albert Einstein",
         "category": "Famous"
      },
      {
         "quote": "All are lunatics, but he who can analyze his delusion is called a philosopher.",
         "author": "Ambrose Bierce",
         "category": "Famous"
      },
      {
         "quote": "When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion.",
         "author": "Robert Pirsig",
         "category": "Famous"
      },
      {
         "quote": "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.",
         "author": "Edsgar Dijkstra",
         "category": "Famous"
      },
      {
         "quote": "Against stupidity, the gods themselves contend in vain.",
         "author": "Friedrich von Schiller",
         "category": "Famous"
      },
      {
         "quote": "Be nice to people on your way up because you meet them on your way down.",
         "author": "Jimmy Durante",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.",
         "author": "Edsgar Dijkstra",
         "category": "Famous"
      },
      {
         "quote": "I have never killed anyone, but I have read some obituary notices with great satisfaction.",
         "author": "Clarence Darrow",
         "category": "Famous"
      },
      {
         "quote": "You can only find truth with logic if you have already found truth without it.",
         "author": "Gilbert Keith Chesterton",
         "category": "Famous"
      },
      {
         "quote": "The only difference between me and a madman is that I'm not mad.",
         "author": "Salvador Dali",
         "category": "Famous"
      },
      {
         "quote": "If you can count your money, you don't have a billion dollars.",
         "author": "J. Paul Getty",
         "category": "Famous"
      },
      {
         "quote": "Maybe this world is another planet's Hell.",
         "author": "Aldous Huxley",
         "category": "Famous"
      },
      {
         "quote": "Don't stay in bed, unless you can make money in bed.",
         "author": "George Burns",
         "category": "Famous"
      },
      {
         "quote": "I begin by taking. I shall find scholars later to demonstrate my perfect right.",
         "author": "Frederick (II) the Great",
         "category": "Famous"
      },
      {
         "quote": "His ignorance is encyclopedic",
         "author": "Abba Eban",
         "category": "Famous"
      },
      {
         "quote": "The difference between 'involvement' and 'commitment' is like an eggs-and-ham breakfast: the chicken was 'involved' the pig was 'committed'.",
         "author": "unknown",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "I have come to believe that the whole world is an enigma, a harmless enigma that is made terrible by our own mad attempt to interpret it as though it had an underlying truth.",
         "author": "Umberto Eco",
         "category": "Famous"
      },
      {
         "quote": "The optimist proclaims that we live in the best of all possible worlds, and the pessimist fears this is true.",
         "author": "James Branch Cabell",
         "category": "Famous"
      },
      {
         "quote": "A people that values its privileges above its principles soon loses both.",
         "author": "Dwight D. Eisenhower",
         "category": "Famous"
      },
      {
         "quote": "How wrong it is for a woman to expect the man to build the world she wants, rather than to create it herself.",
         "author": "Anais Nin",
         "category": "Famous"
      },
      {
         "quote": "I have nothing to declare except my genius.",
         "author": "Oscar Wilde",
         "category": "Famous"
      },
      {
         "quote": "Some cause happiness wherever they go; others, whenever they go.",
         "author": "Oscar Wilde",
         "category": "Famous"
      },
      {
         "quote": "Human history becomes more and more a race between education and catastrophe.",
         "author": "H. G. Wells",
         "category": "Famous"
      },
      {
         "quote": "The artist is nothing without the gift, but the gift is nothing without work.",
         "author": "Emile Zola",
         "category": "Famous"
      },
      {
         "quote": "The use of COBOL cripples the mind; its teaching should, therefore, be regarded as a criminal offense.",
         "author": "Edsgar Dijkstra",
         "category": "Famous"
      },
      {
         "quote": "Only two things are infinite, the universe and human stupidity, and I'm not sure about the former.",
         "author": "Albert Einstein",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.",
         "author": "Sherlock Holmes",
         "category": "Famous"
      },
      {
         "quote": "There are no facts, only interpretations.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.",
         "author": "Galileo Galilei",
         "category": "Famous"
      },
      {
         "quote": "I shall not waste my days in trying to prolong them.",
         "author": "Ian L. Fleming",
         "category": "Famous"
      },
      {
         "quote": "In the End, we will remember not the words of our enemies, but the silence of our friends.",
         "author": "Martin Luther King Jr.",
         "category": "Famous"
      },
      {
         "quote": "If you are going through hell, keep going.",
         "author": "Sir Winston Churchill ",
         "category": "Famous"
      },
      {
         "quote": "Blessed is the man, who having nothing to say, abstains from giving wordy evidence of the fact.",
         "author": "George Eliot",
         "category": "Famous"
      },
      {
         "quote": "C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg.",
         "author": "Bjarne Stroustrup",
         "category": "Famous"
      },
      {
         "quote": "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
         "author": "Sir Winston Churchill",
         "category": "Famous"
      },
      {
         "quote": "He is one of those people who would be enormously improved by death.",
         "author": "H. H. Munro",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "In theory, there is no difference between theory and practice. But in practice, there is.",
         "author": "Yogi Berra",
         "category": "Famous"
      },
      {
         "quote": "I do not feel obliged to believe that the same God who has endowed us with sense, reason, and intellect has intended us to forgo their use.",
         "author": "Galileo Galilei",
         "category": "Famous"
      },
      {
         "quote": "Whether you think that you can, or that you can't, you are usually right.",
         "author": "Henry Ford",
         "category": "Famous"
      },
      {
         "quote": "When you do the common things in life in an uncommon way, you will command the attention of the world.",
         "author": "George Washington Carver",
         "category": "Famous"
      },
      {
         "quote": "We have art to save ourselves from the truth.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
         "author": "Ayn Rand",
         "category": "Famous"
      },
      {
         "quote": "I'm living so far beyond my income that we may almost be said to be living apart.",
         "author": "e e cummings",
         "category": "Famous"
      },
      {
         "quote": "Each problem that I solved became a rule which served afterwards to solve other problems.",
         "author": "Rene Descartes",
         "category": "Famous"
      },
      {
         "quote": "Life isn't about waiting for the storm to pass; it's about learning to dance in the rain.",
         "author": "Vivian Greene",
         "category": "Famous"
      },
      {
         "quote": "You can only find truth with logic if you have already found truth without it.",
         "author": "Gilbert Keith Chesterton",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "If a man does his best, what else is there?",
         "author": "General George S. Patton",
         "category": "Famous"
      },
      {
         "quote": "Dancing is silent poetry.",
         "author": "Simonides",
         "category": "Famous"
      },
      {
         "quote": "Sex and religion are closer to each other than either might prefer.",
         "author": "Saint Thomas More",
         "category": "Famous"
      },
      {
         "quote": "The only difference between me and a madman is that I'm not mad.",
         "author": "Salvador Dali",
         "category": "Famous"
      },
      {
         "quote": "When one person suffers from a delusion it is called insanity; when many people suffer from a delusion it is called religion.",
         "author": "Robert Pirsig",
         "category": "Famous"
      },
      {
         "quote": "I find that the harder I work, the more luck I seem to have.",
         "author": "Thomas Jefferson",
         "category": "Famous"
      },
      {
         "quote": "I am ready to meet my Maker. Whether my Maker is prepared for the great ordeal of meeting me is another matter.",
         "author": "Sir Winston Churchill",
         "category": "Famous"
      },
      {
         "quote": "Many wealthy people are little more than janitors of their possessions.",
         "author": "Frank Lloyd Wright",
         "category": "Famous"
      },
      {
         "quote": "When you do the common things in life in an uncommon way, you will command the attention of the world.",
         "author": "George Washington Carver",
         "category": "Famous"
      },
      {
         "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
         "author": "Ayn Rand",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "I have never killed anyone, but I have read some obituary notices with great satisfaction.",
         "author": "Clarence Darrow",
         "category": "Famous"
      },
      {
         "quote": "I'm living so far beyond my income that we may almost be said to be living apart.",
         "author": "e e cummings",
         "category": "Famous"
      },
      {
         "quote": "A friendship founded on business is better than a business founded on friendship.",
         "author": "John D. Rockefeller",
         "category": "Famous"
      },
      {
         "quote": "Life isn't about waiting for the storm to pass; it's about learning to dance in the rain.",
         "author": "Vivian Greene",
         "category": "Famous"
      },
      {
         "quote": "I have not failed. I've just found 10,000 ways that won't work.",
         "author": "Thomas Alba Edison",
         "category": "Famous"
      },
      {
         "quote": "The only difference between me and a madman is that I'm not mad.",
         "author": "Salvador Dali",
         "category": "Famous"
      },
      {
         "quote": "Facts are the enemy of truth.",
         "author": "Don Quixote 'Man of La Mancha'",
         "category": "Famous"
      },
      {
         "quote": "You may not be interested in war, but war is interested in you.",
         "author": "Leon Trotsky",
         "category": "Famous"
      },
      {
         "quote": "I don't know why we are here, but I'm pretty sure that it is not in order to enjoy ourselves.",
         "author": "Ludwig Wittgenstein",
         "category": "Famous"
      },
      {
         "quote": "I've had a wonderful time, but this wasn't it.",
         "author": "Groucho Marx",
         "category": "Famous"
      }
   ],
   [
      {
         "quote": "Whether you think that you can, or that you can't, you are usually right.",
         "author": "Henry Ford",
         "category": "Famous"
      },
      {
         "quote": "The only way to get rid of a temptation is to yield to it.",
         "author": "Oscar Wilde",
         "category": "Famous"
      },
      {
         "quote": "I'm living so far beyond my income that we may almost be said to be living apart.",
         "author": "e e cummings",
         "category": "Famous"
      },
      {
         "quote": "We have art to save ourselves from the truth.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "Don't stay in bed, unless you can make money in bed.",
         "author": "George Burns",
         "category": "Famous"
      },
      {
         "quote": "A people that values its privileges above its principles soon loses both.",
         "author": "Dwight D. Eisenhower",
         "category": "Famous"
      },
      {
         "quote": "Try to learn something about everything and everything about something.",
         "author": "Thomas Henry Huxley",
         "category": "Famous"
      },
      {
         "quote": "There are no facts, only interpretations.",
         "author": "Friedrich Nietzsche",
         "category": "Famous"
      },
      {
         "quote": "Human history becomes more and more a race between education and catastrophe.",
         "author": "H. G. Wells",
         "category": "Famous"
      },
      {
         "quote": "You can avoid reality, but you cannot avoid the consequences of avoiding reality.",
         "author": "Ayn Rand",
         "category": "Famous"
      }
   ]
]