// setting the score to 0

var userScore = 0;
var won = 0;
var lost = 0;

// defining the values of the crystals

var num1 = Math.floor(Math.random()*10+1);
var num2 = Math.floor(Math.random()*10+1);
var num3 = Math.floor(Math.random()*10+1);
var num4 = Math.floor(Math.random()*10+1);

console.log("num1 = " + num1);
console.log("num2 = " + num2);
console.log("num3 = " + num3);
console.log("num4 = " + num4);

// to make sure each crystal has different vaue
if (num1 == num2) {
	num1 = Math.floor(Math.random()*10+1);
}

else if (num2 == num3) {
	num3 = Math.floor(Math.random()*10+1);
}

else if (num3 == num4) {
	num3 = Math.floor(Math.random()*10+1);
}

else if (num4 == num1) {
	num4 = Math.floor(Math.random()*10+1);
}

else if (num2 == num4) {
	num4 = Math.floor(Math.random()*10+1);
}

else if(num1 == num3) {
	num3 = Math.floor(Math.random()*10+1);
}

console.log("new num1 = " + num1);
console.log("new num2 = " + num2);
console.log("new num3 = " + num3);
console.log("new num4 = " + num4);


// to select a random number at the start of the game

var random = Math.floor(Math.random()*101+19);

$(document).ready(function(){
	$("#totalNumber").text(random);
});

console.log(random);


// red crystal
$("#red").on("click" , function(){
	userScore = userScore + num1;
	console.log("New userScore = " + userScore);
	$("#totalScore").text(userScore);
	if (userScore == random){
		win();
	}
	else if (userScore > random){
		loss();
	}

})

// blue crystal
$("#blue").on("click", function(){
	userScore = userScore +num2;
	console.log("New userScore = " + userScore);
	$("#totalScore").text(userScore);
	if (userScore == random) {
		win();
	}

	else if (userScore > random) {
		loss();
	}
})

// purple crystal 
$("#purple").on("click", function(){
	userScore = userScore +num3;
	console.log("New userScore = " + userScore);
	$("#totalScore").text(userScore);
	if (userScore == random) {
		win();
	}

	else if (userScore > random) {
		loss();
	}
})

// green crystal 
$("#green").on("click", function(){
	userScore = userScore +num4;
	console.log("New userScore =" + userScore);
	$("#totalScore").text(userScore);
	if (userScore == random) {
		win();
	}

	else if (userScore > random) {
		loss();
	}
})


//what happens when you win

function win(){
	alert("You won!");
	won++;
	$("#totalWin").text(won);
	restart();
}

//what happens when you lose

function loss() {
	alert("You lose!");
	lost++;
	$("#totalLoss").text(lost);
	restart();
}


//restart the game

function restart() {

	num1 = Math.floor(Math.random()*11+1);
	num2 = Math.floor(Math.random()*11+1);
	num3 = Math.floor(Math.random()*11+1);
	num4 = Math.floor(Math.random()*11+1);
	random = Math.floor(Math.random()*101+19);
	console.log(random);
	$("#totalNumber").text(random);
	userScore = 0;
	$("#totalScore").text(userScore);
}



