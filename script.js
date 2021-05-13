"use strict";
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    // код для мобильных устройств
  } else {
    // код для обычных устройств
}
let newHeight = document.documentElement.clientHeight;
let newWidth = window.innerWidth;
let body = document.querySelector("body");
body.style.cssText = `max-height: ${newHeight}px; max-width: ${newWidth}px;`;
let leftMenu = document.querySelector("#leftMenu");
/* let navMenu = document.querySelector("nav");
navMenu.cssText = `width: ${newWidth} px`; */
let newLeftMenuHeight = newHeight - 85; 
leftMenu.style.cssText = `height: ${newLeftMenuHeight}px`;

let user = {
    img: "",
};

reg.onclick = function (){
    user.img = prompt("Введите ссылку на картинку (рекамендуемый размер 200х200)");
    document.querySelector("#avatar").src = user.img;
};