// var firstCheck = false,
//   secondCheck = false,
//   access = firstCheck
//     ? "Acceso Denegado"
//     : secondCheck
//       ? "Acceso Denegado"
//       : "Acceso Permitido";

// console.log(access); // muestra "Acceso Permitido"


var stop = false,
  age = 16;

age > 18 ? location.assign("continue.html") : (stop = true);
