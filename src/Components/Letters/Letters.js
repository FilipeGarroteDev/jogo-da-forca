import { useContext } from "react";
import styled from "styled-components";
import { alphabet } from "../../Common/database";
import { HangmanContext } from "../../Contexts/hangmanContext";

export default function Letters() {
	const { selectedLetters } = useContext(HangmanContext);
	return (
		<Keyboard>
			{alphabet.map((letter) => (
				<LetterBox
					isClicked={
						selectedLetters.find((element) => element === letter) ? true : false
					}
					letter={letter}
				/>
			))}
		</Keyboard>
	);
}

function LetterBox({ letter, isClicked }) {
	const {
		word,
		errorCounter,
		setErrorCounter,
		selectedLetters,
		setSelectedLetters,
		setWinGame,
		isDisabled,
		setIsDisabled,
	} = useContext(HangmanContext);
	function selectLetter() {
		if (word.length === 0 || isClicked || isDisabled) return;
		setSelectedLetters([...selectedLetters, letter]);
		const hasLetter = word.find((element) => element === letter);
		if (!hasLetter) {
			setErrorCounter(errorCounter + 1);
		}
		setTimeout(verifyWin, 5);
	}

	function verifyWin() {
		if (document.querySelectorAll("span").length === word.length) {
			setWinGame(true);
			setIsDisabled(true);
		}
	}

	return (
		<Letter
			wordLength={word.length}
			isClicked={isClicked}
			onClick={selectLetter}
			isDisabled={isDisabled}
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
		props.wordLength === 0 || props.isClicked || props.isDisabled
			? "#9FAAB5"
			: "#e1ecf4"};
	color: ${(props) =>
		props.wordLength === 0 || props.isClicked || props.isDisabled
			? "#798A9F"
			: "#7aa7c7"};
	font-size: 16px;
	font-weight: 700;
`;
