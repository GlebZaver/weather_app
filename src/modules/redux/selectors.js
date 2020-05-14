import { createSelector } from "@reduxjs/toolkit";

const weatherSelector = (state) => state.weather;

export const weatherFetchingSelector = createSelector(
	weatherSelector,
	(weather) => weather.isFetching,
);

export const weatherInfSelector = createSelector(
	weatherSelector,
	(weather) => weather.information,
);

export const weatherErrorSelector = createSelector(
	weatherSelector,
	(weather) => weather.error,
);
