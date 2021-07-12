import { ListItemIcon, Theme, Box, Drawer } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { List } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { ReactComponent as AirplaneInFlight } from '@public/AirplaneInFlight.svg';
import { ReactComponent as AirplaneTilt } from '@public/AirplaneTilt.svg';
import { ReactComponent as Calendar } from '@public/Calendar.svg';
import { ReactComponent as GearSix } from '@public/GearSix.svg';
import { ReactComponent as ChartPieSlice } from '@public/ChartPieSlice.svg';

import { ReactComponent as Logo } from '@public/Logo.svg';
import { Link } from '@components/Link';
import { ADMIN_PATH } from '@src/constants/path';
import React from 'react';
import { useLocation } from 'react-router-dom';

const AdminSideBarProps = {};

const useStyles = makeStyles((theme: Theme) => ({
	navList: {
		display: 'flex',
		justifyContent: 'center',
		flexDirection: 'column',
		padding: '1rem',
		backgroundColor: theme.palette.background.paper,
		backdropFilter: 'blur(2px)',
		boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)',
		width: 'clamp(10rem, 20vw, 20rem)'
	},
	parentItem: {},
	nested: {
		paddingLeft: theme.spacing(5)
	},
	iconContainer: {
		padding: theme.spacing(1, 2, 1, 0),
		minWidth: 0
	},
	icon: {
		width: '24px',
		height: '24px'
	},
	logo: {
		width: '50%',
		alignSelf: 'center',
		padding: theme.spacing(5, 0)
	},
	text: {
		textDecoration: 'none',
		fontWeight: theme.typography.fontWeightMedium
	},
	item: {
		borderRadius: '10px',
		fontSize: '0.8rem',
		fill: 'none',
		stroke: theme.palette.text.secondary,
		strokeWidth: 2,

		'&:hover': {
			backgroundColor: theme.palette.primary.lighter
		},
		'&.Mui-selected': {
			stroke: theme.palette.text.contrast,
			color: theme.palette.text.contrast,
			backgroundColor: theme.palette.primary.main,
			'&:hover': {
				backgroundColor: theme.palette.primary.main
			}
		}
	}
}));

export const AdminSideBar = (): JSX.Element => {
	const classes = useStyles();

	const { pathname } = useLocation();

	const MenuItem = ({
		path,
		label,
		icon,
		header = false
	}: {
		path: string;
		label: string;
		icon?: React.ReactNode;
		header?: boolean;
	}) => {
		return (
			<Link to={path}>
				<ListItem
					button
					className={classes.item}
					selected={!header && pathname === path}
				>
					<ListItemIcon className={classes.iconContainer}>
						{icon}
					</ListItemIcon>
					<Box component="span" className={classes.text}>
						{label}
					</Box>
				</ListItem>
			</Link>
		);
	};

	return (
		<List component="nav" className={classes.navList}>
			<Logo className={classes.logo} />
			<Box aria-label="manage-airport-group" component="nav">
				<MenuItem
					key={ADMIN_PATH.AIRPORT.LIST}
					path={ADMIN_PATH.AIRPORT.LIST}
					label={'Quản lý sân bay'}
					icon={<AirplaneTilt className={classes.icon} />}
					header
				></MenuItem>
				<List className={classes.nested}>
					<MenuItem
						key={ADMIN_PATH.AIRPORT.LIST}
						path={ADMIN_PATH.AIRPORT.LIST}
						label={'Danh sách sân bay'}
					></MenuItem>
					<MenuItem
						key={ADMIN_PATH.AIRPORT.LIST_INTER}
						path={ADMIN_PATH.AIRPORT.LIST_INTER}
						label={'Danh sách sân bay trung gian'}
					></MenuItem>
					<MenuItem
						key={ADMIN_PATH.AIRPORT.ADD}
						path={ADMIN_PATH.AIRPORT.ADD}
						label={'Thêm sân bay'}
					></MenuItem>
					<MenuItem
						key={ADMIN_PATH.AIRPORT.ADD_INTER}
						path={ADMIN_PATH.AIRPORT.ADD_INTER}
						label={'Thêm sân bay trung gian'}
					></MenuItem>
				</List>
			</Box>

			<Box aria-label="manage-flight-group" component="nav">
				<MenuItem
					key={ADMIN_PATH.FLIGHT.LIST}
					path={ADMIN_PATH.FLIGHT.LIST}
					label={'Quản lý chuyến bay'}
					icon={<AirplaneInFlight className={classes.icon} />}
					header
				></MenuItem>
				<List className={classes.nested}>
					<MenuItem
						key={ADMIN_PATH.FLIGHT.LIST}
						path={ADMIN_PATH.FLIGHT.LIST}
						label={'Danh sách chuyến bay'}
					></MenuItem>
					<MenuItem
						key={ADMIN_PATH.FLIGHT.ADD}
						path={ADMIN_PATH.FLIGHT.ADD}
						label={'Thêm chuyến bay'}
					></MenuItem>
				</List>
			</Box>

			<Box aria-label="manage-schedule-group" component="nav">
				<MenuItem
					key={ADMIN_PATH.SCHEDULE.LIST}
					path={ADMIN_PATH.SCHEDULE.LIST}
					label={'Quản lý lịch bay'}
					icon={<Calendar className={classes.icon} />}
					header
				></MenuItem>
				<List className={classes.nested}>
					<MenuItem
						key={ADMIN_PATH.SCHEDULE.LIST}
						path={ADMIN_PATH.SCHEDULE.LIST}
						label={'Danh sách lịch bay'}
					></MenuItem>
				</List>
			</Box>

			<Box aria-label="manage-revenue-group" component="nav">
				<MenuItem
					key={ADMIN_PATH.REVENUE.FLIGHT}
					path={ADMIN_PATH.REVENUE.FLIGHT}
					label={'Quản lý Doanh thu'}
					icon={<ChartPieSlice className={classes.icon} />}
					header
				></MenuItem>
				<List className={classes.nested}>
					<MenuItem
						key={ADMIN_PATH.REVENUE.FLIGHT}
						path={ADMIN_PATH.REVENUE.FLIGHT}
						label={'Doanh thu tháng'}
					></MenuItem>
					<MenuItem
						key={ADMIN_PATH.REVENUE.YEAR}
						path={ADMIN_PATH.REVENUE.YEAR}
						label={'Doanh thu năm'}
					></MenuItem>
				</List>
			</Box>

			<Box aria-label="manage-setting-group" component="nav">
				<MenuItem
					key={ADMIN_PATH.SETTING.LIST}
					path={ADMIN_PATH.SETTING.LIST}
					label={'Quản lý Cài đặt'}
					icon={<GearSix className={classes.icon} />}
					header
				></MenuItem>
				<List className={classes.nested}>
					<MenuItem
						key={ADMIN_PATH.SETTING.LIST}
						path={ADMIN_PATH.SETTING.LIST}
						label={'Danh sách Cài đặt'}
					/>
				</List>
			</Box>
		</List>
	);
};
