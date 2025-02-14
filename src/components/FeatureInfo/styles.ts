import styled from '@emotion/styled';

import { Color, FontWeight } from '@/styles/vars';

export const Wrapper = styled.div`
	padding: 6px;
	border-radius: 4px;

	background: ${Color.bg};
	pointer-events: none;
`;

export const Item = styled.div`
	display: grid;
	grid-template-columns: 100px 1fr;
`;

export const ItemTitle = styled.p`
	font-weight: ${FontWeight.semibold};
`;
