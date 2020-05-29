alert("hejka");
console.log("hej hej");

const name = "Michał";
const age = 33;

console.log(name);
console.log(age);

console.log(`hej, mam na imię ${name} i mam ${age} lata`);

const welcomeHeader = document.querySelector(".welcome__header--js");

console.log(welcomeHeader);

welcomeHeader.innerHTML = "Cześć, miło że wpadłaś / wpadłeś :)";

function createContent(querySelectorContent, content) {
	const element = document.querySelector(querySelectorContent);
	element.innerHTML = content;
}

const myself = {
	age: 33,
	name: "Michał",
};

let date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let today = day + '/' + month + '/' + year;

createContent(
	".welcome__header--sub--js",
	`Mam na imię ${myself.name}, dziś jest ${today}, a to jest moja strona "robocza"`
);


