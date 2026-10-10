import { experienceOptions } from '@/feature/registr/data'
import { parseCost } from '@/feature/registr/lib/parsers/cost'
import { parseExperienceYears } from '@/feature/registr/lib/parsers/experience'
import {
	SitterStepField,
	validateSitterStep,
} from '@/feature/registr/lib/validation/sitter-step'
import { useFieldErrors } from '@/feature/registr/lib/validation/use-field-errors'
import { useRegistrationStore } from '@/feature/registr/model'
import { StyledButton } from '@/shared/ui/Button'
import { StyledInput } from '@/shared/ui/Input'
import { StyledSelectInput } from '@/shared/ui/SelectInput'
import { StyledToggle } from '@/shared/ui/Toggle'
import { useState } from 'react'
import { View } from 'react-native'

import { Field } from '../shared/field'
import { stepFormStyles } from '../shared/styles'

const formatExperience = (years: number) => {
	if (years <= 0) {
		return ''
	}

	const option = experienceOptions.find(item => item.startsWith(String(years)))

	return option ?? `${years} лет`
}

export default function SitterRegistrationStep() {
	const { sitterData, setSitterData, completeRegistration } =
		useRegistrationStore()

	const [experience, setExperience] = useState(
		formatExperience(sitterData.experienceYears),
	)
	const [cost, setCost] = useState(
		sitterData.cost !== undefined ? `${sitterData.cost} р/час` : '',
	)
	const [hasEducation, setHasEducation] = useState(sitterData.hasEducation)
	const { errors, setErrors, updateField } = useFieldErrors<SitterStepField>()

	const handleCreate = () => {
		const validation = validateSitterStep({ experience, cost })

		if (!validation.isValid) {
			setErrors(validation.errors)
			return
		}

		setErrors({})

		setSitterData({
			experienceYears: parseExperienceYears(experience),
			cost: parseCost(cost),
			hasEducation,
		})

		completeRegistration()
	}

	return (
		<>
			<View style={stepFormStyles.form}>
				<Field error={errors.experience}>
					<StyledSelectInput
						options={[...experienceOptions]}
						selectedValue={experience}
						onSelectValue={updateField('experience', setExperience)}
						placeholder='Ваш опыт'
					/>
				</Field>
				<Field error={errors.cost}>
					<StyledInput
						placeholder='Стоимость услуг (опционально)'
						value={cost}
						onChangeText={updateField('cost', setCost)}
						keyboardType='default'
					/>
				</Field>
				<StyledToggle
					label='Образование'
					value={hasEducation}
					onValueChange={setHasEducation}
				/>
			</View>
			<StyledButton full onPress={handleCreate}>
				Создать
			</StyledButton>
		</>
	)
}
