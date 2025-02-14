import { Global } from '@emotion/react';

import Main from '@/pages/Main';
import MapProvider from '@/providers/MapProvider';
import global from '@/styles/global';

import 'ol/ol.css';

function App() {
	return (
		<>
			<Global styles={global} />
			<MapProvider>
				<Main />
			</MapProvider>
		</>
	);
}

export default App;
