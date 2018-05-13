var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var dispMessage = document.querySelector("#message");
var h1 = document.querySelector("h1");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

var resetBtn = document.querySelector("#reset");
var pickedColor = selectRandom();
colorDisplay.textContent = pickedColor;

easyBtn.addEventListener("click" , function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = selectRandom();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		}
		else{
			squares[i].style.display = "none";
		}
	}

});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = selectRandom();
	colorDisplay.textContent = pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}	
});


resetBtn.addEventListener("click" , function(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick new color
	pickedColor = selectRandom();
	//Display new color
	colorDisplay.textContent = pickedColor;

	dispMessage.textContent = "";
	this.textContent = "New Colors";

	//Assign new colors to square
	for(i=0;i<squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});



for(var i=0; i<squares.length; i++){
	//Add color to each square
	squares[i].style.background = colors[i];

	//Add listener to each sqaure
	squares[i].addEventListener("click" , function(){
		//Compare the selected and picked color
		var clickedColor = this.style.background;
		console.log( pickedColor, clickedColor);
		if(pickedColor === clickedColor){
			dispMessage.textContent = "Correct";
			changeAllColor(clickedColor);
			h1.style.background = clickedColor;
			resetBtn.textContent = "Play Again?";
		}
		else{
			//alert("Wrong!!!");
			this.style.background = "#232323";
			dispMessage.textContent = "Try Again";
		}

	});
}

function changeAllColor(color){
	for(i=0; i<squares.length; i++){
		{
			squares[i].style.background = color;
		}
	}
}

function selectRandom(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	var arr = [];

	for(i=0;i<num;i++){
		arr.push(randomColor());
	}

	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);
	
	return("rgb(" + r + ", " + g + ", " + b + ")");
}














