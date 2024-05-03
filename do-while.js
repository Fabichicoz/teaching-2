do {
	alert('Ingresa un número válido');
	var edad = prompt('¿Cuál es tu edad?');
	var edadNumero = Number(edad);
} while (isNaN(edadNumero));

const esUnNumero = !isNaN(edadNumero);

if (esUnNumero) {
	console.log('Ingresaste un número');
}