import React, { ButtonHTMLAttributes } from 'react';
import style from './Button.module.scss';
import classNames from 'classnames';

export type Variants = 'primary' | 'ghost' | 'fog';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: Variants;
}

export const Button = React.forwardRef(
	(
		{ children, variant = 'primary', type = 'button', className = 'loading', ...rest }: ButtonProps,
		ref: React.Ref<HTMLButtonElement>
	) => {
		return (
			<button className={classNames(style[variant], className)} type={type} ref={ref} {...rest}>
				{children}
			</button>
		);
	}
);

Button.displayName = 'Button';
export default Button;
