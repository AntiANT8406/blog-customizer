import { useState, CSSProperties } from 'react';

import { Article } from 'components/article/Article';
import { ArticleParamsForm } from 'components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from 'src/constants/articleProps';

import styles from 'src/styles/index.module.scss';

export const App = () => {
	const [articleState, setArticleState] = useState(defaultArticleState);
	return (
		<div
			className={styles.main}
			style={
				{
					'--font-family': articleState.fontFamilyOption.value,
					'--font-size': articleState.fontSizeOption.value,
					'--font-color': articleState.fontColor.value,
					'--container-width': articleState.contentWidth.value,
					'--bg-color': articleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm
				articleState={articleState}
				setArticleState={setArticleState}
			/>
			<Article />
		</div>
	);
};
