import { css } from '@emotion/react';

import { Color, FontSize, FontWeight } from './vars';

const fontsStyle = css`
	@font-face {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src:
			url('Inter-Regular.woff2?v=3.19') format('woff2'),
			url('Inter-Regular.woff?v=3.19') format('woff');
	}

	@font-face {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src:
			url('Inter-Medium.woff2?v=3.19') format('woff2'),
			url('Inter-Medium.woff?v=3.19') format('woff');
	}

	@font-face {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 600;
		font-display: swap;
		src:
			url('Inter-SemiBold.woff2?v=3.19') format('woff2'),
			url('Inter-SemiBold.woff?v=3.19') format('woff');
	}

	@font-face {
		font-family: 'Inter';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src:
			url('Inter-Bold.woff2?v=3.19') format('woff2'),
			url('Inter-Bold.woff?v=3.19') format('woff');
	}
`;

const nullificationStyles = css`
	* {
		margin: 0;
		padding: 0;
		border: 0;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
	}

	:focus,
	:active {
		outline: none;
	}

	a:focus,
	a:active {
		outline: none;
	}

	nav,
	footer,
	header,
	aside {
		display: block;
	}

	html,
	body {
		width: 100%;

		font-family: Inter, sans-serif;
		background: ${Color.bg};
		color: ${Color.main};
		font-size: ${FontSize.M}px;
		font-weight: ${FontWeight.reg};

		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		font-smooth: never;
		text-size-adjust: 100%;
	}

	input,
	button,
	textarea {
		font-family: inherit;
		overflow: hidden;
	}

	input::-ms-clear {
		display: none;
	}

	button {
		cursor: pointer;

		&:disabled {
			cursor: default;
		}
	}

	button::-moz-focus-inner {
		padding: 0;
		border: 0;
	}

	a,
	a:visited,
	a:hover {
		text-decoration: none;
	}

	img {
		vertical-align: top;
	}

	a,
	label {
		-webkit-tap-highlight-color: transparent;
	}

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		font-size: inherit;
		font-weight: inherit;
	}

	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td {
		margin: 0;
		padding: 0;

		border-collapse: separate;
		border: none;

		font: inherit;
		font-size: 100%;
		vertical-align: top;
	}

	table {
		border-spacing: 0;
		border-collapse: separate;
	}
`;

const global = [fontsStyle, nullificationStyles];

export default global;
