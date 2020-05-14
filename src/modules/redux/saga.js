import { put, takeLatest } from "redux-saga/effects";

import { weatherRequest, weatherError, weatherSuccess } from "./slice";
import { weatherData } from "./normalizer";
import { getRequest } from "./api";

function* weatherSaga({ payload: { data } }) {
	try {
		const response = yield getRequest(data);
		const weather = weatherData(response);

		yield put(weatherSuccess(weather));
	} catch (error) {
		yield put(weatherError(error.response.data));
	}
}

function* mySaga() {
	yield takeLatest(weatherRequest, weatherSaga);
}

export default mySaga;
