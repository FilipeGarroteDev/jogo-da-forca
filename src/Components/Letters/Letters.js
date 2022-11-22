import styled from "styled-components";
import { alphabet } from "../../Common/database";

export default function Letters() {
	return (
		<Keyboard>
			{alphabet.map((letter) => (
				<LetterBox>{letter}</LetterBox>
			))}
		</Keyboard>
	);
}

const Keyboard = styled.section`
	max-width: 664px;
	display: flex;
	flex-wrap: wrap;
	gap: 12px;
	margin: auto auto 26px auto;
`;

const LetterBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 40px;
	height: 40px;
	border: 1px solid #7aa7c7;
	border-radius: 3px;
	background-color: #e1ecf4;
	color: #7aa7c7;
	font-size: 16px;
	font-weight: 700;
`;
