"use strict";
const reveals = document.querySelectorAll('.reveal');
function isVisible (element) {
  const{top,bottom} = element.getBoundingClientRect();
  console.log('bottom='+bottom+', top='+top+', innerHeight='+window.innerHeight)
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

