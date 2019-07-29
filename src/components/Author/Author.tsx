import React from 'react';
import style from './Author.module.scss';
import Avatar from '../Avatar/Avatar';

export interface AuthorProps {
	src?: string;
	name?: string;
	team?: string;
	time?: string;
}

const noop = () => {};

export function Author({ src, name, team, time, ...rest }: AuthorProps) {
	return (
		<section className={style.authorContainer}>
			<Avatar name="Cesar"></Avatar>
			<span className={style.authorName}>Cesar</span>
			<small>Onboarding • 12 hours ago</small>
		</section>
	);
}

export default Author;
