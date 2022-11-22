import Game from "../Game/Game";
import { Reset } from "../../Common/Reset.js";
import { GlobalStyle } from "../../Common/GlobalStyle.js";
import Letters from "../Letters/Letters";
import Guess from "../Guess/Guess";
import { useState } from "react";

function App() {
	const [word, setWord] = useState([]);
	const [errorCounter, setErrorCounter] = useState(0);
	const [selectedLetters, setSelectedLetters] = useState([]);
	const [winGame, setWinGame] = useState(false);
	const [lossGame, setLossGame] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	return (
		<>
			<Reset />
			<GlobalStyle />
			<Game
				word={word}
				setWord={setWord}
				errorCounter={errorCounter}
				selectedLetters={selectedLetters}
				setErrorCounter={setErrorCounter}
				setSelectedLetters={setSelectedLetters}
				winGame={winGame}
				lossGame={lossGame}
				setLossGame={setLossGame}
				setIsDisabled={setIsDisabled}
				setWinGame={setWinGame}
			/>
			<Letters
				word={word}
				setErrorCounter={setErrorCounter}
				errorCounter={errorCounter}
				selectedLetters={selectedLetters}
				setSelectedLetters={setSelectedLetters}
				setWinGame={setWinGame}
				isDisabled={isDisabled}
			/>
			<Guess
				word={word}
				setWinGame={setWinGame}
				setLossGame={setLossGame}
				setIsDisabled={setIsDisabled}
				isDisabled={isDisabled}
			/>
		</>
	);
}

export default App;
