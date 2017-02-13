// ******************Variables**************
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// starting values
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// computer chooses random letter from array
var randomLetter = letters[Math.floor(Math.random() * letters.length)];

// *********FUNCTIONS*********************

function reset() {
	guessesLeft = 9;
	displayGuessesLeft()
	guessesSoFar = [];
	// NEED NEW RANDOM LETTER???????????????????????
	var randomLetter = letters[Math.floor(Math.random() * letters.length)];
}

function displayGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function displayGuessesSoFar() {
	document.querySelector("#yourGuessesSoFar").innerHTML = "Your Guesses so far: " + guessesSoFar.push(', ');
}

function wrongGuess() {
	guessesLeft--;
	displayGuessesLeft();
	// Need to fill empty array with wrong guesses???????????????????????
	// guessesSoFar.push(userGuess);
}

displayGuessesLeft();

// ***************MAIN PROCESS*******************
// user presses key
document.onkeyup = function(event) {	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
			console.log(userGuess);
		
		if ((guessesLeft > 0) && (userGuess === randomLetter)) {
			wins++;
			document.querySelector("#wins").innerHTML = "Wins: " + wins;
			alert("You are a Pyschic!");
			reset();
		}
		if ((guessesLeft > 0) && (userGuess !== randomLetter)) {
			wrongGuess();
		}
		if (guessesLeft === 0) {
			losses++;
			document.querySelector("#losses").innerHTML = "Losses: " + losses;
			alert("Psychics aren't real!");
			displayGuessesLeft();
			reset();
		}
}
// computer chooses random letter
// user guesses a letter
// 	if userGuess = random letter
// 		wins go up by one
// 		reset game (guesses left goes back to 9) (guesses so far back to empty)
// 	 else if userGuess != random letter and guesses left > 0
//    	guesses left--
// 		else guesses left = 0 we lose
// 		losses go up by one
// 		reset game (guesses left goes back to 9) (guesses so far goes tp empty)
// 