import { useEffect } from 'react';

interface IUseModalClosure {
	ref: React.RefObject<HTMLDivElement>;
	isOpen: boolean;
	close: () => void;
}

export const useModalClosure = ({
	ref,
	isOpen,
	close,
}: IUseModalClosure): void => {
	useEffect(() => {
		const closeOnEscapeKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape' && isOpen) {
				close();
			}
		};
		const closeOnOutsideClick = (e: MouseEvent) => {
			if (ref.current && !ref.current.contains(e.target as Node) && isOpen) {
				close();
			}
		};

		document.addEventListener('keydown', closeOnEscapeKey);
		document.addEventListener('mousedown', closeOnOutsideClick);
		return () => {
			document.removeEventListener('keydown', closeOnEscapeKey);
			document.removeEventListener('mousedown', closeOnOutsideClick);
		};
	}, [isOpen]);
};
