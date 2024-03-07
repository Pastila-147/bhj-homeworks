"use strict";
let cookie = document.getElementById("cookie");
let clickerCounter = document.getElementById("clicker__counter");
cookie.onclick = countClick;

function countClick(){
  let startClick=++clickerCounter.textContent;
  updateSize(startClick);
}
function updateSize(startClick){
  if (startClick % 2 == 0){   
    cookie.width = "200";
  }else{
    cookie.width = "150";
  }
}