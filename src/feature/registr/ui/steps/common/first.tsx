import { UserCountry, UserRole } from '@/entity/user/types'
import { userRolesData } from '@/feature/registr/data'
import {
	FirstStepField,
	validateFirstStep,
} from '@/feature/registr/lib/validation/first-step'
import { useFieldErrors } from '@/feature/registr/lib/validation/use-field-errors'
import { useRegistrationStore } from '@/feature/registr/model'
import { StyledButton } from '@/shared/ui/Button'
import CheckboxList from '@/shared/ui/CheckboxList'
import { StyledInput } from '@/shared/ui/Input'
import { StyledSelectInput } from '@/shared/ui/SelectInput'
import { useState } from 'react'
import { View } from 'react-native'

import { Field } from '../shared/field'
import { stepFormStyles } from '../shared/styles'

export default function CommonRegistrationStep() {
	const { phone, setPhone, setCurrentRole, setCurrentCountry, setCurrentStep } =
		useRegistrationStore()
	const [selectedCountryLocal, setSelectedCountryLocal] = useState<UserCountry>(
		UserCountry.Belarus,
	)
	const [selectedRoleId, setSelectedRoleId] = useState(0)
	const [localPhone, setLocalPhone] = useState(phone)
	const { errors, setErrors, updateField } = useFieldErrors<FirstStepField>()

	const handlePressNext = () => {
		const validation = validateFirstStep({
			selectedRoleId,
			country: selectedCountryLocal,
			phone: localPhone,
		})

		if (!validation.isValid) {
			setErrors(validation.errors)
			return
		}

		setErrors({})

		const selectedRole =
			userRolesData.find(value => value.id === selectedRoleId)?.value ||
			UserRole.PET_OWNER

		setCurrentRole(selectedRole)
		setCurrentCountry(selectedCountryLocal)
		setPhone(localPhone.trim())
		setCurrentStep(1)
	}

	return (
		<>
			<View style={stepFormStyles.form}>
				<Field error={errors.role}>
					<CheckboxList
						data={userRolesData}
						selectedId={selectedRoleId}
						onOptionSelect={updateField('role', setSelectedRoleId)}
					/>
				</Field>
				<StyledSelectInput
					options={Object.values(UserCountry)}
					selectedValue={selectedCountryLocal}
					onSelectValue={setSelectedCountryLocal}
					placeholder='Страна'
				/>
				<Field error={errors.phone}>
					<StyledInput
						placeholder='+375 (44) 99 999 99'
						value={localPhone}
						onChangeText={updateField('phone', setLocalPhone)}
						keyboardType='phone-pad'
					/>
				</Field>
			</View>
			<StyledButton full disabled={false} onPress={handlePressNext}>
				Далее
			</StyledButton>
		</>
	)
}
