import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchGamesList = createAsyncThunk("game/fetchGames", async () => {
	const response = await fetch(
		`http://localhost:3001/games/get-all-video-games`
	);
	const fetchedGames = response.json();
	return fetchedGames;
});
export const fetchCreateGame = createAsyncThunk(
	"game/createGames",
	async (createBody) => {
		console.log(createBody);
		const response = await fetch(`http://localhost:3001/games/create-game`, {
			method: "POST",
			body: JSON.stringify(createBody),
			headers: {
				"Content-Type": "application/json",
			},
		});
		const postResponse = response.json();
		return postResponse;
	}
);

export const selectGameList = (state) => state.game.gamesList;
export const selectGameCreated = (state) => state.game.gameCreated;
export const selectPriority = (state) => state.game.priority;

export const gameSlice = createSlice({
	name: "game",
	initialState: {
		gamesList: [],
		gameCreated: {},
		priority: "all",
	},
	reducers: {
		//functions that are not asynchronous
	},
	extraReducers: (builder) => {
		//functions that are asynchronous
		builder.addCase(fetchGamesList.fulfilled, (state, action) => {
			state.gamesList = action.payload;
		});
		builder.addCase(fetchCreateGame.fulfilled, (state, action) => {
			state.gameCreated = action.payload;
		});
	},
});

export default gameSlice.reducer;
