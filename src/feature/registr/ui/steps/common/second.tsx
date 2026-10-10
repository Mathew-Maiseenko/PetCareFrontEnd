import {
	CredentialsStepField,
	validateCredentialsStep,
} from '@/feature/registr/lib/validation/credentials-step'
import { useFieldErrors } from '@/feature/registr/lib/validation/use-field-errors'
import { useRegistrationStore } from '@/feature/registr/model'
import { StyledButton } from '@/shared/ui/Button'
import { StyledInput } from '@/shared/ui/Input'
import { useState } from 'react'
import { View } from 'react-native'

import { Field } from '../shared/field'
import { stepFormStyles } from '../shared/styles'

export default function CredentialsRegistrationStep() {
	const {
		name,
		password,
		confirmPassword,
		setName,
		setPassword,
		setConfirmPassword,
		setCurrentStep,
	} = useRegistrationStore()

	const [localName, setLocalName] = useState(name)
	const [localPassword, setLocalPassword] = useState(password)
	const [localConfirmPassword, setLocalConfirmPassword] =
		useState(confirmPassword)
	const { errors, setErrors, updateField } =
		useFieldErrors<CredentialsStepField>()

	const handlePressNext = () => {
		const validation = validateCredentialsStep({
			name: localName,
			password: localPassword,
			confirmPassword: localConfirmPassword,
		})

		if (!validation.isValid) {
			setErrors(validation.errors)
			return
		}

		setErrors({})

		setName(localName.trim())
		setPassword(localPassword)
		setConfirmPassword(localConfirmPassword)

		setCurrentStep(2)
	}

	return (
		<>
			<View style={stepFormStyles.form}>
				<Field error={errors.name}>
					<StyledInput
						placeholder='Имя'
						value={localName}
						onChangeText={updateField('name', setLocalName)}
						autoCapitalize='words'
					/>
				</Field>
				<Field error={errors.password}>
					<StyledInput
						password
						placeholder='Пароль'
						value={localPassword}
						onChangeText={updateField('password', setLocalPassword)}
						secureTextEntry
					/>
				</Field>
				<Field error={errors.confirmPassword}>
					<StyledInput
						password
						placeholder='Подтверждение пароля'
						value={localConfirmPassword}
						onChangeText={updateField(
							'confirmPassword',
							setLocalConfirmPassword,
						)}
						secureTextEntry
					/>
				</Field>
			</View>
			<StyledButton full onPress={handlePressNext}>
				Далее
			</StyledButton>
		</>
	)
}
