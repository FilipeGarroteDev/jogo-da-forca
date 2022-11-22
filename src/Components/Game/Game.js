import { useState } from "react";
import styled from "styled-components";
import initialImage from "../../assets/forca0.png";
import { words } from "../../Common/database";

export default function Game() {
	const [word, setWord] = useState([]);

	function sortWord() {
		words.sort(() => Math.random() - 0.5);
		const splittedWord = words[0].split("");
		setWord(splittedWord);
	}

	return (
		<Wrapper>
			<img src={initialImage} alt="hangmanImage" />
			<aside>
				<button onClick={sortWord}>Escolher Palavra</button>
				{word.length === 0 ? (
					""
				) : (
					<UnknownWord>
						{word.map((element) => (
							<span>_</span>
						))}
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

	> span {
		font-family: "Noto Sans", sans-serif;
		font-size: 50px;
		font-weight: 700;
	}
`;
