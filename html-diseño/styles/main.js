const fullName = 'María Díaz';
const firstName = fullName.split(' ')[0]; // María

const birthDate = new Date('1990-12-30');

const month = birthDate.getMonth() + 1;
const day = birthDate.getDate() + 1;
const year = new Date().getFullYear();

const birthday = `${day} ${month} ${year}`;

const firstNameContainer = document.getElementById('firstName');
const fullNameContainer = document.getElementById('fullName');
const birthdayContainer = document.getElementById('date');

firstNameContainer.innerHTML = firstName;

fullNameContainer.innerHTML = fullName;

birthdayContainer.innerHTML = birthday;

const redes = [
	{
		name: 'facebook',
		url: 'https://www.facebook.com/robertocarlero',
	},
	{
		name: 'twitter',
		url: 'https://twitter.com/robertocarlero',
	},
	{
		name: 'instagram',
		url: 'https://www.instagram.com/robertocarlero',
	},
];

const redesContainer = document.getElementById('redes-wrapper');

redes.forEach((red) => {
	// Creamos un elemento ancla Ej. <a></a>
	const link = document.createElement('a');
	// Añadimos el atributo href al elemento ancla <a href="https://www.facebook.com/robertocarlero"></a>
	link.href = red.url;
	// Añadimos el atributo target al elemento ancla <a href="https://www.facebook.com/robertocarlero" target="_blank"></a>
	link.target = '_blank';

	// Creamos un elemento imagen Ej. <img />
	const icon = document.createElement('img');
	// Añadimos el atributo src al elemento imagen <img src="./assets/icons/facebook.svg" />
	icon.src = `./assets/icons/${red.name}.svg`; // ./assets/icons/facebook.svg
	// Agregamos el icono dentro del elemento ancla <a><img src="./assets/icons/facebook.svg" /></a>
	link.appendChild(icon);

	// Agregamos el elemento ancla al contenedor de redes sociales
	// <div id="redes-wrapper">
	//   <a href="https://www.facebook.com/robertocarlero" target="_blank">
	//     <img src="./assets/icons/facebook.svg" />
	//  </a>
	// </div>
	redesContainer.appendChild(link);
});