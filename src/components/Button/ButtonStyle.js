import styled from "styled-components";

import { CircularProgress, Button } from "@material-ui/core";

import { colors, typography, breakpoints } from "../../styles";

export const SubmitButton = styled(Button).attrs({
	type: "submit",
})`
	width: 100%;
	height: 100%;

	&.MuiButtonBase-root {
		opacity: ${(props) => (props.disabled ? 0.5 : 1)};
		padding: 0;
		border: none;
		border-radius: 4px;
		background-color: ${colors.BRAND_COLOR};
		font-family: ${typography.font.TITLE};
		font-size: ${typography.size.XS};
		font-weight: bold;
		font-stretch: normal;
		font-style: normal;
		line-height: normal;
		letter-spacing: normal;
		text-align: center;
		text-transform: none;
		color: ${colors.WHITE};

		&:hover {
			background-color: ${colors.BRAND_COLOR_HOVER};
		}

		&.MuiButton-root:hover.Mui-disabled {
			background-color: ${colors.BRAND_COLOR_HOVER};
		}

		&.Mui-disabled {
			opacity: 0.5;
			color: ${colors.WHITE};
		}
	}

	@media (min-width: ${breakpoints.MD}) {
		&.MuiButtonBase-root {
			font-size: ${typography.size.MD};
		}
	}
`;

export const Spinner = styled(CircularProgress).attrs({
	size: 20,
})`
	&.MuiCircularProgress-root {
		color: ${colors.WHITE};
	}
`;
