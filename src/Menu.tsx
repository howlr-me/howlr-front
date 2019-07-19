import React from 'react';
import style from './Menu.module.scss';

class Menu extends React.Component {
	render() {
		return(
			<nav className={style.menu}>
				<h4>Packs</h4>
				<ul>
					<li><a href=""># Lonewolf</a></li>
					<li><a href=""># Wolfpack</a></li>
					<li><a href=""># Design</a></li>
					<li><a href=""># Genoma</a></li>
					<li><a href=""># End-User</a></li>
					<li><a href=""># Photography</a></li>
				</ul>
				<h4>What</h4>
				<ul>
					<li><a href="">All</a></li>
					<li><a href="">Announcements</a></li>
					<li><a href="">Events</a></li>
				</ul>
				<h4>Company</h4>
				<ul>
					<li><a href="">Members</a></li>
					<li><a href="">Packs</a></li>
					<li><a href="">Manage</a></li>
				</ul>
			</nav>
		);
	}
}

export default Menu;
