import { Map } from 'ol';
import { FC, ReactNode, useEffect, useState } from 'react';

import MapContext, { MapContextType } from './context';

interface IMapProvider {
	children: ReactNode;
}

const MapProvider: FC<IMapProvider> = ({ children }) => {
	const [value, setValue] = useState<MapContextType>(undefined);

	useEffect(() => {
		setValue(new Map());
	}, []);

	return <MapContext.Provider value={value}>{children}</MapContext.Provider>;
};

export default MapProvider;
