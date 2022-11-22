import Game from "../Game/Game";
import { Reset } from "../../Common/Reset.js";
import { GlobalStyle } from "../../Common/GlobalStyle.js";
import Letters from "../Letters/Letters";
import Guess from "../Guess/Guess";

function App() {
	return (
		<>
			<Reset />
			<GlobalStyle />
			<Game />
			<Letters />
			<Guess />
		</>
	);
}

export default App;
