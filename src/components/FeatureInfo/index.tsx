import { FC, RefObject } from 'react';

import { FeatureType } from '@/common/types';

import { Item, ItemTitle, Wrapper } from './styles';

interface IFeatureInfo {
	info: FeatureType | null;
	ref: RefObject<HTMLDivElement | null>;
}

const FeatureInfo: FC<IFeatureInfo> = ({ info, ref }) => {
	return (
		<Wrapper ref={ref}>
			{info &&
				Object.keys(info).map((key) => {
					const value = info[key];

					if (typeof value !== 'string' && typeof value !== 'number') return;

					return (
						<Item key={key}>
							<ItemTitle>{key}</ItemTitle>
							<p>{value}</p>
						</Item>
					);
				})}
		</Wrapper>
	);
};

export default FeatureInfo;
