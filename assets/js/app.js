// Variáveis

const elementos = document.querySelectorAll(".accordion dt");


const toggle = (item) => {
  item.nextElementSibling.classList.toggle("active");
  item.classList.toggle("active");
}

elementos.forEach((elemento) => {
  elemento.addEventListener("click", () => toggle(elemento));
});




