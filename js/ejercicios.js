//seleccionamos los elementos del DOM
let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let comb = document.querySelector("#combinados");

let respuesta_usuario = document.querySelector("#respuesta_usuario");
let msj_correccion = document.querySelector("#msj_correccion");
let operacion = document.querySelector("#operacion");
let operacion_actual;
let combinados = ["30+5x4", "20:2+3", "(5+5)-(2x4)", "7+8.9", "6+2.5", "-8÷2-5", "5.3 + (6+1)", "-5+7-(5.1)", "-5.[(-3.2)÷(-3)+1]", "8+10÷2-4.2", "42÷7+6.9", "2.9+45-18", "2+54÷9+3", "9+72÷8+2", "12.2-4÷2", "7+18-6.2", "2.7+9÷3", "4.5+6.3", "3.4+5-2", "30÷5-7+16"];
let resultadosCombinados = ["50", "13", "2", "79", "16", "-9", "22", "-3", "-15", "5", "60", "45", "11", "20", "12", "13", "17", "38", "15", "15"];
//en n1 y n2 voy a guardar los numeros aletarios de cada operacion
let n1, n2, ncomb;

//funcion suma
function btnSumar() {
  //limpiamos el div contenedor de las correcciones
  msj_correccion.innerHTML = "";
  comb.innerHTML = "";
  //agregamos la clase activa al boton suma y la quitamos del resto
  activarBoton("suma");
  operacion_actual = "+";
  //asignamos la operacion suma a la etiqueta
  operacion.innerHTML = " + ";
  //generamos los numeros aletarios de la suma
  nuevaSuma();
}

function nuevaSuma() {
  //generamos dos numeros aletarios entre 0 y 9
  n1 = parseInt(Math.random() * 2000);
  n2 = parseInt(Math.random() * 2001);
  //asignamos los numeros a las etiquetas
  num1.innerHTML = n1;
  num2.innerHTML = n2;
  //colocamos el curso en el input
  respuesta_usuario.focus();
}

//Funcion producto
function btnProducto() {
  //limpiamos el div contenedor de las correcciones
  comb.innerHTML = "";
  msj_correccion.innerHTML = "";
  //agregamos la clase activa al boton producto y la quitamos del resto
  activarBoton("producto");
  operacion_actual = "*";
  //asignamos la operacion suma a la etiqueta
  operacion.innerHTML = " x ";
  //generamos los numeros aletarios de la suma
  nuevoProducto();
}

function nuevoProducto() {
  //generamos dos numeros aletarios entre 0 y 9
  n1 = parseInt(Math.random() * 2200);
  n2 = parseInt(Math.random() * 2001);
  //asignamos los numeros a las etiquetas
  num1.innerHTML = n1;
  num2.innerHTML = n2;
  //colocamos el curso en el input
  respuesta_usuario.focus();
}

//funcion resta
function btnResta() {
  comb.innerHTML = "";
  //limpiamos el div contenedor de las correcciones
  msj_correccion.innerHTML = "";
  //agregamos la clase activa al boton suma y la quitamos del resto
  activarBoton("resta");
  operacion_actual = "-";
  //asignamos la operacion suma a la etiqueta
  operacion.innerHTML = " - ";
  //generamos los numeros aletarios de la suma
  nuevaResta();
}

function nuevaResta() {
  //generamos dun numeros aletarios entre 5 y 10
  n1 = parseInt(Math.random() * 2001);
  //generamos un numero aleatorio entre 0 y 5
  n2 = parseInt(Math.random() * 2001);
  //asignamos los numeros a las etiquetas
  num1.innerHTML = n1;
  num2.innerHTML = n2;
  //colocamos el curso en el input
  respuesta_usuario.focus();
}

//funcion división
function btnDivision() {
  comb.innerHTML = "";
  //limpiamos el div contenedor de las correcciones
  msj_correccion.innerHTML = "";
  //agregamos la clase activa al boton suma y la quitamos del resto
  activarBoton("division");
  operacion_actual = "/";
  //asignamos la operacion suma a la etiqueta
  operacion.innerHTML = " / ";
  //generamos los numeros aletarios de la suma
  nuevaDivision();
}

