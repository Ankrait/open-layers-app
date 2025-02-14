import { useEffect, useRef } from 'react';

import { checkFileTypeAccept } from './utils';

export const useDragAndDrop = <T extends HTMLElement>(
	setFile: (val: File) => void,
	accept?: string[]
) => {
	const ref = useRef<T | null>(null);

	const dropHandler = async (e: DragEvent) => {
		e.preventDefault();

		const files = e.dataTransfer?.files;

		if (!files || files.length === 0) return;

		const file = files[0];

		if (accept && !checkFileTypeAccept(file.name, accept)) return;

		setFile(file);
	};

	const onDrag = (e: DragEvent) => {
		e.preventDefault();
	};

	useEffect(() => {
		if (ref.current) {
			ref.current.addEventListener('dragover', onDrag);
			ref.current.addEventListener('dragenter', onDrag);
			ref.current.addEventListener('dragend', onDrag);
			ref.current.addEventListener('dragstart', onDrag);
			ref.current.addEventListener('dragleave', onDrag);
			ref.current.addEventListener('drag', onDrag);
			ref.current.addEventListener('drop', dropHandler);
		}

		return () => {
			if (ref.current) {
				ref.current.removeEventListener('drop', dropHandler);
				ref.current.removeEventListener('dragover', onDrag);
				ref.current.removeEventListener('dragenter', onDrag);
				ref.current.removeEventListener('dragend', onDrag);
				ref.current.removeEventListener('dragstart', onDrag);
				ref.current.removeEventListener('dragleave', onDrag);
				ref.current.removeEventListener('drag', onDrag);
			}
		};
	}, [ref.current]);

	return ref;
};
