import { toggleSkillDraft } from '@/feature/profile/lib/profile-setup/skill-selection'
import { SKILL_OPTIONS } from '@/feature/profile/lib/profile-setup/types'
import { BottomSheet } from '@/shared/ui/BottomSheet'
import { StyledButton } from '@/shared/ui/Button'
import Checkbox from '@/shared/ui/Checkbox'
import CloseIcon from '@/shared/ui/Icons/Close'
import { useEffect, useState } from 'react'
import { Pressable, ScrollView, Text, View } from 'react-native'

import { profileSetupStyles } from './profile-setup-styles'

type SkillsPickerSheetProps = {
	visible: boolean
	selectedSkills: string[]
	onClose: () => void
	onConfirm: (skills: string[]) => void
}

export function SkillsPickerSheet({
	visible,
	selectedSkills,
	onClose,
	onConfirm,
}: SkillsPickerSheetProps) {
	const [draft, setDraft] = useState<string[]>([])

	useEffect(() => {
		if (visible) {
			setDraft(selectedSkills)
		}
	}, [visible, selectedSkills])

	const handleToggle = (skill: string) => {
		setDraft(current => toggleSkillDraft(current, skill))
	}

	const handleConfirm = () => {
		onConfirm(draft)
		onClose()
	}

	return (
		<BottomSheet visible={visible} onClose={onClose}>
			<View style={profileSetupStyles.sheetRoot}>
				<View style={profileSetupStyles.sheetHeader}>
					<Text style={profileSetupStyles.sheetTitle}>Выбрать навык</Text>
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
					{SKILL_OPTIONS.map(skill => (
						<Pressable
							key={skill}
							style={profileSetupStyles.sheetRow}
							onPress={() => handleToggle(skill)}
						>
							<Text style={profileSetupStyles.sheetRowLabel}>{skill}</Text>
							<View pointerEvents='none'>
								<Checkbox
									value={draft.includes(skill)}
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
