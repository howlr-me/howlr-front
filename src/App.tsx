import React from 'react';
import './scss/global.scss';
import style from './App.module.scss';
import Header from './Header';
import Menu from './Menu';

const App: React.FC = () => {
  return (
    <div className={style.App}>
		<Header></Header>
		<div className={style.content}>
			<Menu></Menu>
		</div>
    </div>
  );
}

export default App;
