import React from 'react';
import style from './Header.module.scss';
import Avatar from './components/Avatar/Avatar';

class Header extends React.Component {
	render() {
		return (
			<header className={style.header}>
				<a href="">
					<svg width="106px" height="40px" viewBox="0 0 106 40">
						<g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
							<g id="HEADER" transform="translate(-24.000000, -12.000000)">
								<g id="Company">
									<g transform="translate(24.000000, 12.000000)">
										<rect id="Rectangle" x="0" y="0" width="232" height="40"></rect>
										<path
											d="M0.96,31 L0.96,30.36 L3.52,30.36 L4.16,29.72 L4.16,8.92 L3.52,8.28 L0.96,8.28 L0.96,7.64 L28.8,7.64 L28.8,8.28 L26.24,8.28 L25.6,8.92 L25.6,29.72 L26.24,30.36 L28.8,30.36 L28.8,31 L0.96,31 Z M10.56,18.52 L19.2,18.52 L19.2,8.92 L18.56,8.28 L11.2,8.28 L10.56,8.92 L10.56,18.52 Z M10.56,29.72 L11.2,30.36 L18.56,30.36 L19.2,29.72 L19.2,19.16 L10.56,19.16 L10.56,29.72 Z M39.68,31.64 C33.92,31.64 30.4,28.344 30.4,23 C30.4,17.656 33.92,14.36 39.68,14.36 C45.44,14.36 48.96,17.656 48.96,23 C48.96,28.344 45.44,31.64 39.68,31.64 Z M39.68,31 C42.112,31 42.56,27.928 42.56,23 C42.56,18.072 42.112,15 39.68,15 C37.248,15 36.8,18.072 36.8,23 C36.8,27.928 37.248,31 39.68,31 Z M49.76,15.64 L49.76,15 L77.92,15 L77.92,15.64 L75.456,15.64 L70.944,31 L67.04,31 L64.8,20.12 L64.48,20.12 L60.832,31 L56.64,31 L52,15.64 L49.76,15.64 Z M58.4,16.28 L61.28,26.2 L61.6,26.2 L65.152,15.64 L59.04,15.64 L58.4,16.28 Z M68.864,15.64 L71.2,26.2 L71.52,26.2 L74.432,16.28 L73.792,15.64 L68.864,15.64 Z M78.4,31 L78.4,30.36 L80.32,30.36 L80.96,29.72 L80.96,8.28 L78.4,8.28 L78.4,7.64 C80.992,7.64 84.288,7.032 87.04,6.04 L87.04,29.72 L87.68,30.36 L89.6,30.36 L89.6,31 L78.4,31 Z M90.24,31 L90.24,30.36 L92.16,30.36 L92.8,29.72 L92.8,15.64 L90.24,15.64 L90.24,15 C92.896,15 96.064,15.16 98.56,14.36 L98.56,19.48 L98.88,19.48 C99.456,16.568 101.28,14.68 103.68,14.52 L106.24,14.36 L105.6,19.8 L100.16,19.8 C99.36,19.8 98.88,20.28 98.88,21.08 L98.88,29.72 L99.52,30.36 L104.64,30.36 L104.64,31 L90.24,31 Z"
											id="Howlr"
											fill="#2F1847"
											fillRule="nonzero"
										></path>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</a>
				<form>
					<legend>Search anything</legend>
					<label>
						<input type="text" placeholder="Search anything..." />
					</label>
				</form>
				<Avatar name="Cesar" src="http://greatcesar.com/cesar-profile.jpg"></Avatar>
			</header>
		);
	}
}

export default Header;
