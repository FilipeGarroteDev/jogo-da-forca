import Game from "../Game/Game";
import { Reset } from "../../Common/Reset.js";
import { GlobalStyle } from "../../Common/GlobalStyle.js";

function App() {
	return (
		<>
			<Reset />
			<GlobalStyle />
			<Game />
		</>
	);
}

export default App;
