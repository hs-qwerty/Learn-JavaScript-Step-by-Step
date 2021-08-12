let frmId = document.querySelector(".formBtn");

frmId.addEventListener("click", myScript);


function myScript(e){
    e.preventDefault();

    let input = document.getElementById("searchTxt");

    let cx = document.querySelector(".cc");

    cx.innerHTML = "<h3 class='deneme'>Text Submit:" +  input.value +" </h3>";


    //alert(input.value);

}