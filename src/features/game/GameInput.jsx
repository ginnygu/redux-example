import { useState } from "react";
import { fetchCreateGame } from "../game/gameSlice";
import { useDispatch } from "react-redux";

function GameInput() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const dispatch = useDispatch();
	const handleOnSubmit = () => {
		const newBody = {
			title: firstName,
			description: lastName,
		};
		dispatch(fetchCreateGame(newBody));
		console.log("hello from submit");
	};
	return (
		<div className="App">
			<input
				type="text"
				placeholder="first name"
				value={firstName}
				onChange={(e) => setFirstName(e.target.value)}
			/>
			<br />
			<input
				type="text"
				placeholder="last name"
				value={lastName}
				onChange={(e) => setLastName(e.target.value)}
			/>
			<br />
			<input
				type="email"
				placeholder="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<br />
			<button type="submit" onClick={handleOnSubmit}>
				Submit
			</button>
		</div>
	);
}
export default GameInput;
