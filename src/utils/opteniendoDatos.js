var jsonData = [];

function obtenerPaisAleatorio() {
    var paises = ["Argentina", "Brasil", "Chile", "Colombia", "Ecuador", "España", "Estados Unidos", "México", "Perú", "Uruguay", "Bolivia", "Paraguay"];
    return paises[Math.floor(Math.random() * paises.length)];
}
  
function obtenerProfesionAleatoria() {
    var profesiones = ["Ingeniero", "Médico", "Abogado", "Profesor", "Programador", "Diseñador", "Contador", "Estudiante", "Cocinero", "Artista", "Arquitecto" , "Contador", "Odontólogo", "Tatuador"];
    return profesiones[Math.floor(Math.random() * profesiones.length)];
}
  
function obtenerSexoAleatorio() {
    return Math.random() < 0.5 ? "Masculino" : "Femenino";
}


function obtenerNombreAleatorio() {
    const nombres = ["Juan", "María", "José", "Ana", "Pedro", "Luis", "Laura", "Carlos", "Mónica", "Sofía", "Diego", "Gabriela", "Fernando", "Camila", "Daniel", "Paula", "Andrés", "Valentina", "Alejandro", "Lucía"];
    return nombres[Math.floor(Math.random() * nombres.length)];
}  

for (var i = 0; i < 1000; i++) {
  var objeto = {
    "nombre": obtenerNombreAleatorio(),
    "edad": Math.floor(Math.random() * 80) + 18 + " años", // Edad aleatoria entre 18 y 97
    "pais": obtenerPaisAleatorio(),
    "profesion": obtenerProfesionAleatoria(),
    "sexo": obtenerSexoAleatorio()
  };
  jsonData.push(objeto);
}

/*
for (var i = 0; i < jsonData.length; i++){
    var objeto = jsonData[i];
    console.log("Objeto " + (i+1) + ":");
    for (var key in objeto) {
      if (objeto.hasOwnProperty(key)) {
        console.log(key + ": " + objeto[key]);
      }
    }
}
*/

let palabraFiltrada = jsonData.filter(function(palabra){
    return(palabra.pais=="Colombia")
})

for(var f = 0 ; f < palabraFiltrada.length; f++){
    var strObjeto = "";
    var objeto2 = palabraFiltrada[f];
    for (var key in objeto2) {
      if (objeto2.hasOwnProperty(key)) {
        strObjeto += key + ": " + objeto2[key] + "\n"
      }
    }
    alert(strObjeto)
}