function nuevaDivision() {
  //aqui voy a guardar los divisores del numero a dividr
  let divisores = [];

  //generamos un numero aletorio entre 1 y 10
  n1 = parseInt(Math.random() * 8000);
  // n2 = parseInt(Math.random() * 8000);

  // encontramos los divisores del numero generado y lo guardamos en el arreglo
  for (var i = 1; i <= n1; i++) {
    if (n1 % i === 0) {
      //es divisor
      divisores.push(i);
    }
  }

  //seleccionamos un posiciòn aleatorio de los numeros que son divisores
  let pos = parseInt(Math.random() * divisores.length);

  n2 = divisores[pos];
  num1.innerHTML = n1;
  num2.innerHTML = n2;
  respuesta_usuario.focus();
}

function btnCombinado() {
  operacion_actual = "combinado";
  num1.innerHTML = "";
  msj_correccion.innerHTML = "";
  activarBoton("combinado");
  operacion.innerHTML = "";
  num2.innerHTML = "";
  nuevaCombinado();
}

function nuevaCombinado() {
  operacion_actual = "combinado";
  num1.innerHTML = "";
  operacion.innerHTML = "";
  num2.innerHTML = "";

  comb.innerHTML = combinados[Math.floor(Math.random() * combinados.length)];
  respuesta_usuario.focus();
}

//funcion que controla si la respuesta es correcta
function corregir() {
  //si el usuario no ha ingresado nada no continuo
  if (respuesta_usuario.value == "") {
    return;
  }

  var i = document.createElement("i");
  //armo la operacion que se genero en una variable y veo cual es su reslutado
  //En este caso el operador + es para concatener las cadenas
  if (operacion_actual != "combinado") {
    let operacion = n1 + operacion_actual + n2;
    solucion = eval(operacion);
    console.log(operacion);
    console.log(typeof Number(respuesta_usuario.value));
    console.log(typeof solucion);
    console.log(respuesta_usuario.value);
    console.log(solucion);
    // controlo si coincide lo que el usuario respondio con la solucion
    if (Number(respuesta_usuario.value) === solucion) {
      i.className = "fa-regular fa-face-grin";
      console.log("true");
    } else {
      console.log("False");
      i.className = "fa-regular fa-face-frown";
    }
  } else {
    solucion = combinados.indexOf(comb.innerHTML);

    if (respuesta_usuario.value == resultadosCombinados[solucion]) {
      console.log("true");
      i.className = "fa-regular fa-face-grin";
    } else {
      i.className = "fa-regular fa-face-frown";
    }
  }
  //creo un elemento i para agregar el icono de correcto o incorrecto

  //agrego el elemento al contenedor de las correciones
  msj_correccion.appendChild(i);

  //controlo que tipo de operacion estoy para genera una nueva operacion
  if (operacion_actual == "+") {
    nuevaSuma();
  } else if (operacion_actual == "-") {
    nuevaResta();
  } else if (operacion_actual == "*") {
    nuevoProducto();
  } else if (operacion_actual == "/") {
    nuevaDivision();
  } else if (operacion_actual == "combinado") {
    nuevaCombinado();
  }

  //limpio el input
  respuesta_usuario.value = "";
}

//agrego al input el evento onkeydown para detectar cuando se presiona Enter Y
//llamar directamente a la funcion corregir()
respuesta_usuario.onkeydown = function (e) {
  var ev = document.all ? window.event : e;
  if (ev.keyCode == 13) {
    corregir();
  }
};

//Esta funcion la creamos luego, cuando tengamos listo los estilos
function activarBoton(idBoton) {
  document.getElementById("suma").className = "";
  document.getElementById("resta").className = "";
  document.getElementById("producto").className = "";
  document.getElementById("division").className = "";
  document.getElementById("combinado").className = "";
  document.getElementById(idBoton).className = "activado";
}
