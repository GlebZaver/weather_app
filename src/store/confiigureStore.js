import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { rootReducer } from "./reducers";

import mySaga from "../modules/redux/saga";

export default function configureAppStore(preloadedState) {
	const sagaMiddleware = createSagaMiddleware();

	const middleware = [sagaMiddleware];

	const reducer = {
		...rootReducer,
	};

	const store = configureStore({
		reducer,
		devTools: process.env.NODE_ENV !== "production",
		preloadedState,
		middleware,
	});

	sagaMiddleware.run(mySaga);

	return store;
}
