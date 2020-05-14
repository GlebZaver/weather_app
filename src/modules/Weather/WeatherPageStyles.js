import styled from "styled-components";

import { space, colors, typography, breakpoints } from "../../styles";

export const PageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	height: 100%;
	width: 100%;
	padding: ${space.XL} ${space.XS} 0 ${space.XS};
	background-color: ${colors.PRIMARY};
`;

export const Header = styled.div`
	display: flex;
	flex-direction: column;
	align-self: center;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: min-content;
`;

export const Summary = styled.div`
	margin-bottom: ${space.XXS};
	text-align: center;
	font-size: ${typography.size.XL};
	font-weight: ${typography.font.TITLE};
	color: ${colors.WHITE};
`;

export const Description = styled.div`
	font-size: ${typography.size.MD};
	color: ${colors.WHITE};
	text-align: center;
`;

export const FormContainer = styled.div`
	display: flex;
	align-self: center;
	width: 100%;
	margin-top: ${space.XL};
	padding: ${space.LG};
	border: solid 1px ${colors.OUTLINES};
	border-radius: 4px;
	background-color: ${colors.WHITE};

	@media (min-width: ${breakpoints.MD}) {
		width: 500px;
		margin-top: ${space.XXL};
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	height: min-content;
	width: 100%;
	background-color: ${colors.WHITE};
`;

export const FormTitle = styled.div`
	align-self: center;
	text-align: center;
	font-size: ${typography.size.MD};
	font-weight: ${typography.font.TITLE};
	color: ${colors.PRIMARY};
`;

export const FieldControl = styled.div`
	width: 100%;
	margin: ${space.XXS} 0 5px 0;
`;

export const ButtonControl = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 50px;
	margin-top: ${space.XXS};
`;

export const Weather = styled.div`
	align-self: center;
	margin: 0 0 ${space.XXS} 0;
	text-align: center;
	font-size: ${typography.size.MD};
	font-weight: ${typography.font.TITLE};
	color: ${colors.INFO};
`;

export const ErrorContainer = styled.div`
	align-self: center;
	margin: 0 0 ${space.XXS} 0;
	text-align: center;
	font-size: ${typography.size.MD};
	font-weight: ${typography.font.TITLE};
	color: ${colors.ERROR};
`;
