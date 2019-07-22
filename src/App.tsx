import React from 'react';
import './scss/global.scss';
import style from './App.module.scss';
import Header from './Header';
import Menu from './Menu';

const App: React.FC = () => {
	return (
		<div className={style.App}>
			<Header></Header>
			<div className={style.container}>
				<Menu></Menu>
				<div className={style.content}>
					<h1>Wolfpack</h1>
				</div>
				<div className={style.sidebar}></div>
			</div>
		</div>
	);
};

export default App;
