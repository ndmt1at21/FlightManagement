import { Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

type DotsProps = {
	size: number;
	activeIndex: number;
	onClick?: (index: number) => void;
} & Omit<React.HTMLAttributes<HTMLDivElement>, 'onClick'>;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		display: 'flex',
		height: '20px'
	},
	dot: {
		backgroundColor: `1px solid ${theme.palette.background.default}`,
		border: `1px solid ${theme.palette.primary.main}`,
		borderRadius: '50%',
		width: '10px',
		height: '10px',
		cursor: 'pointer',
		outline: 'none',

		'&:not(:last-child)': {
			marginRight: '10px'
		}
	},
	dotActive: {
		backgroundColor: theme.palette.primary.main
	}
}));

export const Dots = (props: DotsProps): JSX.Element => {
	const { activeIndex, size, onClick, className, ...rest } = props;

	const classes = useStyles();

	const renderDot = (index: number) => {
		return (
			<button
				id={`${index}`}
				key={`${index}`}
				role="button"
				onClick={() => {
					if (onClick) onClick(index);
				}}
				className={
					index === activeIndex
						? `${classes.dot} ${classes.dotActive}`
						: classes.dot
				}
			></button>
		);
	};

	return (
		<div className={classes.root + ' ' + className} {...rest}>
			{Array.from({ length: size }, (_, index) => renderDot(index))}
		</div>
	);
};
