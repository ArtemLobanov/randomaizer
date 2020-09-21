let element = document.getElementById('element');
let randNumber = document.createElement('div');
let rand = Math.round(100*Math.random());	


function Randomaizer() {
	let rand = Math.round(100*Math.random());
	randNumber.className = "rand-number";
	randNumber.innerHTML = rand;
	element.appendChild(randNumber);
}