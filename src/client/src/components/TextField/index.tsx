import { TextFieldProps } from '@src/@types/TextFieldProps';
import classNames from 'classnames';
import { ChangeEvent, useRef, useState } from 'react';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export const TextField = (props: TextFieldProps): JSX.Element => {
	const { title, type, errorMessage, helper, require, onChange, validate } =
		props;

	const inputField = useRef<HTMLInputElement>(null);

	const [textFieldValue, setTextFieldValue] = useState('');
	const [focus, setFocus] = useState(false);
	const [error, setError] = useState(false);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTextFieldValue(e.target.value);

		if (validate) {
			setError(validate(e.target.value));
		}

		if (onChange) onChange(e);
	};

	const textFieldClass = cx({
		[styles['TextField']]: true,
		[styles['TextField--focus']]: focus,
		[styles['TextField--error']]: error
	});

	const labelClass = cx({
		[styles['TextField__label']]: true,
		[styles['TextField__label--animated']]: true,
		[styles['TextField__label--shrink']]: focus || textFieldValue.length > 0
	});

	const inputClass = cx({
		[styles['TextField__input']]: true
	});

	const helperClass = cx({
		[styles['TextField__helper']]: true
	});

	return (
		<div
			className={textFieldClass}
			onClick={props => inputField.current?.focus()}
		>
			<input
				type={type}
				name={title}
				id={title}
				className={inputClass}
				ref={inputField}
				onFocus={() => setFocus(true)}
				onBlur={() => {
					setFocus(false);
					if (textFieldValue.length === 0 && require) setError(true);
				}}
				onChange={handleInputChange}
				value={textFieldValue}
			/>
			<label className={labelClass} aria-hidden>
				{title}
			</label>
			<label className={helperClass}>{error ? errorMessage : helper}</label>
		</div>
	);
};
