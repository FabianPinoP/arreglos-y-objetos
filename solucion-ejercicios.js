// // ejercicio 1

// const numeros = [10, 20, 30, 40, 50];

// let suma = 0;
// for (const numero of numeros) {
//   suma += numero;
// }

// const promedio = suma / numeros.length;

// console.log(`Suma: ${suma}`);
// console.log(`Promedio: ${promedio}`);

// // solucion avanzada

// const numeros = [10, 20, 30, 40, 50];

// const suma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
// const promedio = (suma / numeros.length).toFixed(2);

// console.log(`Suma: ${suma}`);
// console.log(`Promedio: ${promedio}`);


// ejercicio 2

const pacientes = [
  { nombre: "Ana López", edad: 32, enfermedad: "Gripe" },
  { nombre: "Juan Pérez", edad: 45, enfermedad: "Hipertensión" },
  { nombre: "María Sánchez", edad: 28, enfermedad: "Lesión deportiva" },
  { nombre: "Carlos Martínez", edad: 50, enfermedad: "Diabetes" },
  { nombre: "Luisa Ramírez", edad: 37, enfermedad: "Asma" }
];

const tablaContainer = document.getElementById("tablaContainer");

let tablaHTML = `
  <table>
    <thead>
      <tr>
        <th>Nombre</th>
        <th>Edad</th>
        <th>Enfermedad</th>
      </tr>
    </thead>
    <tbody>
`;

for (const paciente of pacientes) {
  tablaHTML += `
    <tr>
      <td>${paciente.nombre}</td>
      <td>${paciente.edad}</td>
      <td>${paciente.enfermedad}</td>
    </tr>
  `;
}

tablaHTML += `
    </tbody>
  </table>
`;

tablaContainer.innerHTML = tablaHTML;
