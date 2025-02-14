import styled from '@emotion/styled';

import { FontSize, FontWeight } from '@/styles/vars';

export const HeaderWrapper = styled.header`
	padding: 12px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 24px;
`;

export const Heading = styled.h1`
	font-size: ${FontSize.L}px;
	font-weight: ${FontWeight.bold};
`;
