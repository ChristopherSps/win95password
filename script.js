let buttonOne = document.createElement("button")
buttonOne.setAttribute("onClick","checkButton()");
buttonOne.setAttribute("id","buttonsOne");
buttonOne.innerText = "Ok";
buttons.appendChild(buttonOne);

let buttonTwo = document.createElement("button");
buttonTwo.setAttribute("onClick","button()");
buttonTwo.setAttribute("id","buttonsTwo");
buttonTwo.innerText = "Cancel";
buttons.appendChild(buttonTwo);

<<<<<<< Updated upstream
function checkButton() {
let users = document.getElementById("label");
if (users == "Lawnmower Man"){
	alert("hey");
}
}

// let user = document.createElement("div");
// user.setAttribute("id","users");
// dialogs.appendChild(user);

// let pas = document.createElement("div");
// pas.setAttribute("id","pass");
// dialogs.appendChild(pas);

// function checkButton() {
// 	if ("Lawnmower Man" == user) {
// 		alert("Hey");
// 	}
// }
=======
function checkButton(){
	let user = document.getElementsByTagName("input");
	let pass = document.getElementsByTagName("input");
	const boxes = document.getElementsByClassName("box");
	if (user = "Lawnmower Man"){
		if (pass = "7.3942"){
			element.classList.remove(boxes);
		}
	}
}

// alert(user[0].value);
// alert(user[1].value);
>>>>>>> Stashed changes
