const text = document.getElementById("displayText");
const randomNr = Math.ceil(Math.random() * 3);

function pressButton(id) {
	if (id == randomNr) {
		text.innerHTML = "Winner!";
	} else {
		text.innerHTML = "Try again"
	}	
}
