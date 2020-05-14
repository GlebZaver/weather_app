import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Field } from "formik";

import { Button, TextFieldForm } from "../../components";

import { inputValues, weatherSchema } from "./formsData";

import {
	weatherInfSelector,
	weatherFetchingSelector,
	weatherErrorSelector,
} from "../redux/selectors";
import { weatherRequest } from "../redux/slice";

import {
	PageWrapper,
	Header,
	Summary,
	Description,
	FormContainer,
	Form,
	FormTitle,
	FieldControl,
	ButtonControl,
	Weather,
	ErrorContainer,
} from "./WeatherPageStyles";

function WeatherPage() {
	const dispatch = useDispatch();

	const isFetching = useSelector(weatherFetchingSelector);
	const informaton = useSelector(weatherInfSelector);
	const errorData = useSelector(weatherErrorSelector);

	const handleSubmitButton = (data) => {
		dispatch(weatherRequest({ data }));
	};

	const [...inf] = informaton;
	const inform = inf.map((weatherInf) => {
		return <Weather key={`weather-data-${weatherInf}`}>{weatherInf}</Weather>;
	});

	const [...err] = errorData;
	const error = err.map((weatherError) => {
		return (
			<ErrorContainer key={`weather-error-${weatherError}`}>
				{weatherError}
			</ErrorContainer>
		);
	});

	return (
		<PageWrapper>
			<Header>
				<Summary>Weather Service</Summary>
				<Description>Enter city name to explorer current weather</Description>
			</Header>
			<FormContainer>
				<Formik
					enableReinitialize
					initialValues={inputValues}
					validationSchema={weatherSchema}
					onSubmit={handleSubmitButton}
				>
					{({ handleSubmit, isValid }) => (
						<Form onSubmit={handleSubmit}>
							<FormTitle>Enter City Name</FormTitle>
							<FieldControl>
								<Field
									name="city"
									label="City Name"
									component={TextFieldForm}
									placeholder="Enter"
								/>
							</FieldControl>
							{inform}
							{error}
							<ButtonControl>
								<Button
									text="Get Weather"
									disabled={isFetching || !isValid}
									isFetching={isFetching}
								/>
							</ButtonControl>
						</Form>
					)}
				</Formik>
			</FormContainer>
		</PageWrapper>
	);
}

export default WeatherPage;
