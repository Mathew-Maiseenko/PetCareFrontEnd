import { petBreeds } from '@/feature/registr/data'
import { useFinishRegistration } from '@/feature/registr/lib/finish-registration'
import { RegistrationFormValues } from '@/feature/registr/lib/registration-form/types'
import { applyStepErrors } from '@/feature/registr/lib/registration-form/apply-step-errors'
import { validateOwnerStep } from '@/feature/registr/lib/validation/owner-step'
import { StyledButton } from '@/shared/ui/Button'
import StarIcon from '@/shared/ui/Icons/Star'
import { StyledInput } from '@/shared/ui/Input'
import { StyledSelectInput } from '@/shared/ui/SelectInput'
import { StyledToggle } from '@/shared/ui/Toggle'
import { Controller, useFormContext } from 'react-hook-form'
import { View } from 'react-native'

import { Field } from '../shared/field'
import { stepFormStyles } from '../shared/styles'

export default function OwnerRegistrationStep() {
	const { control, getValues, setError, clearErrors } =
		useFormContext<RegistrationFormValues>()
	const finishRegistration = useFinishRegistration()

	const handleCreate = () => {
		const values = getValues()
		const validation = validateOwnerStep({
			petType: values.petType,
			breed: values.breed,
			age: values.age,
		})

		if (!validation.isValid) {
			applyStepErrors(setError, validation.errors)
			return
		}

		clearErrors()
		finishRegistration()
	}

	return (
		<>
			<View style={stepFormStyles.form}>
				<Controller
					control={control}
					name='petType'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledInput
								placeholder='Введите ваше животное'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('petType')
								}}
								autoCapitalize='sentences'
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='breed'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledSelectInput
								options={[...petBreeds]}
								selectedValue={value}
								onSelectValue={selected => {
									onChange(selected)
									clearErrors('breed')
								}}
								placeholder='Порода'
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='age'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledInput
								placeholder='Возраст питомца'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('age')
								}}
								keyboardType='default'
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='hasVaccination'
					render={({ field: { value, onChange } }) => (
						<StyledToggle
							label='Есть ли прививка'
							icon={<StarIcon />}
							value={value}
							onValueChange={onChange}
						/>
					)}
				/>
			</View>
			<StyledButton full onPress={handleCreate}>
				Создать
			</StyledButton>
		</>
	)
}
