// Variáveis

const elementos = document.querySelectorAll(".accordion dt");


const toggle = (item) => {
  item.nextElementSibling.classList.toggle("active");
  item.classList.toggle("active");
}

elementos.forEach((elemento) => {
  elemento.addEventListener("click", () => toggle(elemento));
});


// Slide 1 variáveis

const slideWrapper1 = document.querySelector(".slide-1 .slide-wrapper");
const slidePai1 = document.querySelector(".slide-1");
const slideFilho1 = document.querySelectorAll(".slide-1 .slide-wrapper .slide");
let totalSlide1 = slideFilho1.length;
let currentSlide1 = 0;

// Slide 2 variáveis

const slideWrapper2 = document.querySelector(".slide-2 .slide-wrapper");
const slideFilho2 = document.querySelectorAll(".slide-2 .slide-wrapper .slide");
let totalSlide2 = slideFilho2.length;
let currentSlide2 = 0;
console.log(slideFilho2);
console.log(slidePai1.clientWidth);


const atualizaDimensoes = () => {

  // Dimensões slide 1
  slideWrapper1.style.width = `${slidePai1.clientWidth * slideFilho1.length - 1}px`;

  // Dimensões slide 2

  slideWrapper2.style.width = `${slidePai1.clientWidth * slideFilho2.length - 1}px`;

  console.log(slideWrapper2.style.width);



  slideFilho1.forEach((filho) => {
    filho.style.maxWidth = `${slidePai1.clientWidth}px`;
  });

  slideFilho2.forEach((filho) => {
    filho.style.width = `${slidePai1.clientWidth}px`;
  });
}

setInterval(() => {
  nextSlide();
  console.log(currentSlide2);
}, 3000);


function SlideAnterior() {
  currentSlide1--;
  currentSlide2--;
  if(currentSlide1 < 0) {
      currentSlide1 = totalSlide1 - 1;
  }
  if (currentSlide2 < 0) {
    currentSlide2 = totalSlide2 - 1;
  }
  atualizaMargin();
}
function nextSlide() {
  currentSlide1++;
  currentSlide2++;
  if(currentSlide1 > (totalSlide1 - 1)){
      currentSlide1 = 0;
  }
  if(currentSlide2 > (totalSlide2 - 1)) {
    currentSlide2 = 0;
  }
  atualizarMargin();
}

function atualizarMargin() {
  let sliderItemWidth1 = slideFilho1[0].clientWidth;
  let sliderItemWidth2 = slideFilho2[0].clientWidth;
  

  let newMargin1 = (sliderItemWidth1 * currentSlide1);
  slideWrapper1.style.marginLeft = `-${newMargin1}px`;

  let newMargin2 =  (sliderItemWidth2 * currentSlide2);
  slideWrapper2.style.marginLeft = `-${newMargin2}px`;
}





// Events
window.addEventListener("load", () => {
  atualizaDimensoes();
})
window.addEventListener("resize", () => {
  atualizaDimensoes();
});




