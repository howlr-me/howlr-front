import React from 'react';
import iconSprite from './iconSprite.svg';

export const ICONS = ['check', 'emoji', 'expand', 'search'] as const;

export type IconNames = typeof ICONS[number];
export type IconSize = '16' | '24';

export interface IconProps {
	icon: IconNames;
	size?: IconSize;
	className?: string;
}

export function Icon({ className, icon, size = '24' }: IconProps) {
	return (
		<svg className={className} width={size} height={size}>
			<use href={`${iconSprite}#${icon}`} />
		</svg>
	);
}
