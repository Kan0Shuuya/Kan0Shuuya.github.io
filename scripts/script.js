"use strict";

let newHeight = window.innerHeight;
let newWidth = window.innerWidth;

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    newWidth = 1879;
    newHeight = 970;
} 

let body = document.querySelector("body");
body.style.cssText = `max-height: ${newHeight}px; max-width: ${newWidth}px;`;
body.style.overflow = "auto";
let leftMenu = document.querySelector("#leftMenu");
if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

} 
else{
  let newLeftMenuHeight = newHeight - 85; 
  leftMenu.style.cssText = `height: ${newLeftMenuHeight}px`;
}