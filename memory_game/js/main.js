console.log("Up and running");

var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];
var cardOne = cards[0];
cardsInPlay.push(cardOne);
console.log("User flipped " + cardOne);

var cardTwo = cards[1];
cardsInPlay.push(cardTwo);
console.log("User flipped " + cardTwo);

var checkCards = cardsInPlay.length;
if (checkCards === 2) {
	console.log("Correct"); 
	} else {
		console.log("Pick Again");
	}

var equalityCheck;
if (cardsInPlay[0] === cardsInPlay[1]) {
	alert("You found a match!");
} else {
	alert("Sorry, please try again.")
}
