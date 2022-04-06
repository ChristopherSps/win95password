let buttonOne = document.createElement("button")
buttonOne.setAttribute("onClick","checkButton()");
buttonOne.setAttribute("id","buttonsOne");
buttonOne.innerText = "Ok";
buttons.appendChild(buttonOne);

let buttonTwo = document.createElement("button");
buttonTwo.setAttribute("onClick","button");
buttonTwo.setAttribute("id","buttonsTwo");
buttonTwo.innerText = "Cancel";
buttons.appendChild(buttonTwo);

function checkButton() {
	alert("hey");
}