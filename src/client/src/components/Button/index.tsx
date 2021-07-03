import { ButtonProps } from '@src/@types/ButtonProps';
import classNames from 'classnames';
import './styles.scss';

export const Button = (props: ButtonProps): JSX.Element => {
	const { color, type, size, disabled = false, children, onClick } = props;

	const btnClass = classNames({
		button: true,
		[`button--${color}`]: color && true,
		[`button--${type}`]: type && true,
		[`button--${size}`]: size && true,
		'button--disabled': disabled
	});

	return (
		<a className={btnClass} onClick={onClick}>
			{children}
		</a>
	);
};
