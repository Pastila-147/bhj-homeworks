"use strict";
const tab = document.querySelectorAll('.tab');
const content = document.querySelectorAll('.tab__content');

tab.forEach(item => {
  item.addEventListener('click', () => {
    tab.forEach(tab => tab.classList.remove('tab_active'));
    content.forEach(content => content.classList.remove('tab__content_active'));
    item.classList.toggle('tab_active');
    let array = Array.from(tab) 
    let index = array.indexOf(item);
    content[index].classList.toggle('tab__content_active');
  });
});

