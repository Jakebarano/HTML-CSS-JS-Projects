function tempConvert() {
	// This line grabs the user input from the input with the id numDegrees
	let fahrenheit = document.getElementById("numDegrees").value;

	if (isNaN(fahrenheit)) {
		window.alert("Not a number!");
		return;
	}

	// Do the actual calculation using the fahrenheit variable (the user input)
	// (32°F − 32) × 5/9

	let celsius = (fahrenheit - 32) * 5/9;

	// This line inserts the celsius variable into the HTML document
	document.getElementById("celsiusAnswer").innerHTML = celsius + " Degrees";
}

// Random number between 0 and 99
let answer = Math.floor(Math.random() * (100));
function guess() {
	let userGuess = document.getElementById("guessNum").value;
	if (isNaN(userGuess)) {
		window.alert("Not a number!");
		return;
	}
	let report = "Nothing Yet";

	// YOU FILL IN HERE
	// Report back to the user by filling in whether
	// the guess is too high, too low, or correct
	// in the variable report.

	if(userGuess > answer)
	{
		report = "Too high";
	}
	if(userGuess < answer)
	{
		report = "Too low";
	}
	if(userGuess == answer)
	{
		report = "Correct!";
	}

	document.getElementById("guessResponse").innerHTML = report;
}

function generateMultiplicationTable() {
	let tableMax = Number(document.getElementById("tableMax").value);
	if (isNaN(tableMax)) {
		window.alert("Not a number!");
		return;
	}

	let tableHTML = "<table>";

	// YOU FILL IN HERE
	// Use an outer loop and an inner loop.
	// add a row by using tableHTML += "<tr>";
	// and a cell using tableHTML += "<td>";
	// remember to also close all of your tags

	for (let i = 1; i <= tableMax; i++) {
		tableHTML += "<tr>";
		for (let j = 1; j <= tableMax; j++) {
			tableHTML += "<td>";
			tableHTML += i * j;
			tableHTML += "</td>";
		}
		tableHTML += "</tr>";
	}

	tableHTML += "</table>";

	document.getElementById("multiplicationTable").innerHTML = tableHTML;
}
