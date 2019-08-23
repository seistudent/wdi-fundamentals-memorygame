console.log("Up and running");

var cards = ["Queen", "Queen", "King", "King"];
var cardsInPlay = [];

function checkForMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
  		console.log("You found a match!");
	} else {
  		console.log("Sorry, try again.");
	}
};

function flipCard (cardId) {
	
	console.log("User flipped " + cards[cardId]);
	cardsInPlay.push(cards[cardId])

	/*var checkCards = cardsInPlay.length;
	if (checkCards === 2) {
		console.log("Correct"); 
		} else {
			console.log("Pick Again");
		}*/

	checkForMatch();
};

flipCard(0);
flipCard(2);
