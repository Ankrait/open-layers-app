import * as tj from '@tmcw/togeojson';
import JSZip from 'jszip';
import GeoJSON from 'ol/format/GeoJSON.js';
import { DOMParser } from 'xmldom';

export const fileToDataURL = (file: File) =>
	new Promise<string | undefined>((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => resolve(reader.result?.toString());
		reader.onerror = reject;
	});

export const checkFileTypeAccept = (fileName: string, accept: string[]) => {
	for (const acceptedType of accept) {
		if (fileName.endsWith(acceptedType)) {
			return true;
		}
	}

	return false;
};

const convertKmzToKml = async (kmzFile: File) => {
	const zip = new JSZip();
	const content = await zip.loadAsync(kmzFile);
	const kmlFile = Object.keys(content.files).find((file) => file.endsWith('.kml'));

	return await content.files[kmlFile || ''].async('text');
};

export const converter = async (file: File) => {
	try {
		const arrayBuffer = await file.arrayBuffer();
		const textFile = new TextDecoder('utf-8').decode(arrayBuffer);

		if (file.name.endsWith('.json') || file.name.endsWith('.geojson')) {
			return new GeoJSON().readFeatures(textFile);
		}

		if (!file.name.endsWith('.kmz') && !file.name.endsWith('.kml')) {
			return null;
		}

		const kmlTextFile = file.name.endsWith('.kmz')
			? await convertKmzToKml(file)
			: textFile;
		const kmlDocument = new DOMParser().parseFromString(kmlTextFile, 'text/xml');

		return new GeoJSON().readFeatures(tj.kml(kmlDocument));
	} catch {
		return null;
	}
};
