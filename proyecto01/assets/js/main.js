/*Creación Variables*/
let nombres = "Anyelo Esneider";
let apellidos = "Gomez Peña";
let edad = 43;
let pais = "Colombia";
/*Con corchetes se define el array*/
conocimientos = ["html", "css", "Javascript", "Phyton"];
/*Se muestran los valores con una frase, concatenando con un template de string de javascript,
utilizando las comillas invertidas - ALT96*/
console.log(`Hola soy ${nombres} ${apellidos} tengo ${edad} años, vivo en ${pais} 
y tengo los siguientes conocimientos: ${conocimientos[0]}, ${conocimientos[1]}, ${conocimientos[2]} y ${conocimientos[3]}.`);
/*El valor se cambia accediendo a la variable y cambiando el valor*/
edad = 68;
/*Utilizando el método push, le incluyo un nuevo conocimiento*/
conocimientos.push("php");
/*Para cumplir el requerimiento ahora se utiliza la concatenación clasica*/
console.log("Ahora tengo " + edad + " años y he aprendido " + conocimientos[4]);``