import { ReactNode } from 'react'
import { Text, View } from 'react-native'

import { stepFormStyles } from './styles'

type FieldProps = {
	error?: string
	children: ReactNode
}

export function Field({ error, children }: FieldProps) {
	return (
		<View style={stepFormStyles.field}>
			{children}
			{error ? <Text style={stepFormStyles.error}>{error}</Text> : null}
		</View>
	)
}
