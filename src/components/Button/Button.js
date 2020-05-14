import React, { memo } from "react";
import PropTypes from "prop-types";

import { SubmitButton, Spinner } from "./ButtonStyle";

function Button({ isFetching, text, disabled }) {
	return (
		<SubmitButton disabled={disabled}>
			{isFetching ? <Spinner /> : text}
		</SubmitButton>
	);
}

Button.defaultProps = {
	text: "Submit",
};

Button.propTypes = {
	isFetching: PropTypes.bool.isRequired,
	text: PropTypes.string,
	disabled: PropTypes.bool.isRequired,
};

export default memo(Button);
