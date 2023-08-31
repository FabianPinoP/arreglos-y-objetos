//ejemplo de sintaxis
// const miArreglo = [elemento1, elemento2, elemento3, ...];

//accediendo a elementos por indice

// const miArreglo = [10, 20, 30, 40];

// const primerElemento = miArreglo[0];
// console.log("accediendo al primer elemento", primerElemento);
// const segundoElemento = miArreglo[1];
// console.log("accediendo al segundo elemento", segundoElemento);

//ejercico propuesto 1

// const nombres = ["Juan", "Luisa", "Fabian", "Jorge"]

// nombres[2]
// nombres[0]
// nombres[3]
// ejemplos de ciclos

// ciclo for

// const miArreglo = [10, 20, 30, 40];

// for (let i = 0; i < miArreglo.length; i++) {
//   console.log(miArreglo[i]);
// }

// ciclo while

// const miArreglo = [10, 20, 30, 40];
// let indice = 0;

// while (indice < miArreglo.length) {
//   console.log(miArreglo[indice]);
//   indice++;
// }

//ciclo for of

// const miArreglo = [10, 20, 30, 40];

// for (const elemento of miArreglo) {
//   console.log(elemento);
// }

// forEach

// const miArreglo = [10, 20, 30, 40];

// miArreglo.forEach((elemento) => {
//   console.log(elemento);
// });

//ejercicio propuesto 2
// const lenguajes = ["JavaScript", "Java", "Python", "C++", "C#"];
// lenguajes.forEach((elemento) => {
//   console.log(elemento);
// });

//interpolacion de variables

// const nombre = "Juan";
// const edad = 25;

// const mensaje = `Hola, mi nombre es ${nombre} y tengo ${edad} años.`;
// console.log(mensaje);

// concatenacion

// const nombre = "Juan";
// const apellido = "Pérez";

// const nombreCompleto = nombre + " " + apellido;
// console.log(nombreCompleto);

//ejemplo pintando en el dom con arreglos ciclos + interpolacion

// const nombres = ["Juan", "Luisa", "Fabian", "Jorge"];

// const dynamicContent = document.getElementById("dynamic-content");

// for (const nombre of nombres) {
//   dynamicContent.innerHTML += `<li>${nombre}</li>`;
// }

//ejercicio propuesto 3

// const escalaMayorDeDo = ["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"];
// const notes = document.querySelector(".notes");

// for (const nota of escalaMayorDeDo) {
//   notes.innerHTML += `<li>${nota}</li>`;
// }

// ejemplo de mejora innerHTML

// const nombres = ["Juan", "Luisa", "Fabian", "Jorge"];

// let html = "";

// const dynamicContent = document.getElementById("dynamic-content");

// for (const nombre of nombres) {
//   html += `<li>${nombre}</li>`;
// }


// console.log("html", html);
// dynamicContent.innerHTML = html;

//ejemplos de objetos
//accediendo a propiedades de un objeto por punto
// const persona = {
//   nombre: 'Juan',
//   edad: 30,
//   esEstudiante: false
// };

// console.log(persona.nombre); // Imprimirá 'Juan'
// console.log(persona.edad);   // Imprimirá 30

//accediendo a propiedades de un objeto por corchetes
// const persona = {
//   nombre: 'Juan',
//   edad: 30,
//   esEstudiante: false
// };

// console.log(persona['nombre']); // Imprimirá 'Juan'
// console.log(persona['edad']);   // Imprimirá 30

//ejercicio propuesto 4

// const persona = {
//   nombre: 'pedro',
//   apellido: 'perez',
//   profesion: 'front end developer',
//   hobby: 'trekking',
// };

// console.log(persona.hobby);

//creacion de templates mediante datos de un objeto

// const articulo = {
//   id: 31,
//   titulo: "Autos nuevos en chile",
//   subtitulo: "el mercado de autos se normaliza",
//   descripcion:
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// };

// const article = document.querySelector(".articulos");

// article.innerHTML = `
//   <h2>${articulo.titulo}</h2>
//   <h3>${articulo.subtitulo}</h3>
//   <p>${articulo.descripcion}</p>
// `;


//ejercicio propuesto 5

// const producto = {
//   id: 43,
//   titulo: "cafetera magica",
//   precio: 23990,
//   color : "rojo",
//   src: "https://picsum.photos/200/300",
//   descripcion: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
// }

// const product = document.querySelector(".product");

// product.innerHTML = `
//   <h2>${producto.titulo}</h2>
//   <h3>${producto.precio}</h3>
//   <p>${producto.descripcion}</p>
//   <img src="${producto.src}" alt="${producto.titulo}">
// `;

//Insertando datos desde un arreglo de Objetivos en un template

// const products = [
//   {id: 1, nombre: "item 1", precio: 12000},
//   {id: 2, nombre: "item 2", precio: 14000}
// ]

// let html = "";

// const productList = document.querySelector(".products");

// for (const product of products) {
//   html += `
//     <div id="${product.id}">
//       <h2>${product.nombre}</h2>
//       <h3>${product.precio}</h3>
//     </div>
//   `
// }

// productList.innerHTML = html;