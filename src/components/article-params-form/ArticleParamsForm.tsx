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
	defaultArticleState,
} from 'src/constants/articleProps';

import { useModalClosure } from './hooks/useModalClosure';

type TArticleParamsForm = {
	articleState: ArticleStateType;
	setArticleState: (formState: ArticleStateType) => void;
};

export const ArticleParamsForm = ({
	articleState,
	setArticleState,
}: TArticleParamsForm) => {
	const [isOpen, setIsOpen] = useState(false);
	const [formState, setFormState] = useState(articleState);
	const closureRef = useRef(null); // TODO: посмотреть как сделано в других компонентах
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
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={() => setFormState({ ...defaultArticleState })}
						/>
						<Button
							title='Применить'
							htmlType='submit'
							type='apply'
							onClick={() => setArticleState({ ...formState })}
						/>
					</div>
				</form>
			</aside>
		</>
	);
};
