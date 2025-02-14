import { ChangeEvent, FC } from 'react';

import { useDragAndDrop } from '@/common/hooks';
import { checkFileTypeAccept } from '@/common/utils';
import DeleteIcon from '@/ui/svg/DeleteIcon';
import FileIcon from '@/ui/svg/FileIcon';

import {
	DeleteButton,
	FileWrapper,
	HiddenInput,
	Label,
	LabelInfo,
	LabelTitle,
} from './styles';

const accept = ['.geojson', '.json', '.kml', '.kmz'];

const INPUT_ID = 'file_input_key';

interface IFileInput {
	value: File | null;
	setValue: (val: File | null) => void;
}

const FileInput: FC<IFileInput> = ({ value, setValue }) => {
	const dragRef = useDragAndDrop<HTMLLabelElement>(setValue, accept);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		const files = e.target.files;
		if (files?.length !== 1) return;

		const file = files[0];

		if (accept && !checkFileTypeAccept(file.name, accept)) return;

		setValue(file);
	};

	const handleDelete = () => {
		setValue(null);
	};

	return value ? (
		<FileWrapper>
			<FileIcon />

			<DeleteButton onClick={handleDelete}>
				<DeleteIcon />
			</DeleteButton>
		</FileWrapper>
	) : (
		<Label ref={dragRef} htmlFor={INPUT_ID}>
			<HiddenInput
				value={value || undefined}
				type="file"
				id={INPUT_ID}
				onChange={handleChange}
			/>
			<LabelTitle>Перетащите файл либо нажмите, чтобы выбрать</LabelTitle>
			<LabelInfo>В формате json, geojson, kml, kmz</LabelInfo>
		</Label>
	);
};

export default FileInput;
