import { StyledInput } from '@/shared/ui/Input'
import { Control, Controller, FieldPath, FieldValues } from 'react-hook-form'
import { Text, View } from 'react-native'

import { profileEditStyles } from './profile-edit-styles'

type ProfileEditFieldProps<T extends FieldValues> = {
	control: Control<T>
	name: FieldPath<T>
	label: string
	placeholder?: string
	keyboardType?: 'default' | 'phone-pad'
	autoCapitalize?: 'none' | 'words' | 'sentences'
	onClearError?: () => void
}

export function ProfileEditField<T extends FieldValues>({
	control,
	name,
	label,
	placeholder,
	keyboardType = 'default',
	autoCapitalize = 'sentences',
	onClearError,
}: ProfileEditFieldProps<T>) {
	return (
		<Controller
			control={control}
			name={name}
			render={({ field: { value, onChange }, fieldState }) => (
				<View style={profileEditStyles.field}>
					<Text style={profileEditStyles.label}>{label}</Text>
					<StyledInput
						placeholder={placeholder}
						value={value ?? ''}
						onChangeText={text => {
							onChange(text)
							onClearError?.()
						}}
						keyboardType={keyboardType}
						autoCapitalize={autoCapitalize}
					/>
					{fieldState.error?.message ? (
						<Text style={profileEditStyles.error}>
							{fieldState.error.message}
						</Text>
					) : null}
				</View>
			)}
		/>
	)
}
