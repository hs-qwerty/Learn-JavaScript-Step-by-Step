let Qubtn = document.querySelector(".rndBtn");
let yazar = document.querySelector(".quetBtn");
let icerik = document.querySelector(".textHead");

Qubtn.addEventListener('click',fncBtn);


function fncBtn(){

    let randNumber = Math.floor(Math.random() * 9);

    let stt = [
        "Her başarı, sabır ile zamanı birleştirerek sağlanır. Balzac",
        "Stresin en büyük sebebi, günlük yaşamınızda anlayışsız insanlarla yaptığınız tartışmalarıdır.  Albert Einstein",
        "Herkes doğru insanı bulmak ister, yanılmamak için, Oysa kimse uğraşmaz, doğru insan olmak için. Sigmon Freud",
        "İçinde yaşanılan an, geleceği kemiren geçmiştir. Henri Bergeon",
        "Kırıldığını belli etmeyen insanları üzmeyin, Çünkü onlar sizi kaybetmemek için susar, aptal oldukları için değil. TS Eliot",
        "Güzel hayat isteyen güzel insan biriktirsin. Cemal Süreyya",
        "Beklemesini bilenin her şey ayağına gelir. Honore de Balzac",
        "Elin yaptığı herhangi bir şeyi bir başka el yıkabilir. Montaigne",
        "Çok kere en kuvvetli tenkit ses çıkartmamaktır. Charles Buxton",
        "En haksız barışı, en adil savaşa tercih ederim. Cicero"
    ];

    strignsQuet = stt[randNumber];
    let res = strignsQuet.split(".", );

    let soz = ' " ' + res[0] + ' " ';
    let aut = res[1];

    yazar.innerHTML = aut;
    icerik.innerHTML = soz;


}