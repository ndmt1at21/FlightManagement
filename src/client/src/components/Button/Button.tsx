import styles from './styles.module.css';

type ButtonProps = {
	color?: 'primary' | 'secondary';
	type?: 'fill' | 'outline' | 'text';
	disabled?: boolean;
	children: React.ReactNode;
};

export const Button = (props: ButtonProps) => {
	const {
		color = 'primary',
		disabled = false,
		type = 'text',
		children
	} = props;

	return (
		<button className={styles.button} disabled={disabled}>
			{children}
		</button>
	);
};
