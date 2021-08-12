let sonuc = "";

for (i = 1; i < 10; i++){

    for (j = 1; j < 10; j++ ){

        sonuc += i + "*" +  j + " = "  + i * j + "<br>";
    }
    sonuc += "-------------" + "<br>";
}

document.getElementById("div13").innerHTML = sonuc;