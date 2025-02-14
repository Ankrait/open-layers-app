import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';
import { FC, useContext, useState } from 'react';
import { createPortal } from 'react-dom';

import { converter } from '@/common/utils';
import MapContext from '@/providers/MapProvider/context';
import Button from '@/ui/Button';
import FileInput from '@/ui/FileInput';
import IconButton from '@/ui/IconButton';
import CloseIcon from '@/ui/svg/CloseIcon';

import { ButtonsWrapper, Content, Header, Title, Wrapper } from './styles';

interface IFileInput {
	onClose: () => void;
}

const FilePopup: FC<IFileInput> = ({ onClose }) => {
	const map = useContext(MapContext);

	const [file, setFile] = useState<File | null>(null);

	const buttonDisabled = file === null;

	const onGenerate = async () => {
		if (!file || !map) return;

		const data = await converter(file);
		if (!data) return;

		const vectorLayer = new VectorLayer({
			source: new VectorSource({
				features: data,
			}),
		});

		map.addLayer(vectorLayer);

		onClose();
	};

	return createPortal(
		<Wrapper onClick={onClose}>
			<Content onClick={(e) => e.stopPropagation()}>
				<Header>
					<Title>Генерация фигур</Title>
					<IconButton onClick={onClose}>
						<CloseIcon />
					</IconButton>
				</Header>

				<FileInput value={file} setValue={setFile} />

				<ButtonsWrapper>
					<Button variant="secondary" onClick={onClose}>
						Отмена
					</Button>
					<Button disabled={buttonDisabled} onClick={onGenerate}>
						Генерация
					</Button>
				</ButtonsWrapper>
			</Content>
		</Wrapper>,
		document.body
	);
};

export default FilePopup;
