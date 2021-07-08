import { List, ListItem, ListItemText, Theme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: '100%',
		backgroundColor: 'transparent'
	},
	listItem: {},
	itemCity: {
		fontSize: theme.typography.body1.fontSize
	},
	itemCityCode: {
		fontSize: theme.typography.h6.fontSize,
		fontWeight: theme.typography.fontWeightBold,
		textAlign: 'right'
	}
}));

type ListLocationProps = {
	locations: LocationTrip[];
	className?: string;
	onClick?: (location: LocationTrip) => void;
};

export const ListLocation = (props: ListLocationProps): JSX.Element => {
	const { locations, className, onClick } = props;

	const classes = useStyles();

	return (
		<List component="div" className={classes.root + ' ' + className}>
			{locations.map(location => {
				const { city, cityCode } = location;

				return (
					<ListItem
						button
						className={classes.listItem}
						onClick={() => {
							if (onClick) onClick(location);
						}}
					>
						<ListItemText className={classes.itemCity}>
							{city}
						</ListItemText>
						<ListItemText
							disableTypography
							className={classes.itemCityCode}
						>
							{cityCode}
						</ListItemText>
					</ListItem>
				);
			})}
		</List>
	);
};
