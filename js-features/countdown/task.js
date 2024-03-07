"use strict";
let startTime = document.getElementById('timer').textContent;
function countDown(){
  parseInt(startTime);
  if (startTime>0){
    startTime=startTime-1
      document.getElementById('timer').textContent=startTime
  }else{
      if (startTime===0){
          window.alert('Вы победили в конкурсе!')
          clearInterval(idInterval);
      }
  }
}
const idInterval = setInterval(countDown, 1000);


