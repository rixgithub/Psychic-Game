// ******************Variables**************
var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];

// computer chooses random letter
var randomLetter = letters[Math.floor(Math.random() * letters.length)];

// *********FUNCTIONS*********************

var reset = function() {
	guessesLeft = 9;
	guessesSoFar = [];
}


// ***************MAIN PROCESS*******************
// user presses key
document.onkeyup = function(event) {
	
	// user input will be string and lowercase
	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
		
		if (guessesLeft > 0) {
			if (userGuess === randomLetter) {
				wins++;
				document.querySelector("#wins").innerHTML = "Wins: " + wins;
				reset();
		}

		else if (guessesLeft === 0){
				losses++;
				document.querySelector("#losses").innerHTML = "Losses: " + losses;
				reset();
		}

};
// computer chooses random letter
// user guesses a letter
// 	if userGuess = random letter
// 		wins go up by one
// 		reset game (guesses left goes back to 9) (guesses so far back to empty)
// 	 else if userGuess != random letter 
// 		losses go up by one
// 		reset game (guesses left goes back to 9) (guesses so far goes tp empty)
// 