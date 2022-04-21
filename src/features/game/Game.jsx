import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	selectGameList,
	fetchGamesList,
	selectGameCreated,
	selectPriority,
} from "./gameSlice";

export default function Game() {
	const dispatch = useDispatch();
	//dispatch calls for the reducer functions
	const gamesList = useSelector(selectGameList);
	//useSelector takes in the state
	const priority = useSelector(selectPriority);

	useEffect(() => {
		dispatch(fetchGamesList());
	}, [dispatch]);
	return (
		<div>
			<select>
				<option>{priority}</option>
			</select>
			{gamesList.map((game) => {
				return (
					<div key={game._id}>
						<p>{game.title}</p>
						<p>{game.description}</p>
					</div>
				);
			})}
		</div>
	);
}
