import { Box, Input, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { RoundTripInputRenderer } from './components/RoundTripInputRenderer';
import { ListLocation } from './components/ListLocation';

type LocationPicker = {};

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		padding: theme.spacing(2),
		boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
		borderRadius: '10px'
	},
	inputRenderer: {},
	list: {}
}));

export const LocationPicker = (): JSX.Element => {
	const classes = useStyles();

	const a = {
		airportName: 'Sân bay Tân Sân Nhất',
		cityCode: 'SGN',
		nation: 'Việt Nam',
		city: 'Hồ Chí Minh'
	};

	return (
		<Box className={classes.root}>
			<RoundTripInputRenderer
				departDes={a}
				returnDes={a}
				className={classes.inputRenderer}
			/>
			<ListLocation locations={[a, a, a, a, a]} className={classes.list} />
		</Box>
	);
};
