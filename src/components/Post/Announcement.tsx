import React from 'react';
import TextTruncate from 'react-text-truncate';
import style from './Announcement.module.scss';
import Author from '../Author/Author';

export interface AnnouncementProps {
	url?: string;
	author?: string;
	authorURL?: string;
	authorImg?: string;
	time?: string;
	team?: string;
	label?: string;
	title?: string;
	article?: string;
}

export function Announcement({
	url,
	author,
	authorURL,
	authorImg,
	time,
	team,
	label,
	title,
	article
}: AnnouncementProps) {
	return (
		<div className={style.announContainer}>
			<Author name={author} url={authorURL} avatarImg={authorImg} team={team} time={time} label={label}></Author>
			<h2>
				<a href={url}>{title}</a>
			</h2>
			<TextTruncate
				line={4}
				element="p"
				truncateText="…"
				text={article}
				textTruncateChild={<a href={url}>see more</a>}
			/>
		</div>
	);
}

export default Announcement;
