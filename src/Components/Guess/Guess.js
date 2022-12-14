import { useContext, useState } from "react";
import styled from "styled-components";
import { HangmanContext } from "../../Contexts/hangmanContext";

export default function Guess() {
	const [guessedWord, setGuessedWord] = useState("");
	const { word, setWinGame, isDisabled, setLossGame, setIsDisabled } =
		useContext(HangmanContext);

	function handleWord(e) {
		setGuessedWord(e.target.value);
	}

	function guessAWord() {
		const jointedWord = word.join("");
		if (jointedWord === guessedWord) {
			setGuessedWord("");
			setWinGame(true);
			setIsDisabled(true);
		} else {
			setGuessedWord("");
			setLossGame(true);
			setIsDisabled(true);
		}
	}

	return (
		<Wrapper wordLength={word.length} isDisabled={isDisabled}>
			<h2>Já sei a palavra!</h2>
			<input
				disabled={word.length === 0 || isDisabled ? true : false}
				value={guessedWord}
				onChange={handleWord}
			></input>
			<button onClick={guessAWord}>Chutar</button>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 15px;

	> h2 {
		font-size: 20px;
		font-weight: 400;
	}

	> input {
		width: 350px;
		height: 40px;
		border: 1px solid #cccccc;
		border-radius: 3px;
		box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
		outline: none;
	}

	> button {
		width: 100px;
		height: 40px;
		border: 1px solid #7aa7c7;
		border-radius: 3px;
		background-color: ${(props) =>
			props.wordLength === 0 || props.isDisabled ? "#9FAAB5" : "#e1ecf4"};
		color: ${(props) =>
			props.wordLength === 0 || props.isDisabled ? "#798A9F" : "#7aa7c7"};
		font-size: 16px;
		font-weight: 700;
	}
`;
