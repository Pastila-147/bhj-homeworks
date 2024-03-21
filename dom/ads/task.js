"use strict";
const rotators = document.querySelectorAll('.rotator__case');
let index = 0;
function changeText() {
  rotators[index].classList.remove('rotator__case_active');
  index = (index === rotators.length - 1) ? 0 : index + 1;
  rotators[index].classList.add('rotator__case_active');
};

setInterval(changeText, 1000);
