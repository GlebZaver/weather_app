import styled from "styled-components";
import { TextField as MaterialUITextField } from "@material-ui/core";

import { typography, colors, space, breakpoints } from "../../styles";

export const TextField = styled(MaterialUITextField).attrs({
	InputLabelProps: {
		shrink: true,
	},
})`
	width: 100%;

	&.MuiFormControl-root {
		input:-webkit-autofill,
		input:-webkit-autofill:hover,
		input:-webkit-autofill:focus {
			box-shadow: 0 0 0px 1000px ${colors.WHITE} inset;
		}
	}

	.MuiInputBase-root {
		font-family: ${typography.font.TEXT};
		font-size: ${typography.size.XXS};
		color: ${colors.PRIMARY};
	}

	.MuiInput-underline,
	.MuiInput-underline:hover:not(.Mui-disabled) {
		&:before,
		&:after {
			border-bottom: 2px solid ${colors.OUTLINES};
			transition: 0.1s ease-out;
		}
	}

	.MuiInput-underline.Mui-disabled:before {
		border-bottom: 1px solid ${colors.OUTLINES};
	}

	.MuiInput-underline.Mui-error,
	.MuiInput-underline.Mui-error:hover {
		&:before,
		&:after {
			border-bottom-color: ${colors.ERROR};
		}
	}

	label {
		font-family: ${typography.font.TEXT};
		font-size: ${typography.size.XXS};
		color: ${colors.PRIMARY};
	}

	.MuiFormLabel-root {
		&.Mui-error,
		&.Mui-focused {
			color: ${colors.PRIMARY};
		}
	}

	.MuiInputLabel-shrink {
		transform: none;
		width: 100%;
		text-align: ${(props) => (props.center ? "center" : "null")};
	}

	input {
		height: 36px;
		padding: 0;
		text-align: ${(props) => (props.center ? "center" : "null")};

		&::placeholder {
			color: ${colors.SECONDARY_TEXT};
			text-align: ${(props) => (props.center ? "center" : "null")};
		}
	}

	@media (min-width: ${breakpoints.SM}) {
		.MuiInputBase-root {
			font-size: ${typography.size.SM};
		}

		label {
			font-size: ${typography.size.SM};
		}

		input {
			height: 40px;
			padding: ${space.XXS} 0 0 0;
		}
	}
`;

export const FormTextFieldErrorContainer = styled.div`
	height: 20px;
`;

export const FormErrorText = styled.p`
	margin: 0;
	padding: 0;
	display: flex;
	align-items: center;
	font-style: normal;
	line-height: normal;
	color: ${colors.WHITE};
	padding-top: 5px;
	font-family: ${typography.font.TEXT};
	font-size: ${typography.size.XXS};
	color: ${colors.ERROR};

	@media (max-width: ${breakpoints.SM}) {
		font-size: ${typography.size.XXS};
	}

	@media (min-width: ${breakpoints.MD}) {
		font-size: ${typography.size.SM};
	}
`;
