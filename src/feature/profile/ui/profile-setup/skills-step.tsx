import { ProfileSetupFormValues } from '@/feature/profile/lib/profile-setup/types'
import { StyledButton } from '@/shared/ui/Button'
import { useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { Text, View } from 'react-native'

import { profileSetupStyles } from './profile-setup-styles'
import { SelectionChip } from './selection-chip'
import { SkillsPickerSheet } from './skills-picker-sheet'

export function SkillsStep() {
	const { control, setValue, getValues } =
		useFormContext<ProfileSetupFormValues>()
	const skills = useWatch({
		control,
		name: 'skills',
		defaultValue: [],
	})
	const [isPickerOpen, setIsPickerOpen] = useState(false)

	const removeSkill = (skill: string) => {
		const next = getValues('skills').filter(item => item !== skill)
		setValue('skills', next, { shouldDirty: true, shouldTouch: true })
	}

	return (
		<View>
			<Text style={profileSetupStyles.stepTitle}>Мои навыки</Text>
			<Text style={profileSetupStyles.stepSubtitle}>
				Нам будет полезна эта информация
			</Text>

			{skills.length > 0 ? (
				<View style={profileSetupStyles.chips}>
					{skills.map(skill => (
						<SelectionChip
							key={skill}
							label={skill}
							onRemove={() => removeSkill(skill)}
						/>
					))}
				</View>
			) : null}

			<StyledButton full onPress={() => setIsPickerOpen(true)}>
				Добавьте навык
			</StyledButton>

			<SkillsPickerSheet
				visible={isPickerOpen}
				selectedSkills={skills}
				onClose={() => setIsPickerOpen(false)}
				onConfirm={nextSkills =>
					setValue('skills', nextSkills, {
						shouldDirty: true,
						shouldTouch: true,
					})
				}
			/>
		</View>
	)
}
