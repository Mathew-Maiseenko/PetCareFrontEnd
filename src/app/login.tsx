import LogInScreen from '@/feature/log-in/ui'
import { Colors } from '@/shared/styles'
import { StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

export default function LoginRoute() {
	return (
		<SafeAreaView style={styles.main}>
			<LogInScreen />
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	main: {
		paddingHorizontal: 24,
		paddingTop: 24,
		paddingBottom: 56,
		flex: 1,
		width: '100%',
		justifyContent: 'flex-start',
		backgroundColor: Colors.backgroundPrimary,
	},
})
