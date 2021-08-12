let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", btnbir);


function btnbir(){

    let spn1 = document.querySelectorAll(".spn");

    let dd = document.querySelectorAll(".dd");

    var i;

    var text = ["pink","blue","yellow","red","brown","grey","orange","green"];

    var color = ["black","Aquamarine","Aqua","DarkSeaGreen","black","Aquamarine","Aqua","Cornsilk"];

    for (i = 0; i < spn1.length; i++){

        spn1[i].innerHTML = "<span style= color:" + color[i] +">" + text[i] + "</span>";
        dd[i].style.backgroundColor = text[i];
    }


/*
    spn1.forEach(myFunction);



    function myFunction(item,index){


        if (index == 4){
            item.innerText = "MAVİ";
            item.style.color = "yellow";
            item.style.height = "100%";
            item.style.width = "100%";
            item
            item.style.backgroundColor = "red";
        }

    }
    */


}