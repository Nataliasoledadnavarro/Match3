//ELEMENTOS DEL DOM //
const grilla = document.querySelector(".grilla");
const modalInstrucciones = document.getElementById("modal-instrucciones");
const botonJugar = document.getElementById("boton-jugar");

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

// GRILLA EN HTML //

let matriz = generarGrillaAlAzar(8, 8, arrayEmojis);

const convertirAString = (matriz) => {
  let resultado = [];

  for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
      resultado.push(`<div class="icono">${matriz[i][j]}</div>`);
    }
  }
  return resultado.join("");
};

grilla.innerHTML = convertirAString(matriz);

//MODAL INSTRUCCIONES //

botonJugar.onclick = () => {
  modalInstrucciones.style.display = "none";
};

// MODAL DIFICULTADES //
