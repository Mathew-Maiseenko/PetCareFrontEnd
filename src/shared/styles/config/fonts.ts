import { Platform } from 'react-native'

const nativeFonts = {
	sans: 'Nunito_500Medium',
	sansBold: 'Nunito_700Bold',
	serif: 'ui-serif',
	rounded: 'ui-rounded',
	mono: 'ui-monospace',
}

export const Fonts = Platform.select({
	ios: nativeFonts,
	android: nativeFonts,
	web: {
		sans: 'Nunito_500Medium',
		sansBold: 'Nunito_700Bold',
		serif: 'var(--font-serif)',
		rounded: 'var(--font-rounded)',
		mono: 'var(--font-mono)',
	},
	default: nativeFonts,
})
