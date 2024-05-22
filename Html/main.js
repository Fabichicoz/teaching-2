// las variables en realidad no son tan variables, si no que son constantes que nunca van a cambiar, 
// ejemplo una persona tiene que ser mayor de edad para entrar a un boliche eso es una constante
// y una variable es el nombre puede variar

// usamos const por que es más rapida. 
// para resumir const lo usamos solo para cuando, algo no va a cambiar y las variables cuando algo va a variar
// const nombre = "Fabian";
// edad edad = 28;

// USANDO EL SCRIPT SRC NOS VINCULA A LA PAGINA O LINK QUE QUIERAMOS ENTRAR
// CON ESTE EJEMPLO NOS LLEVA A HACER UNA CUENTA O PEDIR ALGUN DATO NUMERICO
//function sumar(a,b) {
  //  return a + b;
//}

//const resultado = sumar(2, 3);
//console.log(resultado); 

// Usando promt vemos programas, sincronos y asincronos
// ejemplo sincrona es una cosa que se ejecuta una detras de la otra.
// ejemplo asincrona se puede ejecutar en distinto tiempo.
// javascript detiene todo hasta que promt termine de ejecutarse

// usando este codigo nos permite pedir tu nombre
// let nombre = prompt("cual es tu nombre");

// const saludo = "!hola " + nombre + "!";

// console.log(saludo);

// const nombre = prompt("¿cual es tu nombre?");
// const edad = prompt("¿cual es tu edad?");

// ESTE ES EL CAMINO MAS CORTO.

// UN DATO SE USAN COMILLAS SIMPLES. ESTO SIRVE PARA PONER VARIABLES.
// CADA VEZ QUE VAMOS A PONER VARIABLES LLEVA ESTE SIMBOLO ${Y ACA DENTRO LA VARIABLE}
// const saludo = `hola, ${nombre}! tienes ${edad} años`;

// ESTE ES EL CAMINO MAS LARGO Y NO TE DEJA AGREGAR MUCHAS VARIABLES.
// const saludo2 = `hola,` + nombre + ` ` + edad + ` ` +`! tienes` + edad + `años`;

// console.log(saludos);

// EN ESTE EJEMPLO VEMOS SI ALGUIEN ES MAYOR O MENOR DE EDAD
const EDAD_MINIMA = 18;

const nombre = prompt("¿cual es tu nombre?");
const edadTexto = prompt("¿cual es tu edad?");
const edad = Number(edadTexto);

const esMayorDeEdad = Number(`18`) >= EDAD_MINIMA; //true o false

// vamos a trabajar con condicionales se representa con if si es verdadero o else si es falso
// si es mayor de edad complia de lo contrario
if (edad >=EDAD_MINIMA) {
  alert(`${nombre} Puedes entrar porque Eres mayor de edad`);
} else {
    alert(`${nombre} No puedes entrar porque Eres menor de edad`);


}

