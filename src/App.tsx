import React from 'react';
import './scss/global.scss';
import style from './App.module.scss';
import Header from './Header';
import Menu from './Menu';
import TextField from './components/TextField/TextField';
import Post from './components/Post/Post';
import Author from './components/Author/Author';
import Announcement from './components/Post/Announcement';
import Comment from './components/Post/Comment';
import Button from './components/Button/Button';

document.title = 'Wolfpack : Howlr';

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
					<Post>
						<Author name="Cesar" url="http://howlr.me" team="Onboarding" time="12 hours ago" label="Official"></Author>
						<Announcement
							url="http://howlr.me"
							title="Jaanilaupäev ja Jaanipäev - Midsummer's Eve and Day 🔥"
							article="Just for your information, Sunday 23rd June and Monday 24th June are national holidays in Estonia due to Midsummer's Celebrations. Verification team works as usual according to their schedules, for everyone else, these are days off. 25th June is a normal working day again."
						></Announcement>
						<Comment
							authorName="Mikk"
							authorURL="http://howlr.me/wolf/mikk"
							time="8 hours ago"
							comment="Oh wow! I'm really looking forward for that! So so cool!"
						></Comment>
						<Comment
							authorName="Merili"
							authorImg="https://randomuser.me/api/portraits/women/0.jpg"
							authorURL="http://howlr.me/wolf/merili"
							time="7 hours ago"
							comment="I really like this idea. It's the first time I will have an actual Estonia holiday to celebrate and I'm excited about it."
						></Comment>
					</Post>
					<Button variant="fog">Add new</Button>
				</div>
				<div className={style.sidebar}></div>
			</div>
		</div>
	);
};

export default App;
