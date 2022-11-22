import styled from "styled-components";

export default function Guess() {
	return (
		<Wrapper>
			<h2>Já sei a palavra!</h2>
			<input></input>
			<button>Chutar</button>
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
	}

	> button {
		width: 100px;
		height: 40px;
		border: 1px solid #7aa7c7;
		border-radius: 3px;
		background-color: #e1ecf4;
		color: #7aa7c7;
		font-size: 16px;
		font-weight: 700;
	}
`;
