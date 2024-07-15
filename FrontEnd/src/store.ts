import { configureStore, createSlice } from "@reduxjs/toolkit";
import GameState from "./interface/interface";

const initialState: GameState = {
    player1: 0,
    player2: 0,
    advantage: null,
    winner: null,
    playing: true,
    restart: false

}

const gameSlice = createSlice({
    name: "game",
    initialState,
    reducers: {
        playPause: (state) => {
            state.playing = !state.playing
        }
    }
})

export const { playPause } = gameSlice.actions;

const store = configureStore({
    reducer: {
        game: gameSlice.reducer,
    }
})
export type RootState = ReturnType<typeof store.getState>;
export default store