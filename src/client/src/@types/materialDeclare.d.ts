import {
	PaletteColor,
	PaletteColorOptions,
	ThemeOptions
} from '@material-ui/core/styles/createTheme';

declare module '@material-ui/core/styles/createPalette' {
	interface PaletteColor {
		lighter?: PaletteColor['main'];
		darker?: PaletteColor['main'];
	}

	interface PaletteColorOptions {
		lighter?: PaletteColor['main'];
		darker?: PaletteColorOptions['main'];
	}

	interface TypeBackground {
		footer?: TypeBackground['default'];
	}

	interface TypeText {
		contrast?: TypeText['primary'];
	}

	interface SimplePaletteColorOptions {
		lighter?: PaletteColor['main'];
		darker?: SimplePaletteColorOptions['main'];
	}
}
