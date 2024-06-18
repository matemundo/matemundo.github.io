(function () {
  var slideContainer = $(".slide-container");

  slideContainer.slick();
  $(".clash-card__image img").hide();
  $(".slick-active").find(".clash-card img").fadeIn(200);

  // On before slide change
  slideContainer.on(
    "beforeChange",
    function (event, slick, currentSlide, nextSlide) {
      $(".slick-active").find(".clash-card img").fadeOut(1000);
    },
  );

  // On after slide change
  slideContainer.on("afterChange", function (event, slick, currentSlide) {
    $(".slick-active").find(".clash-card img").fadeIn(200);
  });
})();

const slideContainer = $(".slide-container");

const wrapper = document.querySelector(".wrapper"),
  selectBtn = wrapper.querySelector(".select-btn"),
  // searchInp = wrapper.querySelector("input"),
  options = wrapper.querySelector(".options");

let palabras = [
  "Matemática",
  "Suma",
  "Resta",
  "Multiplicación",
  "Propiedades",
  "Asociativa",
  "Conmutativa",
  "Distributiva",
  "Elemento neutro",
  "División",
  "Dividendo",
  "Divisor",
  "Cociente",
  "Resto",
  "Números",
  "Naturales",
  "Números naturales N",
  "Enteros",
  "Números enteros Z",
  "Conjunto",
  "Conjunto de números naturales",
  "Conjunto de números enteros Z",
  "Conjunto de números Q",
  "Conjunto de números irracionales I",
  "Conjunto de números Reales R",
  "Par",
  "Impar",
  "Igual",
  "Diferente",
  "Decimal",
  "Mayor que",
  "Menor que",
  "Fracción",
  "Numerador",
  "Denominador",
  "Raíz",
  "Ecuación",
  "Despeje",
  "Sustitución",
  "Potenciación",
  "Exponente",
  "Base",
];

function addPalabra(selectedPalabra = "") {
  // Added default parameter
  options.innerHTML = "";
  palabras.forEach((palabra, index) => {
    // Changed from countries to palabras
    let isSelected = palabra == selectedPalabra ? "selected" : "";
    let li = `<li onclick="updateName(this)" class="${isSelected}" data-imp="${index}">${palabra}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
}
addPalabra(); // No parameter needed due to default parameter in function

function updateName(selectedLi) {
  // console.log(Number(selectedLi.dataset.imp));
  // console.log(selectedLi);
  // searchInp.value = "";
  addPalabra(selectedLi.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedLi.innerText;
  slideContainer.slick("slickGoTo", Number(selectedLi.dataset.imp));
}

// searchInp.addEventListener("keyup", () => {
//   let arr = [];
//   let searchWord = searchInp.value.toLowerCase();
//   arr = palabras
//     .filter((data) => {
//       // Changed from countries to palabras
//       return data.toLowerCase().startsWith(searchWord);
//     })
//     .map((data) => {
//       let isSelected =
//         data == selectBtn.firstElementChild.innerText ? "selected" : "";
//       return `<li onclick="updateName(this)" class="${isSelected}">${data}</li>`;
//     })
//     .join("");
//   options.innerHTML = arr
//     ? arr
//     : `<p style="margin-top: 10px;">Oops! No se encuentra</p>`; // Changed message text
// });

selectBtn.addEventListener("click", () => wrapper.classList.toggle("active"));
