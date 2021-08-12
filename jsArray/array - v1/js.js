


var animals = ['pigs', 'goats', 'sheep'];

var totals = [1,2,23,4,5,6];

/*
animals.push('cows');
console.log(animals);
animals.unshift('monkey');
console.log(animals);
animals.pop();
console.log(animals);
animals.shift();
console.log(animals);
var z = animals.indexOf('goats');
console.log(z);
*/

var plus = 0;
var impact = 1;
for (var x = 0; x < totals.length; x++){
    plus += totals[x];
    impact *= totals[x];
}

console.log("Total: " + plus);
console.log("impact: " + impact);
