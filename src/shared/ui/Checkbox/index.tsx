import { useState } from 'react'
import { Pressable } from 'react-native'

import { Colors } from '@/shared/styles'

import TickIcon from '../Icons/Tick'

import { styles } from './styles'
import { CheckboxProps } from './types'

export default function Checkbox({
	value,
	onValueChange,
	size = 32,
	style,
}: CheckboxProps) {
	const [internalValue, setInternalValue] = useState(false)
	const isChecked = value !== undefined ? value : internalValue

	const handlePress = () => {
		const newValue = !isChecked
		if (value === undefined) {
			setInternalValue(newValue)
		}
		onValueChange?.(newValue)
	}

	return (
		<Pressable
			style={({ pressed }) => [
				styles.checkbox,
				{
					width: size,
					height: size,
					borderColor: Colors.placeholder,
					borderWidth: isChecked ? 0 : 1,
					backgroundColor: isChecked
						? Colors.buttonPrimary
						: Colors.backgroundPrimary,
					opacity: pressed ? 0.7 : 1,
				},
				style,
			]}
			onPress={handlePress}
		>
			{isChecked && <TickIcon />}
		</Pressable>
	)
}
