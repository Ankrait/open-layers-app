import { SVGProps } from 'react';

import { Color } from '@/styles/vars';

const CloseIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg
		width={24}
		height={24}
		viewBox="0 0 24 24"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		{...props}>
		<path
			d="M6 18L18 6M6 6L18 18"
			stroke={Color.main}
			strokeWidth={1.5}
			strokeLinecap="round"
			strokeLinejoin="round"
		/>
	</svg>
);
export default CloseIcon;
