"use strict";
const fontsize = document.querySelectorAll('.font-size');
const book = document.querySelector('.book');

fontsize.forEach(item => {
  item.addEventListener('click', event => {
    event.preventDefault();
    fontsize.forEach(fontsize => fontsize.classList.remove('font-size_active'));
    item.classList.add('font-size_active');
    book.classList.remove('font-size_small', 'font-size_big');
    if (item.dataset.size === 'small') {
      book.classList.add('font-size_small');
    } 
    else if (item.dataset.size === 'big') {
      book.classList.add('font-size_big');} 
  })
});

