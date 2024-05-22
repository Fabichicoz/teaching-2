const EDAD_MINIMA = 18;

const nombre = prompt('¿Cuál es tu nombre?');
const edadTexto = prompt('¿Cuál es tu edad?');
const edad = Number(edadTexto);

// const saludo = `Hola, ${nombre}! Tienes ${edad} años.`;

// const saludo2 = 'Hola, ' + nombre + '! Tienes ' + edad + ' años.';

// const esMayorDeEdad =  edad >= EDAD_MINIMA; // true o false

if (edad >= EDAD_MINIMA) {
	alert(`${nombre}, puedes entrar porque eres mayor de edad`);
} else {
	alert(`${nombre}, no puedes entrar porque eres menor de edad`);
}