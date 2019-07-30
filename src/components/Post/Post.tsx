import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import style from './Post.module.scss';

function Post(props) {
	return (
		<div className={style.post}>
			<div className={style.postContent}>{props.children}</div>
			<form>
				<fieldset>
					<legend>Post a comment</legend>
					<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" className={style.emojiButton}>
						<path
							d="M14.5 11c-.83 0-1.5-.67-1.5-1.5S13.67 8 14.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm-5 0C8.67 11 8 10.33 8 9.5S8.67 8 9.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm2.5 6.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zM19 7v2.99s-1.99.01-2 0V7h-3s.01-1.99 0-2h3V2h2v3h3v2h-3zm-3.6615651-4.4123485l-.6768698 1.8819796C13.7880402 4.1554605 12.9229448 4 12 4c-4.418278 0-8 3.581722-8 8s3.581722 8 8 8 8-3.581722 8-8c0-.9166706-.1571231-1.8275626-.455044-2.6647287l1.8842433-.6705426C21.8037552 9.7172413 22 10.8549344 22 12c0 5.5228475-4.4771525 10-10 10S2 17.5228475 2 12 6.4771525 2 12 2c1.1572923 0 2.2509807.1965394 3.3384349.5876515z"
							fill="#667892"
							fillRule="nonzero"
						/>
					</svg>
					<TextareaAutosize className={style.commentInput} placeholder="Comment... be nice."></TextareaAutosize>
				</fieldset>
			</form>
		</div>
	);
}

export default Post;
