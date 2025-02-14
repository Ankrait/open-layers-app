import styled from '@emotion/styled';

import { Color, FontSize, FontWeight } from '@/styles/vars';

export const Wrapper = styled.div`
	position: fixed;
	inset: 0;
	background: ${Color.shadow};

	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Content = styled.div`
	max-width: 320px;
	width: 100%;

	padding: 20px;
	border-radius: 12px;

	display: flex;
	flex-direction: column;
	gap: 10px;

	background: ${Color.bg};
`;

export const Header = styled.div`
	display: flex;
	justify-content: space-between;
	gap: 24px;
`;

export const Title = styled.p`
	font-size: ${FontSize.L}px;
	font-weight: ${FontWeight.med};
`;

export const ButtonsWrapper = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	gap: 8px;
`;
