
let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
    btn.addEventListener('click', function (e){
       const clas = e.currentTarget.classList;

       if (clas.contains('decrease')){
           count--;
       }
       else if (clas.contains('incrase')){
           count++;
       }else{
           count = 0;
       }
       if (count > 0){
           value.style.color = "blue";
       }
       if (count < 0 ){
           value.style.color = "red";
       }
       if (count === 0){
           value.style.color = "black";
       }

       value.textContent = count;
    });
});