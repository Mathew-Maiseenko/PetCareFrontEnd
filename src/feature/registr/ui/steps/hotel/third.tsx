import { useFinishRegistration } from '@/feature/registr/lib/finish-registration'
import { applyStepErrors } from '@/feature/registr/lib/registration-form/apply-step-errors'
import { RegistrationFormValues } from '@/feature/registr/lib/registration-form/types'
import { validateHotelStep } from '@/feature/registr/lib/validation/hotel-step'
import { StyledButton } from '@/shared/ui/Button'
import { StyledInput } from '@/shared/ui/Input'
import { StyledToggle } from '@/shared/ui/Toggle'
import { Controller, useFormContext } from 'react-hook-form'
import { View } from 'react-native'

import { Field } from '../shared/field'
import { stepFormStyles } from '../shared/styles'

export default function HotelRegistrationStep() {
	const { control, getValues, setError, clearErrors } =
		useFormContext<RegistrationFormValues>()
	const finishRegistration = useFinishRegistration()

	const handleCreate = () => {
		const values = getValues()
		const validation = validateHotelStep({
			hotelName: values.hotelName,
			address: values.address,
			cost: values.hotelCost,
		})

		if (!validation.isValid) {
			const errors = { ...validation.errors }
			if (errors.cost) {
				setError('hotelCost', { type: 'manual', message: errors.cost })
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
					name='hotelName'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledInput
								placeholder='Название гостиницы'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('hotelName')
								}}
								autoCapitalize='words'
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='address'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledInput
								placeholder='Адрес гостиницы'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('address')
								}}
								autoCapitalize='sentences'
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='hotelCost'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledInput
								placeholder='Стоимость услуг (опционально)'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('hotelCost')
								}}
								keyboardType='default'
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='worksByContract'
					render={({ field: { value, onChange } }) => (
						<StyledToggle
							label='Работа по договору'
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
