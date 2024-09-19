import { useState, useRef } from 'react';
import clsx from 'clsx';
import styles from './ArticleParamsForm.module.scss';

import { ArrowButton } from 'components/arrow-button';
import { Button } from 'components/button';
import { Text } from 'components/text';
import { Select } from 'components/select';

import {
	ArticleStateType,
	fontFamilyOptions,
} from 'src/constants/articleProps';

import { useModalClosure } from './hooks/useModalClosure';

type TArticleParamsForm = {
	formState: ArticleStateType;
	setFormState: (formState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	formState,
	setFormState,
}: TArticleParamsForm) => {
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
					<Text as={'h2'} size={31} weight={800} uppercase>
						Задайте параметры
					</Text>
					<Select
						options={fontFamilyOptions}
						selected={formState.fontFamilyOption}
						onChange={(option) =>
							setFormState({ ...formState, fontFamilyOption: option })
						}></Select>
					<div className={styles.bottomContainer}>
						<Button title='Сбросить' htmlType='reset' type='clear' />
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
