let x = 10;
let y = 25;

let z = x + y;
let zy = x - y;
let zb = x * y;
let zcv = x / y;

let d = document.getElementById("maths");
let f = document.getElementById("eksi");
let bv = document.getElementById("crpma");
let vg = document.getElementById("blme");

d.innerText = z;
f.innerText = zy;
bv.innerText = zb;
vg.innerText = zcv;

/*

var fruits = ["apple", "orange", "cherry"];
fruits.forEach(myFunction);

function myFunction(item, index) {
    document.getElementById("islemBtn").innerHTML += index + ":" + item + "<br>";
}

*/

let islmbtn = document.querySelectorAll("#islemBtn");

const veri = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4"
]

let ct = 0;

islmbtn.forEach(function(button) {
    button.addEventListener('click', function (e) {
        ct++

        alert(ct);


    });

});


islmbtn.addEventListener("click",eklebtn);

function eklebtn(){
    let zs = document.getElementById("zs");
    alert(zs.value);
}
