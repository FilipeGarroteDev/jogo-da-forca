import Game from "../Game/Game";
import { Reset } from "../../Common/Reset.js";
import { GlobalStyle } from "../../Common/GlobalStyle.js";
import Letters from "../Letters/Letters";
import Guess from "../Guess/Guess";
import { useState } from "react";
import { HangmanContext } from "../../Contexts/hangmanContext";

function App() {
	const [word, setWord] = useState([]);
	const [errorCounter, setErrorCounter] = useState(0);
	const [selectedLetters, setSelectedLetters] = useState([]);
	const [winGame, setWinGame] = useState(false);
	const [lossGame, setLossGame] = useState(false);
	const [isDisabled, setIsDisabled] = useState(false);

	return (
		<HangmanContext.Provider
			value={{
				word,
				setWord,
				errorCounter,
				setErrorCounter,
				selectedLetters,
				setSelectedLetters,
				winGame,
				setWinGame,
				lossGame,
				setLossGame,
				isDisabled,
				setIsDisabled,
			}}
		>
			<Reset />
			<GlobalStyle />
			<Game />
			<Letters />
			<Guess />
		</HangmanContext.Provider>
	);
}

export default App;
