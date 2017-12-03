var name = prompt("What is your name?");

console.log(name);

if (name === "null") {
	alert("Your name is empty");
} else if (name) {
	alert("Hello " + name);
} else {
	alert("Hello guest");
}
