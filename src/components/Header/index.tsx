import { FC, useState } from 'react';

import FilePopup from '@/components/FilePopup';
import Button from '@/ui/Button';

import { HeaderWrapper, Heading } from './styles';

const Header: FC = () => {
	const [isPopupOpened, setPopupOpened] = useState<boolean>(false);

	const handlePopupOpen = () => {
		setPopupOpened(true);
	};
	const handlePopupClose = () => {
		setPopupOpened(false);
	};

	return (
		<HeaderWrapper>
			<Heading>OL</Heading>
			<Button onClick={handlePopupOpen}>Вставить файл</Button>

			{isPopupOpened && <FilePopup onClose={handlePopupClose} />}
		</HeaderWrapper>
	);
};

export default Header;
