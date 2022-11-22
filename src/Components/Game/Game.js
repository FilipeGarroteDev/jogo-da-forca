import styled from "styled-components";
import initialImage from "../../assets/forca0.png";

export default function Game() {
	return (
		<Wrapper>
			<img src={initialImage} alt="hangmanImage" />
			<aside>
				<button>Escolher Palavra</button>
				<div>_ _ _ _ _ _ _ _ _</div>
			</aside>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	display: flex;
	justify-content: space-between;
	margin-bottom: 70px;

	aside {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		align-items: flex-end;
	}

	img {
		width: 400px;
		height: 466px;
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

	> div {
		font-weight: 700;
		font-size: 50px;
	}
`;
