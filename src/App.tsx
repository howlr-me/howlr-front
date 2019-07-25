import React from 'react';
import './scss/global.scss';
import cn from 'classnames';
import style from './App.module.scss';
import Header from './Header';
import Menu from './Menu';
import TextField from './components/TextField/TextField';

const App: React.FC = () => {
  return (
    <div className={style.App}>
		<Header></Header>
		<div className={style.container}>
			<Menu></Menu>
			<div className={style.content}>
				<h1>Wolfpack</h1>
				<h4>New post</h4>
				<TextField placeholder="What do you want to share?" className={cn(style.newPost)}></TextField>
			</div>
			<div className={style.sidebar}>
			</div>
		</div>
	);
};

export default App;
