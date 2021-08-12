let lower = document.querySelector(".btnLower");
let add = document.querySelector(".btnAdd");

lower.addEventListener("click",lw);
add.addEventListener("click",dw);

function lw(event){
    event.preventDefault();
    let veri = document.querySelector(".BrderPoint");
    let veriA = parseInt(veri.innerText) - 1;
    veri.innerText = veriA;

}

function dw(event){
    event.preventDefault();

    let veri = document.querySelector(".BrderPoint");
    let veriG = parseInt(veri.innerText) + 1;
    veri.innerText = veriG;
}

