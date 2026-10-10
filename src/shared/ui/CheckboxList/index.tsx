import { Text, View } from 'react-native'

import Checkbox from '../Checkbox'

import { styles } from './styles'
import { CheckboxListProps } from './types'

export default function CheckboxList({
	data,
	onOptionSelect,
	selectedId,
}: CheckboxListProps) {
	return (
		<View style={styles.list}>
			{data.map(({ label, id }) => (
				<View key={id} style={styles.optionContainer}>
					<Text style={styles.optionText}>{label}</Text>
					<Checkbox
						onValueChange={() => onOptionSelect(id)}
						value={id === selectedId}
					/>
				</View>
			))}
		</View>
	)
}
