import { createTheme, ThemeOptions } from '@material-ui/core/styles';
import { Shadows } from '@material-ui/core/styles/shadows';

export const theme = createTheme({
	components: {
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
		background: { default: '#fff', paper: '#F3F4F6', footer: '#374151' },
		text: { primary: '#111827', secondary: '#9CA3AF', contrast: '#fff' }
	},
	typography: {
		fontFamily: 'Roboto'
	}
});
