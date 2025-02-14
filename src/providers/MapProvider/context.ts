import { Map } from 'ol';
import { createContext } from 'react';

export type MapContextType = Map | undefined;

const MapContext = createContext<MapContextType>(undefined);

export default MapContext;
