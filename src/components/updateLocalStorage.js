export function updateLocalStorage(key, newObj) {
   // Отримання рядка JSON з localStorage за вказаним ключем
   const jsonString = localStorage.getItem(key);

   // Розбирання рядка JSON у масив, якщо він є, або ініціалізація порожнього масиву
   let dataArray = jsonString ? JSON.parse(jsonString) : [];

   // Додавання нового об'єкта до масиву
   dataArray.push(newObj);

   // Перетворення масиву на рядок JSON
   const updatedJsonString = JSON.stringify(dataArray);

   // Збереження оновленого рядка JSON в localStorage за вказаним ключем
   localStorage.setItem(key, updatedJsonString);
}