let up = document.querySelector(".lft");
let dwn = document.querySelector(".rght");

up.addEventListener('click',ups);
dwn.addEventListener('click',rght);


function ups(item){
    let bckgrnd = document.querySelector(".ImageBr");
    bckgrnd.style.backgroundImage = "url('bmw.jpg')";
}

function rght(){
    let bckgrnd = document.querySelector(".ImageBr");
    bckgrnd.style.backgroundImage = "url('pors.jpg')";
}
