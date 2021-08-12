var one = 70;
var two = 130;
var three = 180;


function plusX(a,b,c){
    return a + b + c;
}

var total  = plusX(10,30,50);
console.log(total);

var total1 = plusX(one,two,three);




/* parameters function */

function equ(x){
  if (x > 500){
      return true;
  }
}

function pluginsX(a,b,c,FN){
    var yx = a + b + c;
    return FN(yx);
}

var totalB = pluginsX(one,two,three,equ);
console.log(totalB);