alert("hejka");
console.log("hej hej");

const name = "Michał";
const age = 33;

console.log(name);
console.log(age);

console.log(`hej, mam na imię ${name} i mam ${age} lata`);

const welcomeHeader = document.querySelector(".welcome__header--js");

console.log(welcomeHeader);

welcomeHeader.innerHTML = "Miło że wpadłaś / wpadłeś :)";

function createContent(querySelectorContent, content) {
	const element = document.querySelector(querySelectorContent);
	element.innerHTML = content;
}

const myself = {
	age: 33,
	name: "Michał",
};


createContent(
	".welcome__header--js",
	`Hej, mam na imię ${'Michał'}, dziś jest data i lecimy z frontendem`
);

const date = console.log(myself);
