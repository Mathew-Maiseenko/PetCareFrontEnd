import { UserCountry } from '@/entity/user/types'
import { userRolesData } from '@/feature/registr/data'
import { RegistrationFormValues } from '@/feature/registr/lib/registration-form/types'
import { useRegistrationWizard } from '@/feature/registr/lib/registration-wizard/context'
import { validateFirstStep } from '@/feature/registr/lib/validation/first-step'
import { StyledButton } from '@/shared/ui/Button'
import CheckboxList from '@/shared/ui/CheckboxList'
import { StyledInput } from '@/shared/ui/Input'
import { StyledSelectInput } from '@/shared/ui/SelectInput'
import { Controller, useFormContext } from 'react-hook-form'
import { View } from 'react-native'

import { Field } from '../shared/field'
import { stepFormStyles } from '../shared/styles'

export default function CommonRegistrationStep() {
	const { control, getValues, setError, clearErrors } =
		useFormContext<RegistrationFormValues>()
	const { setCurrentStep } = useRegistrationWizard()

	const handlePressNext = () => {
		const values = getValues()
		const validation = validateFirstStep({
			selectedRoleId: values.selectedRoleId,
			country: values.country,
			phone: values.phone,
		})

		if (!validation.isValid) {
			if (validation.errors.role) {
				setError('selectedRoleId', {
					type: 'manual',
					message: validation.errors.role,
				})
			}
			if (validation.errors.phone) {
				setError('phone', {
					type: 'manual',
					message: validation.errors.phone,
				})
			}
			return
		}

		clearErrors()
		setCurrentStep(1)
	}

	return (
		<>
			<View style={stepFormStyles.form}>
				<Controller
					control={control}
					name='selectedRoleId'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<CheckboxList
								data={userRolesData}
								selectedId={value}
								onOptionSelect={id => {
									onChange(id)
									clearErrors('selectedRoleId')
								}}
							/>
						</Field>
					)}
				/>
				<Controller
					control={control}
					name='country'
					render={({ field: { value, onChange } }) => (
						<StyledSelectInput
							options={Object.values(UserCountry)}
							selectedValue={value}
							onSelectValue={onChange}
							placeholder='Страна'
						/>
					)}
				/>
				<Controller
					control={control}
					name='phone'
					render={({ field: { value, onChange }, fieldState }) => (
						<Field error={fieldState.error?.message}>
							<StyledInput
								placeholder='+375 (44) 99 999 99'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('phone')
								}}
								keyboardType='phone-pad'
							/>
						</Field>
					)}
				/>
			</View>
			<StyledButton full disabled={false} onPress={handlePressNext}>
				Далее
			</StyledButton>
		</>
	)
}
