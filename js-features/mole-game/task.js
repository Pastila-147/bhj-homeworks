'use strict';

let dead = document.getElementById('dead');
let lost = document.getElementById('lost');

function getHole (index){
  return document.getElementById(`hole${index}`);
}

function clear(){
  dead.textContent = 0;
  lost.textContent = 0;
}

for (let i = 1; i < 10; i++) {
  getHole(i).onclick = () => {
    if (getHole(i).className.includes('hole_has-mole'))
      dead.textContent++;
    else
      lost.textContent++;
    
    if (dead.textContent == 10) {
      alert('Победа!');
      clear();
    }
    if (lost.textContent == 5) {
      alert('Поражение');
      clear();
    }
  }
}
