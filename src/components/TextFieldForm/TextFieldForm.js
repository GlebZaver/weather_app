import React from "react";
import PropTypes from "prop-types";
import { getIn } from "formik";

import {
	FormErrorText,
	TextField,
	FormTextFieldErrorContainer,
} from "./TextFieldFormStyle";

function TextFieldForm({ field, form: { errors, touched }, ...props }) {
	const error = getIn(errors, field.name);
	const touch = getIn(touched, field.name);

	const isError = !!error && !!touch;

	return (
		<>
			<TextField error={isError} {...field} {...props} />
			<FormTextFieldErrorContainer>
				{error && touch && <FormErrorText>{error}</FormErrorText>}
			</FormTextFieldErrorContainer>
		</>
	);
}

TextFieldForm.propTypes = {
	field: PropTypes.object.isRequired,
	form: PropTypes.object.isRequired,
};

export default TextFieldForm;
