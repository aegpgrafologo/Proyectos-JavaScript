/*Creación Variables, solo se separan por coma para no utilizar reiteradamente la palabra let*/
/*cuando se termina de definir las variables se cierra con punto y coma - ALT 91 corchetes, ALT 123 LLAVES*/
let marca = "Chevrolet",
    velocidad = 150,
    stock = 500,
    modelos = ["Sonic", "Sail", "Captiva", "Spark"];

/*La frase se define dentro de una nueva variable*/
let frase = `<p>Tenemos disponibilidad de autos de la marca ${marca},
 que alcanzan una velocidad maxima de ${velocidad} Km/h.</p>
 
 <p>Hay en stock ${stock} vehículos de los modelos:</p>`;

/*función callback o función de flecha ES6*/
modelos.forEach(modelo => {
    frase += `- ${modelo} <br/>`;
});
let caja = document.querySelector("#caja");
caja.innerHTML = frase;
