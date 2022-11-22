import { useState } from "react";
import styled from "styled-components";
import forca0 from "../../assets/forca0.png";
import forca1 from "../../assets/forca1.png";
import forca2 from "../../assets/forca2.png";
import forca3 from "../../assets/forca3.png";
import forca4 from "../../assets/forca4.png";
import forca5 from "../../assets/forca5.png";
import forca6 from "../../assets/forca6.png";
import { words } from "../../Common/database";

export default function Game({
	word,
	setWord,
	errorCounter,
	setErrorCounter,
	selectedLetters,
	setSelectedLetters,
	winGame,
}) {
	const [lossGame, setLossGame] = useState(false);
  console.log(word)

	function sortWord() {
		setErrorCounter(0);
		setSelectedLetters([]);
		words.sort(() => Math.random() - 0.5);
		const splittedWord = words[0].split("");
		setWord(splittedWord);
	}

	function handleImage() {
		if (lossGame) return forca6;
		switch (errorCounter) {
			case 0:
				return forca0;
			case 1:
				return forca1;
			case 2:
				return forca2;
			case 3:
				return forca3;
			case 4:
				return forca4;
			case 5:
				return forca5;
			default:
				setLossGame(true);
				return forca6;
		}
	}

	return (
		<Wrapper>
			<img src={handleImage()} alt="hangmanImage" />
			<aside>
				<button onClick={sortWord}>Escolher Palavra</button>
				{word.length === 0 ? (
					""
				) : (
					<UnknownWord lossGame={lossGame} winGame={winGame}>
						{word.map((letter) =>
							selectedLetters.find((element) => element === letter) ||
							lossGame ? (
								<span>{letter}</span>
							) : (
								<p>_</p>
							)
						)}
					</UnknownWord>
				)}
			</aside>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: 40px;

	aside {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	img {
		width: 300px;
	}

	button {
		width: 200px;
		height: 60px;
		background-color: #27ae60;
		border: none;
		border-radius: 8px;
		color: #ffffff;
		font-weight: 700;
		font-size: 20px;
	}
`;

const UnknownWord = styled.div`
	display: flex;
	gap: 10px;
	justify-content: flex-end;

	> span,
	p {
		font-family: "Noto Sans", sans-serif;
		font-size: 50px;
		font-weight: 700;
		color: ${(props) =>
			props.lossGame ? "#FF0000" : props.winGame ? "#27AE60" : "#000000"};
	}
`;
