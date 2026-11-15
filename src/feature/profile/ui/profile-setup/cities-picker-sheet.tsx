import { toggleCityDraft } from '@/feature/profile/lib/profile-setup/city-selection'
import { CITY_OPTIONS } from '@/feature/profile/lib/profile-setup/types'
import { BottomSheet } from '@/shared/ui/BottomSheet'
import { StyledButton } from '@/shared/ui/Button'
import Checkbox from '@/shared/ui/Checkbox'
import CloseIcon from '@/shared/ui/Icons/Close'
import { useEffect, useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { profileSetupStyles } from './profile-setup-styles'

type CitiesPickerSheetProps = {
	visible: boolean
	selectedCities: string[]
	onClose: () => void
	onConfirm: (cities: string[]) => void
}

export function CitiesPickerSheet({
	visible,
	selectedCities,
	onClose,
	onConfirm,
}: CitiesPickerSheetProps) {
	const [draft, setDraft] = useState<string[]>([])

	useEffect(() => {
		if (visible) {
			setDraft(selectedCities)
		}
	}, [visible, selectedCities])

	const handleToggle = (city: string) => {
		setDraft(current => toggleCityDraft(current, city))
	}

	const handleConfirm = () => {
		onConfirm(draft)
		onClose()
	}

	return (
		<BottomSheet visible={visible} onClose={onClose}>
			<View style={profileSetupStyles.sheetRoot}>
				<View style={profileSetupStyles.sheetHeader}>
					<Text style={profileSetupStyles.sheetTitle}>Выберите город</Text>
					<Pressable
						onPress={onClose}
						hitSlop={8}
						style={profileSetupStyles.sheetClose}
					>
						<CloseIcon width={24} height={24} />
					</Pressable>
				</View>

				<ScrollView
					style={profileSetupStyles.sheetList}
					contentContainerStyle={profileSetupStyles.sheetListContent}
					showsVerticalScrollIndicator={false}
				>
					{CITY_OPTIONS.map(city => (
						<Pressable
							key={city}
							style={profileSetupStyles.sheetRow}
							onPress={() => handleToggle(city)}
						>
							<Text style={profileSetupStyles.sheetRowLabel}>{city}</Text>
							<View pointerEvents='none'>
								<Checkbox
									value={draft.includes(city)}
									onValueChange={() => {}}
									size={26}
									style={{ borderRadius: 5 }}
								/>
							</View>
						</Pressable>
					))}
				</ScrollView>

				<View style={profileSetupStyles.sheetFooter}>
					<StyledButton full onPress={handleConfirm}>
						Выбрать
					</StyledButton>
				</View>
			</View>
		</BottomSheet>
	)
}
