import styled from '@emotion/styled';

import { Color, FontSize, FontWeight } from '@/styles/vars';

export const HiddenInput = styled.input`
	display: none;
`;

export const Label = styled.label`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	text-align: center;
	flex-direction: column;
	gap: 4px;

	border-radius: 4px;
	border: 1px dashed ${Color.secondary};
`;

export const LabelTitle = styled.p`
	font-size: ${FontSize.M}px;
	font-weight: ${FontWeight.semibold};
`;

export const LabelInfo = styled.p`
	font-size: ${FontSize.S}px;
	font-weight: ${FontWeight.reg};
	color: ${Color.secondary};
`;

export const FileWrapper = styled.div`
	position: relative;
	width: min-content;
	display: inline-flex;
`;

export const DeleteButton = styled.button`
	position: absolute;
	top: 0;
	left: 0;

	display: inline-flex;

	border-radius: 4px;
	background: ${Color.red};
	padding: 2px;
`;
