//ELEMENTOS DEL DOM //
const grilla = document.querySelector(".grilla");

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

console.log(generarGrillaAlAzar(10, 10, arrayEmojis));

// GRILLA EN HTML //

<div class="icono"></div>;

const convertirAString = (arrayEmojis) => {
  let resultado = [];
};
