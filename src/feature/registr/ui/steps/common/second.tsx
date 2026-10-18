import { applyStepErrors } from '@/feature/registr/lib/registration-form/apply-step-errors'
import { RegistrationFormValues } from '@/feature/registr/lib/registration-form/types'
import { useRegistrationWizard } from '@/feature/registr/lib/registration-wizard/context'
import { validateCredentialsStep } from '@/feature/registr/lib/validation/credentials-step'
import { StyledButton } from '@/shared/ui/Button'
import { StyledInput } from '@/shared/ui/Input'
import { Controller, useFormContext } from 'react-hook-form'
import { View } from 'react-native'

import { Field } from '../shared/field'
import { stepFormStyles } from '../shared/styles'

export default function CredentialsRegistrationStep() {
	const { control, getValues, setError, clearErrors } =
		useFormContext<RegistrationFormValues>()
	const { setCurrentStep } = useRegistrationWizard()

	const handlePressNext = () => {
		const values = getValues()
		const validation = validateCredentialsStep({
			name: values.name,
			password: values.password,
			confirmPassword: values.confirmPassword,
		})

		if (!validation.isValid) {
			applyStepErrors(setError, validation.errors)
			return
		}

		clearErrors()
		setCurrentStep(2)
	}

	return (
		<>
			<View style={stepFormStyles.form}>
				<Controller
					control={control}
					name='name'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledInput
								placeholder='Имя'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('name')
								}}
								autoCapitalize='words'
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='password'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledInput
								password
								placeholder='Пароль'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('password')
								}}
								secureTextEntry
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='confirmPassword'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledInput
								password
								placeholder='Подтверждение пароля'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('confirmPassword')
								}}
								secureTextEntry
							/>
						</Field>
					)}
				/>
			</View>
			<StyledButton full onPress={handlePressNext}>
				Далее
			</StyledButton>
		</>
	)
}
