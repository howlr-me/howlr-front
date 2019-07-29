import React from 'react';
import './scss/global.scss';
import style from './App.module.scss';
import Header from './Header';
import Menu from './Menu';
import TextField from './components/TextField/TextField';
import Announcement from './components/Post/Announcement';

const App: React.FC = () => {
	return (
		<div className={style.App}>
			<Header></Header>
			<div className={style.container}>
				<Menu></Menu>
				<div className={style.content}>
					<h1>Wolfpack</h1>
					<section className={style.newPost}>
						<h4>New post</h4>
						<TextField placeholder="What do you want to share?"></TextField>
					</section>
					<Announcement></Announcement>
				</div>
				<div className={style.sidebar}></div>
			</div>
		</div>
	);
};

export default App;
