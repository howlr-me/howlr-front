import React from 'react';
import TextTruncate from 'react-text-truncate';
import style from './Announcement.module.scss';

export interface AnnouncementProps {
	url?: string;
	title?: string;
	article?: string;
}

export function Announcement({ url, title, article }: AnnouncementProps) {
	return (
		<div className={style.announContainer}>
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
