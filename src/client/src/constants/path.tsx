export const PATH = {
	HOME: '/',
	LOGIN: '/login',
	REGISTER: '/register',
	FLIGHT: '/flights'
};

export const ADMIN_PATH = {
	DASHBOARD: '/admin',
	SCHEDULE: {
		BASE: '/admin/schedule',
		LIST: '/admin/schedule'
	},
	FLIGHT: {
		BASE: '/admin/flight',
		LIST: '/admin/flight',
		ADD: '/admin/flight/add'
	},
	AIRPORT: {
		BASE: '/admin/airport',
		LIST: '/admin/airport',
		ADD: '/admin/airport/add',
		LIST_INTER: '/admin/airport/inter',
		ADD_INTER: '/admin/airport/inter/add'
	},
	REVENUE: {
		BASE: '/admin/revenue',
		YEAR: '/admin/revenue/year',
		FLIGHT: '/admin/revenue/flight'
	},
	SETTING: { BASE: '/admin/setting', LIST: '/admin/setting' }
};
