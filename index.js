//ELEMENTOS DEL DOM //
const grilla = document.querySelector(".grilla");
const modalInstrucciones = document.getElementById("modal-instrucciones");
const modalDifidultades = document.getElementById("modal-dificultad");
const botonJugar = document.getElementById("boton-jugar");
const botonFacil = document.getElementById("facil");
const botonIntermedio = document.getElementById("intermedio");
const botonDificil = document.getElementById("dificil");

// FUNCIONES AUXILIARES //

const arrayEmojis = ["🐶", "🦝", "🐴", "🐱", "🦄", "🐰"];

const numeroAlAzar = (arrayEmojis) => {
  return Math.floor(Math.random() * arrayEmojis.length);
};

// FUNCION GENERAR GRILLA //

const generarGrillaAlAzar = (filas, columnas, array) => {
  let matriz = [];

  for (let i = 0; i < filas; i++) {
    let resultado = [];
    for (let j = 0; j < columnas; j++) {
      const numero = numeroAlAzar(array);
      resultado.push(array[numero]);
    }
    matriz.push(resultado);
  }
  return matriz;
};

// CONVERTIR A STRING Y ENVIAR A HTML //

const convertirAString = (matriz) => {
  let resultado = [];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      resultado.push(`<div class="icono">${matriz[i][j]}</div>`);
    }
  }
  return resultado.join("");
};

//MODAL INSTRUCCIONES //

botonJugar.onclick = () => {
  modalInstrucciones.style.display = "none";
};

// MODAL DIFICULTADES //

botonFacil.onclick = () => {
  let matriz = generarGrillaAlAzar(9, 9, arrayEmojis);
  grilla.innerHTML = convertirAString(matriz);

  const iconos = document.querySelectorAll(".icono");

  for (let i = 0; i < iconos.length; i++) {
    iconos[i].style.width = "46px";
    iconos[i].style.height = "46px";
    iconos[i].style.fontSize = "30px";
  }
  modalDifidultades.style.display = "none";
};

botonIntermedio.onclick = () => {
  let matriz = generarGrillaAlAzar(8, 8, arrayEmojis);
  grilla.innerHTML = convertirAString(matriz);
  modalDifidultades.style.display = "none";
};

botonDificil.onclick = () => {
  let matriz = generarGrillaAlAzar(7, 7, arrayEmojis);
  grilla.innerHTML = convertirAString(matriz);

  const iconos = document.querySelectorAll(".icono");

  for (let i = 0; i < iconos.length; i++) {
    iconos[i].style.width = "60px";
    iconos[i].style.height = "60px";
    iconos[i].style.fontSize = "38px";
  }
  modalDifidultades.style.display = "none";

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        if (matriz[i][j] === matriz[i][j + 1] && matriz[i][j] === matriz[i][j + 2]) {
          alert("hola")
        /*matriz[i][j].style.backgroundColor = "yellow"
         matriz[i][j+1].style.backgroundColor = "yellow"
         matriz[i][j+2].style.backgroundColor = "yellow"*/
    }
    if (matriz[i+1] && matriz[i+2] && matriz[i][j] === matriz[i+1][j] && matriz[i][j] === matriz[i+2][j]){
      alert("chau")  
      /*matriz[i][j].style.backgroundColor = "yellow"
      matriz[i+1][j].style.backgroundColor = "yellow"
      matriz[i+2][j].style.backgroundColor = "yellow"*/
  }
    
  }
}
}
