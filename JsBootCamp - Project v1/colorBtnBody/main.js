let container = document.querySelector(".btn");
let colorhead = document.querySelector(".colorHead");

container.addEventListener("click",containerFnt);

function containerFnt(){

    let randNumber = Math.floor(Math.random() * 16);

    let colors = ["red", "blue", "green","black","yellow","pink","orange","white","brown","purple","Crimson","GoldenRod","Gold","Khaki","Lime","Orchid","Salmon"];
    let clr = colors[randNumber];
    let bdy = document.body;
    colorhead.innerText = clr;

    bdy.style.backgroundColor = clr;
}