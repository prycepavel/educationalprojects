'use strict';

// Устаревший способ с использованием XMLHttpRequest
const inputRub = document.querySelector('#rub'),
      inputUsd = document.querySelector('#usd');

inputRub.addEventListener('input', () => {
  const request = new XMLHttpRequest(); // Создание нового объекта при помощи класса Javascript

  // Методы
  request.open('GET', 'js/current.json'); // Запрос на сервер
  request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
  request.send();  // Отправка запроса на сервер

  // Свойства объекта (status, statusText, response, readyState)
  
  // События объекта
  request.addEventListener('load', () => { // Событие отслеживает готовность запроса в текущий момент
    if (request.status === 200) { // Какой статус готовности (200 запрос успешно завершился)
      console.log(request.response);
      const data = JSON.parse(request.response); // внутри JSON объект current из файла current.json
      inputUsd.value = (+inputRub.value / data.current.usd).toFixed(2);  // Рассчитываем курс валют на основании того, что ввел пользователь и, что пришло от сервера результат записываем в inputUsd.value. Метод toFixed(2) показывает сколько будет знаков после точки в результате вычисления
    } else {
      inputUsd.value = 'Что-то пошло не так';
    }
  });


});