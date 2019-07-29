import React from 'react';
import style from './Author.module.scss';
import Avatar from '../Avatar/Avatar';
import Tag from '../Tag/Tag';

export interface AuthorProps {
	name?: string;
	avatarImg?: string;
	team?: string;
	time?: string;
	label?: string;
	url?: string;
}

export function Author({ name, avatarImg, team, time, label, url }: AuthorProps) {
	return (
		<section className={style.authorContainer}>
			<Avatar name={name} src={avatarImg}></Avatar>
			<div className={style.textInfo}>
				<div className={style.authorName}>
					<a href={url}>{name}</a>
				</div>
				<small className={style.metaInfo}>
					{team} • {time}
				</small>
			</div>
			{label ? <Tag label={label}></Tag> : null}
		</section>
	);
}

export default Author;
