import axios from "axios";

export const getRequest = (data) => {
	const city = data.city;
	const id = "d3060d76760712047ad6f04117206ea9";
	const dataResult = axios.get(
		`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${id}`,
	);
	return dataResult;
};
