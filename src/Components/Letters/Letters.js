import { useState } from "react";
import styled from "styled-components";
import { alphabet } from "../../Common/database";

export default function Letters({
	word,
	setErrorCounter,
	errorCounter,
	selectedLetters,
	setSelectedLetters,
	setWinGame,
}) {
	return (
		<Keyboard>
			{alphabet.map((letter) => (
				<LetterBox
					letter={letter}
					word={word}
					setErrorCounter={setErrorCounter}
					errorCounter={errorCounter}
					selectedLetters={selectedLetters}
					setSelectedLetters={setSelectedLetters}
					setWinGame={setWinGame}
				/>
			))}
		</Keyboard>
	);
}

function LetterBox({
	letter,
	word,
	setErrorCounter,
	errorCounter,
	selectedLetters,
	setSelectedLetters,
	setWinGame,
}) {
	const [isClicked, setIsClicked] = useState(false);

	function selectLetter() {
		if (word.length === 0 || isClicked) return;
		setSelectedLetters([...selectedLetters, letter]);
		const hasLetter = word.find((element) => element === letter);
		if (!hasLetter) {
			setErrorCounter(errorCounter + 1);
		}
		setIsClicked(true);
		setTimeout(verifyWin, 50);
	}

	function verifyWin() {
    console.log(word.length)
    console.log(document.querySelectorAll("span").length)
		if (document.querySelectorAll("span").length === word.length) {
			console.log("deu");
			setWinGame(true);
		}
	}

	return (
		<Letter
			wordLength={word.length}
			isClicked={isClicked}
			onClick={selectLetter}
		>
			{letter}
		</Letter>
	);
}

const Keyboard = styled.section`
	max-width: 664px;
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	margin: auto auto 26px auto;
`;

const Letter = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border: 1px solid #7aa7c7;
	border-radius: 3px;
	background-color: ${(props) =>
		props.wordLength === 0 || props.isClicked ? "#9FAAB5" : "#e1ecf4"};
	color: ${(props) =>
		props.wordLength === 0 || props.isClicked ? "#798A9F" : "#7aa7c7"};
	font-size: 16px;
	font-weight: 700;
`;
