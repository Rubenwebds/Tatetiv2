const tablero = document.getElementById("container");
// posiciones actuales
let presionados = Array(9).fill(null);
// turnos
let turnoX = true;
let turnoO = false;
let endGame = false;
function editbutton(e) {
	// Chequear que no termino el juego
	if (endGame) {
		return;
	}
	const currentId = e.target.id;
	const estaPresionado = presionados[currentId] !== null;
	console.log(estaPresionado);
	if (estaPresionado) {
		// si esta presionado no hacemos nada
	} else if (!estaPresionado && turnoX) {
		e.target.innerText = "X";
		presionados[currentId] = "X";
	} else if (!estaPresionado && turnoO) {
		e.target.innerText = "O";
		presionados[currentId] = "O";
	}

	// cambio de turno

	turnoX = !turnoX;
	turnoO = !turnoO;

	const haGanado = () => {
		if (
			presionados[0] == presionados[1] &&
			presionados[0] == presionados[2] &&
			presionados[0]
		) {
			alert("You have won, press reset game to start over");
            endGame= true;
		} else if (
			presionados[3] == presionados[4] &&
			presionados[3] == presionados[5] &&
			presionados[3]
		) {
			alert("You have won, press reset game to start over");
            endGame= true;
		} else if (
			presionados[6] == presionados[7] &&
			presionados[6] == presionados[8] &&
			presionados[6]
		) {
			alert("You have won, press reset game to start over");
            endGame= true;
		} else if (
			presionados[0] == presionados[3] &&
			presionados[0] == presionados[6] &&
			presionados[0]
		) {
			alert("You have won, press reset game to start over");
            endGame= true;
		} else if (
			presionados[1] == presionados[4] &&
			presionados[1] == presionados[7] &&
			presionados[1]
		) {
			alert("You have won, press reset game to start over");
            endGame= true;
		} else if (
			presionados[2] == presionados[5] &&
			presionados[2] == presionados[8] &&
			presionados[2]
		) {
			alert("You have won, press reset game to start over");
            endGame= true;
		} else if (
			presionados[0] == presionados[4] &&
			presionados[0] == presionados[8] &&
			presionados[0]
		) {
			alert("You have won, press reset game to start over");
            endGame= true;
		} else if (
			presionados[2] == presionados[4] &&
			presionados[2] == presionados[6] &&
			presionados[2]
		) {
			alert("You have won, press reset game to start over");
            endGame= true;
		}
	};
	haGanado();
}

tablero.addEventListener("click", editbutton);