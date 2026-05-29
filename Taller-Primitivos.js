const prompt = require('prompt-sync')();

let nombre = "Alejandro";
let edad = 25;
let esEstudiante = false;
let contador = 1;

let sinValor;
let valorNulo = null;


console.log(sinValor);
console.log(valorNulo);
console.log();

// Ingreso datos por teclado
anioNacimiento = parseInt(prompt("Por favor digite el año en que nació: "));
edad = 2026 - anioNacimiento;
console.log(edad);
console.log();
num1 = parseInt(prompt("Por favor digite un número: "));
num2 = parseInt(prompt("Por favor digite un número: "));
suma = num1 + num2;
console.log(suma);
console.log();

// Condicionales
edad = parseInt(prompt("Por favor digite su edad: "));
if (edad >= 18) {
    console.log("Puede entrar al lugar.");
    console.log();
} else {
    console.log("No puede entrar al lugar.");
    console.log();
}
num1 = parseInt(prompt("Por favor digite un número: "));
if (num1 > 0) {
    console.log("El número ingresado es positivo");
    console.log();
}
else if (num1 < 0) {
    console.log("El numero ingresado es negativo");
    console.log();
}
else {
    console.log("El número ingresado es 0");
    console.log();
}

// Bucle while
num1 = parseInt(prompt("Por favor digite un número: "));
while (contador <= num1) {
    console.log(contador);
    contador++;
}
contrasena = parseInt(prompt("Por favor digite su contraseña: "));
while (contrasena != 1234){
    console.log("Contraseña errada, por favor intente de nuevo.");
    console.log();
    contrasena = parseInt(prompt("Por favor digite su contraseña: "));
}
console.log("Contraseña correcta");
console.log();

// Bucle for
for (i = 1; i <= 10; i++) {
    console.log(i);
}

numero = parseInt(prompt("Por favor digite un número: "));
for (i = 1; i <= 10; i++) {
    resultado = numero * i;
    console.log(numero, "x", i, "=", resultado);
}
