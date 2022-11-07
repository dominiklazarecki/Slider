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
// Interfejs

const time = 3000;
let active = 0;

const changeDots = () => {
    const activeDot = dots.findIndex(dot => dot.classList.contains('active'));
    dots[activeDot].classList.remove('active');
    dots[active].classList.add('active');
}

const changeSlide = () => {
    active++;
    if (active === slideList.length) active = 0
    image.src = slideList[active].img;
    h1.textContent = slideList[active].text;
    changeDots();

}

const keyChangeSlide = (e) => {
    if (e.keyCode === 37) {
        console.log("działa lewa");
    }
    if (e.keyCode === 39) {
        console.log("działa prawa");
    }
}

window.addEventListener('keydown', keyChangeSlide);

setInterval(changeSlide, time);


// Implementacja