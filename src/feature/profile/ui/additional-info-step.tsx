import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import { ActionTag } from '@/shared/ui/ActionTag/undex'
import { ActionSelectorModal } from './action-selector-modal'
import { AditionalInfoStep } from '@/entity/aditional-info-step/type'
import { StyledButton } from '@/shared/ui/Button'

type StepProps = {
	config: AditionalInfoStep
}

export function AdditionalInfoSelectStep({
	config,
	selected,
	onChange,
}: StepProps & {
	selected: string[]
	onChange: (val: string[]) => void
}) {
	const [isModalOpen, setIsModalOpen] = useState(false)

	const handleToggle = (action: string) => {
		if (selected.includes(action)) onChange(selected.filter(a => a !== action))
		else onChange([...selected, action])
	}

	return (
		<View style={styles.container}>
			<Text style={styles.title}>{config.title}</Text>
			<Text style={styles.subtitle}>{config.subtitle}</Text>

			<View style={styles.tagsContainer}>
				{selected.map(action => (
					<ActionTag
						key={action}
						text={action}
						onRemove={() => handleToggle(action)}
					/>
				))}
			</View>

			<StyledButton
				full
				style={{ marginTop: 18 }}
				onPress={() => setIsModalOpen(true)}
			>
				Выбрать действия
			</StyledButton>

			<ActionSelectorModal
				visible={isModalOpen}
				options={config.options || []}
				selectedActions={selected}
				onToggleAction={handleToggle}
				onClose={() => setIsModalOpen(false)}
				onConfirm={() => setIsModalOpen(false)}
			/>
		</View>
	)
}

export function AdditionalStepTextStep({
	config,
	value,
	onChange,
}: StepProps & {
	value: string
	onChange: (val: string) => void
}) {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>{config.title}</Text>
			<Text style={styles.subtitle}>{config.subtitle}</Text>
			<TextInput
				style={styles.textInput}
				multiline
				value={value}
				onChangeText={onChange}
				textAlignVertical='top'
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container: { flex: 1 },
	title: {
		fontSize: 24,
		fontWeight: 'bold',
		color: '#000',
		marginBottom: 8,
	},
	subtitle: {
		fontSize: 12,
		color: '#9D9D9D',
		marginBottom: 25,
	},
	tagsContainer: {
		gap: 14,
	},
	textInput: {
		fontSize: 15,
		color: '#444444',
		minHeight: 150,
	},
})
