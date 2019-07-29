import React from 'react';
import style from './Author.module.scss';
import Avatar from '../Avatar/Avatar';
import Tag from '../Tag/Tag';

export interface AuthorProps {
	name?: string;
	team?: string;
	time?: string;
	label?: string;
}

export function Author({ name, team, time, label }: AuthorProps) {
	return (
		<section className={style.authorContainer}>
			<Avatar name={name}></Avatar>
			<div className={style.textInfo}>
				<div className={style.authorName}>{name}</div>
				<small className={style.metaInfo}>
					{team} • {time}
				</small>
			</div>
			{label ? <Tag label={label}></Tag> : null}
		</section>
	);
}

export default Author;
