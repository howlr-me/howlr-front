import React, { InputHTMLAttributes } from 'react';
import cn from 'classnames';
import style from './TextField.module.scss';

export interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
	/** Optionally show a field label */
	label?: string;
	/** When provided, will display the error instead of helpText */
	error?: string;
	/** Instructions on how to use the field */
	helpText?: string;
	/** Vertical full width fields with consistent spacing */
	isFullWidth?: boolean;
}

export const TextField = React.forwardRef(
	({ label, helpText, error, isFullWidth, ...rest }: TextFieldProps, ref: React.Ref<HTMLInputElement>) => {
		return (
			<div>
				<label className={cn(style.wrapper, isFullWidth && style.isFullWidth)}>
					{label && <div className={style.label}>{label}</div>}
					<input
						className={cn(style.input, {
							[style.error]: !!error
						})}
						ref={ref}
						{...rest}
					/>
					{(error || helpText) && <div className={style.metaLabel}>{error || helpText}</div>}
				</label>
			</div>
		);
	}
);

TextField.displayName = 'TextField';
export default TextField;
