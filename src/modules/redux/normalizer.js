const weatherData = (response) => {
	const temperature = response.data.main.temp;
	const visibility = response.data.visibility;
	const description = response.data.weather
		.map((weatherObj) => {
			return weatherObj.description;
		})
		.toString();

	return {
		description: "Description: " + description,
		temperature: "Temperature: " + temperature + "°F",
		visibility: "Visibility: " + visibility,
	};
};

export { weatherData };
