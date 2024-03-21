"use strict";
const reveals = document.querySelectorAll('.reveal');
function isVisible (element) {
  const{top,bottom} = element.getBoundingClientRect();
  if (top > 0 && bottom < window.innerHeight) 
    {element.classList.add('reveal_active')} 
  else
    {element.classList.remove('reveal_active')};
}

addEventListener("scroll", (event) => {
  reveals.forEach(reveal => {
    isVisible(reveal);
  });
});

