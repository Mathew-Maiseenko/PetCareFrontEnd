import { parseCost } from '@/feature/registr/lib/parsers/cost'
import {
	HotelStepField,
	validateHotelStep,
} from '@/feature/registr/lib/validation/hotel-step'
import { useFinishRegistration } from '@/feature/registr/lib/finish-registration'
import { usePersistOnUnmount } from '@/feature/registr/lib/use-persist-on-unmount'
import { useFieldErrors } from '@/feature/registr/lib/validation/use-field-errors'
import { useRegistrationStore } from '@/feature/registr/model'
import { StyledButton } from '@/shared/ui/Button'
import { StyledInput } from '@/shared/ui/Input'
import { StyledToggle } from '@/shared/ui/Toggle'
import { useState } from 'react'
import { View } from 'react-native'

import { Field } from '../shared/field'
import { stepFormStyles } from '../shared/styles'

export default function HotelRegistrationStep() {
	const { hotelData, setHotelData } = useRegistrationStore()
	const finishRegistration = useFinishRegistration()

	const [hotelName, setHotelName] = useState(hotelData.hotelName)
	const [address, setAddress] = useState(hotelData.address)
	const [cost, setCost] = useState(
		hotelData.cost !== undefined ? String(hotelData.cost) : '',
	)
	const [worksByContract, setWorksByContract] = useState(
		hotelData.worksByContract,
	)
	const { errors, setErrors, updateField } = useFieldErrors<HotelStepField>()

	usePersistOnUnmount(() => {
		setHotelData({
			hotelName,
			address,
			cost: cost.trim() ? parseCost(cost) : undefined,
			worksByContract,
		})
	})

	const handleCreate = () => {
		const validation = validateHotelStep({ hotelName, address, cost })

		if (!validation.isValid) {
			setErrors(validation.errors)
			return
		}

		setErrors({})

		setHotelData({
			hotelName: hotelName.trim(),
			address: address.trim(),
			cost: cost.trim() ? parseCost(cost) : undefined,
			worksByContract,
		})

		finishRegistration()
	}

	return (
		<>
			<View style={stepFormStyles.form}>
				<Field error={errors.hotelName}>
					<StyledInput
						placeholder='Название гостиницы'
						value={hotelName}
						onChangeText={updateField('hotelName', setHotelName)}
						autoCapitalize='words'
					/>
				</Field>
				<Field error={errors.address}>
					<StyledInput
						placeholder='Адрес гостиницы'
						value={address}
						onChangeText={updateField('address', setAddress)}
						autoCapitalize='sentences'
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
					label='Работа по договору'
					value={worksByContract}
					onValueChange={setWorksByContract}
				/>
			</View>
			<StyledButton full onPress={handleCreate}>
				Создать
			</StyledButton>
		</>
	)
}
