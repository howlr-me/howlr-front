import React from 'react';
import cn from 'classnames';
import style from './Avatar.module.scss';

export interface AvatarProps {
	src?: string;
	name?: string;
	alt?: string;
	disabled?: boolean;
	onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
}

const noop = () => {};

export function Avatar({ src, name, alt, disabled, onClick, ...rest }: AvatarProps) {
	const imgClasses = cn(style.avatar, src && style.img);

	function getInitials(name) {
		if (name) {
			var array = name.split(' ');

			switch (array.length) {
				case 1:
					return array[0].charAt(0).toUpperCase();
					break;
				default:
					return array[0].charAt(0).toUpperCase() + array[array.length - 1].charAt(0).toUpperCase();
			}
		}

		return false;
	}

	return (
		<div className={cn(style.wrapper, disabled && style.disabled)} onClick={disabled ? noop : onClick} {...rest}>
			{src ? (
				<img src={src} alt={alt || name} className={imgClasses} />
			) : (
				<span className={imgClasses}>{getInitials(name)}</span>
			)}
		</div>
	);
}

export default Avatar;
