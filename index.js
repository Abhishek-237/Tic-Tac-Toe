const arr = [ "X", "O", "X", "O", "X", "O", "X", "O", "X" ];

const box = { box1:1, box2:2, box3:3, box4:4, box5:5, box6:6, box7:7, box8:8, box9:9 };

const visited = { box1:0, box2:0, box3:0, box4:0, box5:0, box6:0, box7:0, box8:0, box9:0 };

var i = 0;


class Ui{

	constructor(){}

	// function for "X" and "O".
	xo(){

		if (i < 9 && visited[this.id] == 0){

			this.innerHTML = `<h1 class="mt-4 pt-3">${arr[i]}</h1>`;
			box[this.id] = arr[i];
			visited[this.id] = 1;
			i += 1;
			end.match();
			}
		}

	// function for the winner.
	displayWinner(){

		if (arr[i-1] === "X"){

			const w = document.getElementById("winner");
			w.style.visibility = "visible";
			w.innerHTML = "Player(1) Win";
		}
		else{

			document.getElementById("winner");
			const w = document.getElementById("winner")
			w.style.visibility = "visible";
			w.innerHTML = "Player(2) Win";
		}

		i = 9;
		document.getElementById("player1").style.visibility = "hidden";
		document.getElementById("player2").style.visibility = "hidden";

	}

	// function to reset the game.
	reset(){

		var j = 1;

		for (let x in box){
			box[x] = j;
			j += 1;
		}

		for (let y in visited){
			visited[y] = 0;
		}

		for (var z = 1; z <= 9; z++) {
			document.getElementById(`box${z}`).innerHTML = "";
		}

		i = 0;

		document.getElementById("winner").style.visibility = "hidden";
		document.getElementById("player1").style.visibility = "visible";
		document.getElementById("player2").style.visibility = "visible"

	}

}


class Game{

	constructor(){}

	// game logic function.
	match(){

		if (box["box1"] === box["box2"] && box["box2"] === box["box3"]){

			start.displayWinner();
			document.querySelector("#box1>h1").style.color = "green";
			document.querySelector("#box2>h1").style.color = "green";
			document.querySelector("#box3>h1").style.color = "green";

		}
		else if (box["box4"] === box["box5"] && box["box5"] === box["box6"]){

			start.displayWinner();
			document.querySelector("#box4>h1").style.color = "green";
			document.querySelector("#box5>h1").style.color = "green";
			document.querySelector("#box6>h1").style.color = "green";

		}
		else if	(box["box7"] === box["box8"] && box["box8"] === box["box9"]){

			start.displayWinner();
			document.querySelector("#box7>h1").style.color = "green";
			document.querySelector("#box8>h1").style.color = "green";
			document.querySelector("#box9>h1").style.color = "green";

		}
		else if	(box["box1"] === box["box4"] && box["box4"] === box["box7"]){

			start.displayWinner();
			document.querySelector("#box1>h1").style.color = "green";
			document.querySelector("#box4>h1").style.color = "green";
			document.querySelector("#box7>h1").style.color = "green";

		}
		else if	(box["box2"] === box["box5"] && box["box5"] === box["box8"]){

			start.displayWinner();
			document.querySelector("#box2>h1").style.color = "green";
			document.querySelector("#box5>h1").style.color = "green";
			document.querySelector("#box8>h1").style.color = "green";

		}
		else if	(box["box3"] === box["box6"] && box["box6"] === box["box9"]){

			start.displayWinner();
			document.querySelector("#box3>h1").style.color = "green";
			document.querySelector("#box6>h1").style.color = "green";
			document.querySelector("#box9>h1").style.color = "green";

		}
		else if	(box["box1"] === box["box5"] && box["box5"] === box["box9"]){

			start.displayWinner();
			document.querySelector("#box1>h1").style.color = "green";
			document.querySelector("#box5>h1").style.color = "green";
			document.querySelector("#box9>h1").style.color = "green";

		}
		else if	(box["box3"] === box["box5"] && box["box5"] === box["box7"]){

			start.displayWinner();
			document.querySelector("#box3>h1").style.color = "green";
			document.querySelector("#box5>h1").style.color = "green";
			document.querySelector("#box7>h1").style.color = "green";

		}
		else if (i === 9){

			const w = document.getElementById("winner");
			w.style.visibility = "visible"
			w.innerHTML = "Draw";

			document.getElementById("player1").style.visibility = "hidden";
			document.getElementById("player2").style.visibility = "hidden";

			for (var k = 1; k <= 9; k++) {
				document.querySelector(`#box${k}>h1`).style.color = "rgb(208, 17, 55)";
			}
		}
	}

}


const start = new Ui();
const end = new Game();
console.log(start,end);
document.getElementById("box1").addEventListener("click", start.xo);
document.getElementById("box2").addEventListener("click", start.xo);
document.getElementById("box3").addEventListener("click", start.xo);
document.getElementById("box4").addEventListener("click", start.xo);
document.getElementById("box5").addEventListener("click", start.xo);
document.getElementById("box6").addEventListener("click", start.xo);
document.getElementById("box7").addEventListener("click", start.xo);
document.getElementById("box8").addEventListener("click", start.xo);
document.getElementById("box9").addEventListener("click", start.xo);
document.getElementById("rematch").addEventListener("click", start.reset);
