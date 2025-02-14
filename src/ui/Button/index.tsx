import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { Color, FontSize, FontWeight } from '@/styles/vars';

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
	padding: 8px 12px;
	border-radius: 4px;

	font-size: ${FontSize.M}px;
	font-weight: ${FontWeight.med};

	${({ variant = 'primary' }) =>
		variant === 'primary'
			? css`
					background: ${Color.control_main};
					color: ${Color.control};
				`
			: css`
					background: ${Color.control};
					color: ${Color.main};
				`}

	&:disabled {
		opacity: 0.5;
	}
`;

export default Button;
