// ******************Variables**************
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

// starting values
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var newLetter = [];


// computer chooses random letter from array
// var randomLetter = letters[Math.floor(Math.random() * letters.length)];

// *********FUNCTIONS*********************

function reset() {
	guessesLeft = 9;
	displayGuessesLeft()
	guessesSoFar.length = 0;
	displayGuessesSoFar();
	//????????????? NEED NEW RANDOM LETTER???????????????????????
	newLetter.length = 0;
	generateLetter();
}

function generateLetter() {
	var randomLetter = letters[Math.floor(Math.random() * letters.length)];
	newLetter.push(randomLetter);
}

function displayGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function displayGuessesSoFar() {
	document.querySelector("#yourGuessesSoFar").innerHTML = "Your Guesses so far: " + guessesSoFar.join(" ");
}

function wrongGuess() {
	guessesLeft--;
	displayGuessesLeft();
	if (guessesLeft === 1) {
		alert("You have one more guess left!");
	}
}
// ************************************************




generateLetter();
console.log(newLetter);
displayGuessesLeft();

// ***************MAIN PROCESS*******************
// user presses key
document.onkeyup = function(event) {	
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		
		guessesSoFar.push(userGuess);
		displayGuessesSoFar();
		
		if ((guessesLeft > 0) && (userGuess === newLetter)) {
			wins++;
			document.querySelector("#wins").innerHTML = "Wins: " + wins;
			alert("You are a Pyschic!");
			reset();
		}
		if ((guessesLeft > 0) && (userGuess !== newLetter)) {
			wrongGuess();
		}
		if (guessesLeft === 0) {
			losses++;
			document.querySelector("#losses").innerHTML = "Losses: " + losses;
			alert("Psychics aren't real!");
			reset();
		}
}
// humanbraincode
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