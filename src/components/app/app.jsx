import axios from 'axios';
import { useEffect, useState } from 'react';

import { updateLocalStorage } from "../updateLocalStorage";
import { fakeFetch, arrFetch } from '../fakeRespons';

import Telegram from "../../img/telegram.svg";
import Twitter from "../../img/twitter.svg";

import "./app.css";

// Ключ + URL
const API_KEY = '58df57f70bmshd1a920cd377b040p10471djsne7cb6a6fdb2c';
const QUOTE_API_URL = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/';
// РАндомні кольори для вікна
const colors = ["#597894", "#087990", "#212529", "#13795b", "#664d03", "#198754", "#984c0c", "#dc3545", "#d63384",
   "#6f42c1", "#8540f5", "#0d6efd"];

function App() {
   // Початковий колір при першому відвідуванні
   const [color, setColor] = useState({
      quoteBox: { background: "#597894" },
      newQuote: { filter: "saturate(2.5)" },
   })
   // Записуємо response що приходить із запиту
   const [quote, setQuote] = useState({
   })
   // Записуємо цитати + авторів
   const [fetchQuote, setFetchQuote] = useState({
      author: "",
      quote: ""
   })
   // Функція вибору та показу рандомної цитатаи та автора
   function randomQuote() {
      try {
         // Генерація рандомного індексу множимо на довжину (масиву яка нам приходить з серверу
         // або з фейкового запиту) або на 10 у випадку якщо невідома довжина.
         let indexToRemove = Math.floor(Math.random() * fetchQuote.data.length || 10)
         // Фільтрація масиву який приходить із запиту поверненя нового [] без цитати яку вже показали
         let newArray = fetchQuote.data.filter((element, index) => {
            if (index === indexToRemove) {
               // Якщо це індекс, який потрібно видалити тоді показуємо цитату та автора користувачу
               setFetchQuote((prev) => ({
                  ...prev,
                  author: fetchQuote.data[indexToRemove].author,
                  quote: fetchQuote.data[indexToRemove].quote,
               }))
               //Записуємо в локал видалені елементи
               //  (згодом коли не буде доступу до запитів ми можимо використовувати іх)
               // функція яка  оновлює локалСтор 1перший аргумент (ключ) 2другий (значення)
               // Розкоментувати рядок знизу щоб ЛокалСтор відображав значення
               // updateLocalStorage("arrQuote", fetchQuote.data[indexToRemove]);

               return false; // Повертаємо false, щоб елемент не включався в новий масив
            }
            return true; // Повертаємо true для включення елемента в новий масив
         });
         // Записуємо в state новий масив 
         setFetchQuote((prev) => ({
            ...prev,
            data: newArray,
         }));
      } catch {
      }
   }
   // Генерація рандомного кольору при зміні цитати + виконання запиту або показ рандомної цитати
   function randomColor() {
      let color = Math.floor(Math.random() * colors.length);
      setColor((prev) => ({
         ...prev,
         quoteBox: { background: colors[color], },
         newQuote: { background: colors[color], filter: "saturate(2.5)" }
      }))
      // Використовуємо тернарник  якщо є що показувати повторємо генерацію рандомної цитати
      // якщо ні робимо новий запит 
      fetchQuote.data.length >= 1 || ![] ? randomQuote() : quoteAxios();
   }
   // Ділимось в Telegram
   function shareOnTelegram() {
      // Генерувати посилання для обміну на Telegram із поточною цитатою
      const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(fetchQuote.quote)}&text=${encodeURIComponent(fetchQuote.author)}`;

      // Відкрити посилання у новому вікні або вкладці
      window.open(telegramLink, '_blank');
   }
   // Ділимось в Twitter
   function shareOnTwitter() {
      // Генерувати посилання для обміну на Twitter із поточною цитатою

      // encodeURIComponent використовується для кодування тексту та автора
      const twitterLink = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fetchQuote.quote)}&via=${encodeURIComponent(fetchQuote.author)}`;

      // Відкрити посилання у новому вікні або вкладці
      window.open(twitterLink, '_blank');
   }
   const options = {
      method: 'GET',
      url: QUOTE_API_URL,// винесли посилання в окрему константу 
      params: {
         cat: 'famous',
         count: '10'
      },
      headers: {
         'X-RapidAPI-Key': API_KEY, //винесли ключ в окрему константу
         'X-RapidAPI-Host': 'andruxnet-random-famous-quotes.p.rapidapi.com'
      }
   };
   // Асинхроний запит використовуємо axios
   async function quoteAxios() {
      try {
         const response = await axios.request(options);
         // записуємо в локалСтор  що прийшло із запиту розкоментувати рядок знизу
         // updateLocalStorage("response", response.data);

         setFetchQuote((prev) => ({
            ...prev,
            data: response.data,
         }));

         setQuote(() => ({ data: response.data }));
      } catch (error) {
         // При винекнені помилки робимо імітацію показу цитат та авторів базуючись на даних які ми отримували раніше 
         setFetchQuote(() => ({ data: arrFetch }));
         setQuote(() => ({ data: arrFetch }));
         console.error("Помилка отримання цитат:", error);
      }
   }
   //робим запит при завантажені сторінки одноразово
   useEffect(() => {
      //обробка існуйчого масиву для показу при наявності помилки
      fakeFetch();
      //Запит
      quoteAxios();
   }, []);
   // Викликаєця при зміні значення яке приходить з response
   useEffect(() => {
      randomQuote()
   }, [quote]);

   return (
      <>
         <div id="quote-box" style={{ ...color.quoteBox}}>
            <div id="text">{fetchQuote.quote}</div>
            <span id="author">{fetchQuote.author}</span>
            <div className="box-btn">
               <a id="tweet-quote" onClick={shareOnTwitter} style={{ ...color.newQuote }}>
                  <img src={Twitter} alt="Twitter-icon" />
               </a>
               <a id="telegram-share" onClick={shareOnTelegram} style={{ ...color.newQuote, }}>
                  <img src={Telegram} alt="Telegram-icon" />
               </a>
               <span id="new-quote" onClick={randomColor} style={{ ...color.newQuote, }}>New quote</span>
            </div>
         </div>
      </>
   )
}

export default App;