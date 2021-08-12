const review = [
    {
        id: 1,
        name: "susan john",
        job:"web developer",
        img:"image/1.jpg",
        text:"web developer info text ",
    },
    {
        id: 2,
        name: "mark john",
        job:"doctor",
        img:"image/2.jpg",
        text:"doctor info text ",
    },
    {
        id: 3,
        name: "jany john",
        job:"staff",
        img:"image/3.jpg",
        text:"staff info text ",
    },
    {
        id: 4,
        name: "muslere john",
        job:"forwad",
        img:"image/4.jpg",
        text:"forwad info text",
    }

];


const img = document.getElementById("person-img");
const info = document.getElementById("info");
const job = document.getElementById("job");
const author = document.getElementById("author");


const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const clickBtn = document.querySelector(".random-btn");


let currentItem = 0;


window.addEventListener("DOMContentLoaded",function (){
    showPerson();

});

function showPerson(){
    const item = review[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener("click", function (){
   currentItem++;
   if (currentItem > review.length - 1){
       currentItem = 0;
   }
   showPerson();
});


prevBtn.addEventListener("click", function (){
    currentItem--;
    if (currentItem < 0){
        currentItem = review.length - 1;
    }
    showPerson();
});


clickBtn.addEventListener("click",function (){
    currentItem = Math.floor(Math.random() * review.length);
    showPerson();
});
