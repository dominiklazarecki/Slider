const slideList = [{
    img: "img/geralt.jpg",
    text: 'Pierwszy tekst'
},
{
    img: "img/ciri.jpg",
    text: 'Drugi tekst'
},
{
    img: "img/yen.jpg",
    text: 'Trzeci tekst'
}]

const image = document.querySelector('img.slider');
const h1 = document.querySelector('h1.slider');
const dots = [...document.querySelectorAll('.dots span')];


const time = 3000;
let active = 0;

const changeSlide = () => {
    active++;
    if (active === slideList.length) active = 0
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDots();
}

const changeDots = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}


const keyChangeSlide = (e) => {
    // if (e.keyCode === 37) {
    //     if (active === 0) active = slideList.length;
        
    //     image.src = slideList[active - 1].img;
    //     h1.textContent = slideList[active - 1].text;

    //     active--;
    //     changeDots();
    //     clearInterval(myTimer);
    // }

    // if (e.keyCode === 39) {
    //     if(active === slideList.length -1) active = -1;

    //     image.src = slideList[active + 1].img;
    //     h1.textContent = slideList[active + 1].text;

    //     active++;
    //     changeDots();
    //     clearInterval(myTimer);
    // }

    // myTimer = setInterval(changeSlide, time);


    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(myTimer);
         e.keyCode == 37 ? active-- : active++;
    
    if(active === slideList.length) {
        active = 0;
    }else if (active < 0) {
        active = slideList.length -1;
    }

    console.log(active);

    image.src = slideList[active].img;
    h1.textContent = slideList[active].text

    changeDots();
    myTimer = setInterval(changeSlide, time);
 }
}

window.addEventListener('keydown', keyChangeSlide);
let myTimer = setInterval(changeSlide, time);

  


