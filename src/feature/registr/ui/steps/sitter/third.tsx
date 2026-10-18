import { experienceOptions } from '@/feature/registr/data'
import { useFinishRegistration } from '@/feature/registr/lib/finish-registration'
import { applyStepErrors } from '@/feature/registr/lib/registration-form/apply-step-errors'
import { RegistrationFormValues } from '@/feature/registr/lib/registration-form/types'
import { validateSitterStep } from '@/feature/registr/lib/validation/sitter-step'
import { StyledButton } from '@/shared/ui/Button'
import { StyledInput } from '@/shared/ui/Input'
import { StyledSelectInput } from '@/shared/ui/SelectInput'
import { StyledToggle } from '@/shared/ui/Toggle'
import { Controller, useFormContext } from 'react-hook-form'
import { View } from 'react-native'

import { Field } from '../shared/field'
import { stepFormStyles } from '../shared/styles'

export default function SitterRegistrationStep() {
	const { control, getValues, setError, clearErrors } =
		useFormContext<RegistrationFormValues>()
	const finishRegistration = useFinishRegistration()

	const handleCreate = () => {
		const values = getValues()
		const validation = validateSitterStep({
			experience: values.experience,
			cost: values.sitterCost,
		})

		if (!validation.isValid) {
			const errors = { ...validation.errors }
			if (errors.cost) {
				setError('sitterCost', { type: 'manual', message: errors.cost })
				delete errors.cost
			}
			applyStepErrors(setError, errors)
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
					name='experience'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledSelectInput
								options={[...experienceOptions]}
								selectedValue={value}
								onSelectValue={selected => {
									onChange(selected)
									clearErrors('experience')
								}}
								placeholder='Ваш опыт'
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='sitterCost'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledInput
								placeholder='Стоимость услуг (опционально)'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('sitterCost')
								}}
								keyboardType='default'
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='hasEducation'
					render={({ field: { value, onChange } }) => (
						<StyledToggle
							label='Образование'
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
