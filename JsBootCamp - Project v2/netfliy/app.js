const questions = document.querySelectorAll('.question');

questions.forEach(function (e){
    const btn = e.querySelector('.question-btn');

   btn.addEventListener('click',function (){
       questions.forEach(function (item){
          if (item !== e){
              item.classList.remove("show-text");
          }
       });

       e.classList.toggle('show-text');
   });
});

/*
const btns = document.querySelectorAll(".question-btn");

btns.forEach(function (btn){
    btn.addEventListener('click', function (e){
        const question = e.currentTarget.parentElement.parentElement;

        question.classList.toggle('show-text');
    });
});
*/