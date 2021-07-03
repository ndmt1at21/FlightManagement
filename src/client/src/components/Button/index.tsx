import { ButtonProps } from '@src/@types/ButtonProps';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

const cx = classNames.bind(styles);

export const Button = (props: ButtonProps): JSX.Element => {
	const { color, type, size, disabled = false, children, onClick } = props;

	const btnClass = cx({
		button: true,
		[`button--${color}`]: color ?? false,
		[`button--${type}`]: type ?? false,
		[`button--${size}`]: size ?? false,
		[`button--disabled`]: disabled
	});

	return (
		<a className={btnClass} type="button" onClick={onClick}>
			{children}
		</a>
	);
};
