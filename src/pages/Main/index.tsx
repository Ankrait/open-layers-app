import { Overlay, View } from 'ol';
import { getCenter } from 'ol/extent';
import TileLayer from 'ol/layer/Tile';
import { OSM } from 'ol/source';
import { FC, useContext, useEffect, useRef, useState } from 'react';

import { DUSHANBE_POS, INITIAL_ZOOM, PROJECTION } from '@/common/constants';
import { FeatureType } from '@/common/types';
import FeatureInfo from '@/components/FeatureInfo';
import Header from '@/components/Header';
import MapContext from '@/providers/MapProvider/context';

import { MainWrapper, MapElement } from './styles';

const Main: FC = () => {
	const mapRef = useRef<HTMLDivElement>(null);
	const map = useContext(MapContext);

	const featureRef = useRef<HTMLDivElement>(null);
	const [data, setData] = useState<FeatureType | null>(null);

	useEffect(() => {
		// Начальная настройка Map
		if (!map || !mapRef.current || !featureRef.current) return;

		map.setTarget(mapRef.current);
		map.setView(
			new View({
				center: DUSHANBE_POS,
				zoom: INITIAL_ZOOM,
				projection: PROJECTION,
			})
		);
		map.setLayers([
			new TileLayer({
				source: new OSM(),
			}),
		]);

		const popupOverlay = new Overlay({
			element: featureRef.current,
			positioning: 'bottom-center',
		});

		map.addOverlay(popupOverlay);

		map.on('click', (event) => {
			const features = map.getFeaturesAtPixel(event.pixel);

			const feature = features[0];
			const geometry = feature?.getGeometry();

			if (!feature || !geometry) {
				setData(null);
				popupOverlay.setPosition(undefined);
				return;
			}

			setData(feature.getProperties());
			const center = getCenter(geometry.getExtent());
			popupOverlay.setPosition(center);
		});
	}, [map]);

	if (!map) return 'Loader';

	return (
		<MainWrapper>
			<Header />
			<MapElement ref={mapRef} />
			<FeatureInfo ref={featureRef} info={data} />
		</MainWrapper>
	);
};

export default Main;
