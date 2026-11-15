import { ProfileSetupFormValues } from '@/feature/profile/lib/profile-setup/types'
import { StyledButton } from '@/shared/ui/Button'
import { useState } from 'react'
import { useFormContext, useWatch } from 'react-hook-form'
import { Text, View } from 'react-native'

import { CitiesPickerSheet } from './cities-picker-sheet'
import { profileSetupStyles } from './profile-setup-styles'
import { SelectionChip } from './selection-chip'

export function CitiesStep() {
	const { control, setValue, getValues } =
		useFormContext<ProfileSetupFormValues>()
	const cities = useWatch({
		control,
		name: 'cities',
		defaultValue: [],
	})
	const [isPickerOpen, setIsPickerOpen] = useState(false)

	const removeCity = (city: string) => {
		const next = getValues('cities').filter(item => item !== city)
		setValue('cities', next, { shouldDirty: true, shouldTouch: true })
	}

	return (
		<View>
			<Text style={profileSetupStyles.stepTitle}>Где Вы работаете</Text>
			<Text style={profileSetupStyles.stepSubtitle}>
				Выберите город, где Вы готовы работать
			</Text>

			{cities.length > 0 ? (
				<View style={profileSetupStyles.chips}>
					{cities.map(city => (
						<SelectionChip
							key={city}
							label={city}
							onRemove={() => removeCity(city)}
						/>
					))}
				</View>
			) : null}

			<StyledButton full onPress={() => setIsPickerOpen(true)}>
				Добавьте город
			</StyledButton>

			<CitiesPickerSheet
				visible={isPickerOpen}
				selectedCities={cities}
				onClose={() => setIsPickerOpen(false)}
				onConfirm={nextCities =>
					setValue('cities', nextCities, {
						shouldDirty: true,
						shouldTouch: true,
					})
				}
			/>
		</View>
	)
}
