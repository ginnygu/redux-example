import logo from "./logo.svg";
import "./App.css";
import Game from "./features/game/Game";
import GameInput from "./features/game/GameInput";

function App() {
	return (
		<div className="App">
			<Game />
			<GameInput />
		</div>
	);
}

export default App;
