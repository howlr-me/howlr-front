import React from 'react';
import style from './Comment.module.scss';
import TextTruncate from 'react-text-truncate';
import Avatar from '../Avatar/Avatar';

export interface CommentProps {
	authorName?: string;
	authorImg?: string;
	authorURL?: string;
	time?: string;
	comment?: string;
}

export function Comment({ authorName, authorImg, authorURL, time, comment }: CommentProps) {
	return (
		<div className={style.commentContainer}>
			<Avatar name={authorName} src={authorImg}></Avatar>
			<div className={style.commentBlock}>
				<div className={style.authorName}>
					<a href={authorURL}>{authorName}</a>
				</div>
				<span className={style.time}>{time}</span>
				<p className={style.comment}>{comment}</p>
			</div>
		</div>
	);
}

export default Comment;
