import React from 'react';
import style from './Emotion.module.scss';
import classNames from 'classnames';
import { Emoji } from 'emoji-mart';

export interface EmotionProps {
	children?: number | string;
	emotion?: string;
	selected?: boolean;
}

export function Emotion({ children = 1, emotion, selected }: EmotionProps) {
	return (
		<span className={classNames(style.emotion, selected && style.selected)}>
			<Emoji set={'apple'} emoji={emotion} size={15} />
			{children}
		</span>
	);
}

export default Emotion;
