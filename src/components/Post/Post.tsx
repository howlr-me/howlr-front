import React from 'react';
import style from './Post.module.scss';

function Post(props) {
	return <div className={style.post}>{props.children}</div>;
}

export default Post;
