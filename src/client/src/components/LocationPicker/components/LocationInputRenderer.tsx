import { BoxProps } from '@material-ui/core';
import { Box, InputProps } from '@material-ui/core';
import { Input, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

type LocationInputRenderer = {
	locTrip: LocationTrip;
	value?: string;
	placeholder?: string;
	onChange?: React.ChangeEventHandler;
} & BoxProps;

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		border: `1px solid ${theme.palette.grey[400]}`,
		borderRadius: '10px',
		padding: theme.spacing(1, 2),
		cursor: 'pointer',
		width: '100%',
		transition: theme.transitions.create('color', {
			duration: theme.transitions.duration.shortest
		})
	},
	rootFocus: {
		borderColor: theme.palette.primary.main
	},
	resultPickWrapper: {},
	resultPick: {
		display: 'flex',
		flexDirection: 'column'
	},
	subtitle: {
		fontSize: '0.75rem',
		lineHeight: 1
	},
	title: {
		fontSize: theme.typography.body1.fontSize,
		fontWeight: theme.typography.fontWeightBold,
		overflow: 'clip'
	},
	inputContainer: {
		position: 'relative',
		top: '50%',
		transform: 'translateY(-50%)'
	},
	input: {
		width: '100%',
		height: '100%'
	}
}));

export const LocationInputRenderer = (
	props: LocationInputRenderer
): JSX.Element => {
	const { locTrip, className, value, onChange, ...rest } = props;
	const { airportName, city, cityCode, nation } = locTrip;

	const classes = useStyles();
	const inputRef = useRef<HTMLInputElement>();
	const borderContainerRef = useRef<HTMLDivElement>();

	const [focus, setFocus] = useState(false);

	useEffect(() => {
		if (!focus && inputRef.current) {
			inputRef.current.value = '';
			borderContainerRef.current?.classList.remove(classes.rootFocus);
		}

		if (focus) {
			inputRef.current?.focus();
			borderContainerRef.current?.classList.add(classes.rootFocus);
		}
	}, [focus]);

	return (
		<Box
			component="div"
			ref={borderContainerRef}
			className={classes.root + ' ' + className}
			{...rest}
		>
			<Box
				component="div"
				aria-label="wrapper"
				className={classes.resultPickWrapper}
				display={focus ? 'none' : 'block'}
				onClick={() => {
					setFocus(prevFocus => {
						return !prevFocus;
					});
				}}
			>
				<Box className={classes.resultPick}>
					<Box component="span" className={classes.subtitle}>
						{nation}
					</Box>
					<Box
						component="span"
						className={classes.title}
					>{`${city} - ${cityCode.toUpperCase()}`}</Box>
					<Box component="span" className={classes.subtitle}>
						{airportName}
					</Box>
				</Box>
			</Box>

			<Box
				display={focus ? 'block' : 'none'}
				className={classes.inputContainer}
			>
				<Input
					inputRef={inputRef}
					disableUnderline
					className={classes.input}
					value={value}
					onChange={onChange}
					onBlur={() => {
						setFocus(prevFocus => {
							return !prevFocus;
						});
					}}
				/>
			</Box>
		</Box>
	);
};
