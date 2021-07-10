import { createTheme } from '@material-ui/core/styles';
import { Shadows } from '@material-ui/core/styles/shadows';

export const theme = createTheme({
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				'*': {
					margin: 0,
					padding: 0,
					'box-sizing': 'inherit'
				},

				html: {
					'font-size': '100%',
					'box-sizing': ' border-box'
				},

				body: {
					'font-family': 'Roboto, sans-serif',
					'line-height': '1.7'
				},

				'::-webkit-scrollbar': {
					width: '10px'
				},

				'::-webkit-scrollbar-track': {
					'border-radius': '10px'
				},

				'::-webkit-scrollbar-thumb': {
					'border-radius': '10px',
					'background-color': 'rgba(0, 0, 0, 0.2)'
				},

				'::-webkit-scrollbar-track-piece': {
					'background-color': 'transparent'
				}
			}
		},
		MuiButtonBase: {
			defaultProps: {
				disableRipple: true
			}
		},
		MuiLink: {
			styleOverrides: {
				root: {
					textDecoration: 'none'
				}
			}
		}
	},
	shadows: Array(25).fill('none') as Shadows,
	spacing: 8,
	palette: {
		primary: {
			main: '#3b82f6',
			lighter: '#dbeafe',
			light: '#60a5fa',
			dark: '#2563eb',
			darker: '#1d4ed8',
			contrastText: '#fff'
		},
		secondary: {
			main: '#f97316',
			lighter: '#ffedd5',
			light: '#fb923c',
			dark: '#ea580c',
			darker: '#c2410c',
			contrastText: '#fff'
		},
		background: { default: '#F3F4F6 ', paper: '#fff', footer: '#374151' },
		text: { primary: '#111827', secondary: '#9CA3AF', contrast: '#fff' }
	},
	typography: {
		fontFamily: 'Roboto'
	}
});
