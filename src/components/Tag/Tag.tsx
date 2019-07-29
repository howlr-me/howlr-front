import React from 'react';
import style from './Tag.module.scss';

export interface TagProps {
	src?: string;
	label?: string;
}

export function Tag({ src, label }: TagProps) {
	return (
		<div className={style.tagContainer}>
			{src ? (
				<a href={src}>
					<span>{label}</span>
				</a>
			) : (
				<span>{label}</span>
			)}
		</div>
	);
}

export default Tag;
