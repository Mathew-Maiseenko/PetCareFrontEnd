import { ProfileSetupFormValues } from '@/feature/profile/lib/profile-setup/types'
import { Colors } from '@/shared/styles'
import { useFormContext, useWatch } from 'react-hook-form'
import { Text, TextInput, View } from 'react-native'

import { profileSetupStyles } from './profile-setup-styles'

export function DescriptionStep() {
	const { control, setValue } = useFormContext<ProfileSetupFormValues>()
	const aboutDescription = useWatch({
		control,
		name: 'aboutDescription',
		defaultValue: '',
	})

	return (
		<View style={profileSetupStyles.descriptionStep}>
			<Text style={profileSetupStyles.stepTitle}>Описание</Text>
			<Text style={profileSetupStyles.stepSubtitle}>
				Расскажите немного о себе: с какими породами работаете и т.д.
			</Text>
			<TextInput
				style={profileSetupStyles.descriptionInput}
				value={aboutDescription}
				onChangeText={text =>
					setValue('aboutDescription', text, {
						shouldDirty: true,
						shouldTouch: true,
					})
				}
				placeholder='Напишите о себе...'
				placeholderTextColor={Colors.placeholder}
				multiline
				textAlignVertical='top'
			/>
		</View>
	)
}
