import React from 'react';
import TextareaAutosize from 'react-autosize-textarea';
import style from './Post.module.scss';
import Emotion from '../Emotion/Emotion';
import Comment from './Comment';
import Button from '../Button/Button';
import { Icon } from '../Icon/Icon';
import 'emoji-mart/css/emoji-mart.css';
import { Picker } from 'emoji-mart';

function Post(props) {
	return (
		<div className={style.post}>
			<div className={style.postContent}>
				{props.children}
				<h4>Comments</h4>
				<Comment
					authorName="Mikk"
					authorURL="http://howlr.me/wolf/mikk"
					time="8h ago"
					comment="Oh wow! I'm really looking forward for that! So so cool!"
				></Comment>
				<Comment
					authorName="Merili"
					authorImg="https://randomuser.me/api/portraits/women/0.jpg"
					authorURL="http://howlr.me/wolf/merili"
					time="7h ago"
					comment="I really like this idea. It's the first time I will have an actual Estonia holiday to celebrate and I'm excited about it."
				></Comment>
				<ul className={style.emotions}>
					<li>
						<Emotion emotion="smile" selected>
							2
						</Emotion>
					</li>
					<li>
						<Emotion emotion="rocket">20</Emotion>
					</li>
				</ul>
			</div>
			<form>
				<fieldset>
					<legend>Post a comment</legend>
					<Picker
						color="#5e0fdd"
						set="apple"
						style={{ display: 'none', position: 'absolute', bottom: '48px', right: '24px' }}
					/>
					<Button variant="fog" className={style.emojiButton}>
						<Icon icon="emoji"></Icon>
					</Button>
					<TextareaAutosize className={style.commentInput} placeholder="Comment... be nice."></TextareaAutosize>
				</fieldset>
			</form>
		</div>
	);
}

export default Post;
