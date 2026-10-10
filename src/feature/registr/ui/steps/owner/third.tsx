import { petBreeds } from '@/feature/registr/data'
import { parseAge } from '@/feature/registr/lib/parsers/age'
import {
	OwnerStepField,
	validateOwnerStep,
} from '@/feature/registr/lib/validation/owner-step'
import { useFinishRegistration } from '@/feature/registr/lib/finish-registration'
import { usePersistOnUnmount } from '@/feature/registr/lib/use-persist-on-unmount'
import { useFieldErrors } from '@/feature/registr/lib/validation/use-field-errors'
import { useRegistrationStore } from '@/feature/registr/model'
import { StyledButton } from '@/shared/ui/Button'
import StarIcon from '@/shared/ui/Icons/Star'
import { StyledInput } from '@/shared/ui/Input'
import { StyledSelectInput } from '@/shared/ui/SelectInput'
import { StyledToggle } from '@/shared/ui/Toggle'
import { useState } from 'react'
import { View } from 'react-native'

import { Field } from '../shared/field'
import { stepFormStyles } from '../shared/styles'

export default function OwnerRegistrationStep() {
	const { ownerData, setOwnerData } = useRegistrationStore()
	const finishRegistration = useFinishRegistration()

	const [petType, setPetType] = useState(ownerData.petType)
	const [breed, setBreed] = useState(ownerData.breed)
	const [age, setAge] = useState(
		ownerData.age > 0 ? `${ownerData.age} лет` : '',
	)
	const [hasVaccination, setHasVaccination] = useState(ownerData.hasVaccination)
	const { errors, setErrors, updateField } = useFieldErrors<OwnerStepField>()

	usePersistOnUnmount(() => {
		setOwnerData({
			petType,
			breed,
			age: parseAge(age),
			hasVaccination,
		})
	})

	const handleCreate = () => {
		const validation = validateOwnerStep({ petType, breed, age })

		if (!validation.isValid) {
			setErrors(validation.errors)
			return
		}

		setErrors({})

		setOwnerData({
			petType: petType.trim(),
			breed,
			age: parseAge(age),
			hasVaccination,
		})

		finishRegistration()
	}

	return (
		<>
			<View style={stepFormStyles.form}>
				<Field error={errors.petType}>
					<StyledInput
						placeholder='Введите ваше животное'
						value={petType}
						onChangeText={updateField('petType', setPetType)}
						autoCapitalize='sentences'
					/>
				</Field>
				<Field error={errors.breed}>
					<StyledSelectInput
						options={[...petBreeds]}
						selectedValue={breed}
						onSelectValue={updateField('breed', setBreed)}
						placeholder='Порода'
					/>
				</Field>
				<Field error={errors.age}>
					<StyledInput
						placeholder='Возраст питомца'
						value={age}
						onChangeText={updateField('age', setAge)}
						keyboardType='default'
					/>
				</Field>
				<StyledToggle
					label='Есть ли прививка'
					icon={<StarIcon />}
					value={hasVaccination}
					onValueChange={setHasVaccination}
				/>
			</View>
			<StyledButton full onPress={handleCreate}>
				Создать
			</StyledButton>
		</>
	)
}
