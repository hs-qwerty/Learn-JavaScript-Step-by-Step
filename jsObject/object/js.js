var student = {
    name: "jack",
    surname: "london",
    age: 17,
    status: true
}
console.log(student.surname);
var status = "age";
console.log(student[status]);
student.status = false;
console.log(student);

/* use new object */

var student2 = new student22();

student2.name = "vilma";
student2.surname = "doe";
student2.age = 16;
student2.status = false;

console.log(student2)

/* use object -> function */

var student3 = {
    name: "messi",
    surname: "leo",
    age: 34,
    status: "free",
    contract: function (salary){
        if (salary > 55){
            return "okey " + this.name + " " + this.surname + " invite your team";
        }else if(salary > 35){
            return "hmm";
        }else if (salary > 25){
            return "hm";
        }else {
            return "no";
        }
    }
}

console.log(student3.contract(60));


var student6 = {
    name: "ronaldo",
    surname: "cristiano",
    age: 35,
    status: true,
}

/* Const */

function Student(name,surname,age,status){
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.status = status;
}

var student4 = new Student("silma","jack",18,false);

console.log(student4);