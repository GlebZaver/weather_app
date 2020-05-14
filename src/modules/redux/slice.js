import { createSlice } from "@reduxjs/toolkit";

const weatherState = {
	isFetching: false,
	information: "",
	error: "",
};

const weatherSlice = createSlice({
	name: "WHEATHER",
	initialState: weatherState,
	reducers: {
		weatherRequest: (state) => {
			state.isFetching = true;
		},
		weatherSuccess: (state, action) => {
			const inf = Object.keys(action.payload).map((weatherData) => {
				return action.payload[weatherData];
			});
			state.information = inf;
			state.error = "";

			state.isFetching = false;
		},
		weatherError: (state, action) => {
			const { message } = action.payload;
			state.error = [message];
			state.information = "";

			state.isFetching = false;
		},
	},
});

export const {
	weatherRequest,
	weatherSuccess,
	weatherError,
} = weatherSlice.actions;

const weatherSliceReducer = weatherSlice.reducer;

export { weatherSliceReducer };
