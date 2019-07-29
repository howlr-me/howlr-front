import React from 'react';
import style from './Announcement.module.scss';
import Author from '../Author/Author';

class Announcement extends React.Component {
	render() {
		return (
			<div className={style.announContainer}>
				<Author name="Cesar"></Author>
			</div>
		);
	}
}

export default Announcement;
