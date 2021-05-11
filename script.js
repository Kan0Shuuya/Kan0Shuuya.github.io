"use strict";
let newHeight = document.documentElement.clientHeight;
let body = document.querySelector("body");
body.style.cssText = `min-height: ${newHeight}px`;
let rightMenu = document.querySelector("#rightMenu");
let newRightMenuHeight = newHeight - 85; 
rightMenu.style.cssText = `height: ${newRightMenuHeight}px`;

let user = {
    img: "",
};

reg.onclick = function (){
    user.img = prompt("Введите ссылку на картинку");
    document.querySelector("#avatar").src = user.img;
};