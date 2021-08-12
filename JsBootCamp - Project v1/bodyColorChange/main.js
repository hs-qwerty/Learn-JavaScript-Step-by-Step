

var testDiv = document.getElementById("test");
var demoDiv = document.getElementById("demo");
var attach = document.querySelector(".pp");


let trick = document.querySelector('.demo');
trick.addEventListener('mousemove',trickBtn);


function trickBtn(e){

       let kordinatY = e.offsetX;
       let kordinatX = e.offsetY;

       let bdy = document.body;

       let ort = (kordinatY + kordinatX) / 2;

       let renk = 'rgb(' + kordinatX + ',' + kordinatY + ',' + ort + ')';


       bdy.style.backgroundColor = renk;
       attach.innerHTML = "<h4> RGB / "+ kordinatX +" - " + kordinatY + " - " + ort + "  </h4>"

}

trick.addEventListener('mouseleave',trickLevaeBtn);

function trickLevaeBtn(){

    let bdy = document.body;

    bdy.style .backgroundColor = "#fff";

    attach.innerHTML = "<h4>Empty</h4>";
}