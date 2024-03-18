"use strict";
const button = document.querySelector('.dropdown__value');
const list = document.querySelector('.dropdown__list');
const elements = document.querySelectorAll('.dropdown__item');
button.addEventListener('click', () => {
  list.classList.add('dropdown__list_active'); });
elements.forEach(item => {
  item.addEventListener('click', () => {
    event.preventDefault();
    list.classList.remove('dropdown__list_active'); 
    button.textContent = item.textContent;
  });
});