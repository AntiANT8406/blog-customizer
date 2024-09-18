import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { useState, useRef } from 'react';
import { useModalClosure } from 'src/hooks/useModalClosure';
import clsx from 'clsx';

import styles from './ArticleParamsForm.module.scss';

export const ArticleParamsForm = () => {
	const [isOpen, setIsOpen] = useState(false);
	const closureRef = useRef(null);
	useModalClosure({ ref: closureRef, isOpen, close: () => setIsOpen(false) });
	return (
		<>
			<ArrowButton
				isOpen={isOpen}
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			/>
			<aside
				className={clsx(styles.container, { [styles.container_open]: isOpen })}
				ref={closureRef}>
				<form className={styles.form}>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
