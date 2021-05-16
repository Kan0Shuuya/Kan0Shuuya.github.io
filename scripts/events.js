"use strict";

let user = {
    img: "",
};

reg.onclick = function (){
    user.img = prompt("Введите ссылку на картинку (рекамендуемый размер 200х200)");
    document.querySelector("#avatar").src = user.img;
};

save.onclick = function (){
    localStorage.JSONUser = JSON.stringify(user);    
}

load.onclick = function (){
    user = JSON.parse(localStorage.getItem(JSONUser));
}


