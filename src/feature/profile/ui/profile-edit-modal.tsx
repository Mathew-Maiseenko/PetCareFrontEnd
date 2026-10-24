import { useUserProfileStore } from '@/entity/user/model'
import { ProviderRole, UserProfile } from '@/entity/user/types'
import { applyStepErrors } from '@/feature/registr/lib/registration-form/apply-step-errors'
import { StyledButton } from '@/shared/ui/Button'
import CloseIcon from '@/shared/ui/Icons/Close'
import TickIcon from '@/shared/ui/Icons/Tick'
import { Colors } from '@/shared/styles'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
	KeyboardAvoidingView,
	Modal,
	Platform,
	Pressable,
	ScrollView,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import {
	buildDisplayName,
	profileToFormValues,
} from '../lib/profile-to-form'
import {
	ProfileEditFormValues,
	validateProfileEditForm,
} from '../lib/validation/profile-edit'
import { ProfileEditAvatar } from './profile-edit-avatar'
import { ProfileEditField } from './profile-edit-field'
import { profileEditStyles } from './profile-edit-styles'

type ProfileEditModalProps = {
	visible: boolean
	role: ProviderRole
	profile: UserProfile
	onClose: () => void
}

export function ProfileEditModal({
	visible,
	role,
	profile,
	onClose,
}: ProfileEditModalProps) {
	const updateProviderProfile = useUserProfileStore(
		state => state.updateProviderProfile,
	)

	const { control, handleSubmit, reset, setError, clearErrors, watch, setValue } =
		useForm<ProfileEditFormValues>({
			defaultValues: profileToFormValues(profile),
			mode: 'onSubmit',
		})

	const avatarUri = watch('avatarUri')

	useEffect(() => {
		if (visible) {
			reset(profileToFormValues(profile))
		}
	}, [visible, profile, reset])

	const handleSave = (values: ProfileEditFormValues) => {
		const validation = validateProfileEditForm(values)

		if (!validation.isValid) {
			applyStepErrors(setError, validation.errors)
			return
		}

		clearErrors()

		updateProviderProfile(role, {
			firstName: values.firstName.trim(),
			birthDate: values.birthDate.trim(),
			phone: values.phone.trim(),
			avatarUri: values.avatarUri,
			name: buildDisplayName(values.firstName),
		})

		onClose()
	}

	return (
		<Modal
			visible={visible}
			animationType='slide'
			presentationStyle='fullScreen'
			onRequestClose={onClose}
		>
			<SafeAreaView style={profileEditStyles.screen} edges={['top', 'bottom']}>
				<KeyboardAvoidingView
					style={profileEditStyles.screen}
					behavior={Platform.OS === 'ios' ? 'padding' : undefined}
				>
					<View style={profileEditStyles.header}>
						<Pressable
							onPress={onClose}
							hitSlop={8}
							style={({ pressed }) => [
								profileEditStyles.headerButton,
								pressed && { opacity: 0.6 },
							]}
						>
							<CloseIcon width={22} height={22} />
						</Pressable>
						<Pressable
							onPress={handleSubmit(handleSave)}
							hitSlop={8}
							style={({ pressed }) => [
								profileEditStyles.headerButton,
								pressed && { opacity: 0.6 },
							]}
						>
							<TickIcon
								width={28}
								height={28}
								color={Colors.iconAccent}
								strokeWidth={2}
							/>
						</Pressable>
					</View>

					<ScrollView
						keyboardShouldPersistTaps='handled'
						contentContainerStyle={profileEditStyles.scrollContent}
					>
						<View style={profileEditStyles.avatarBlock}>
							<Controller
								control={control}
								name='avatarUri'
								render={() => (
									<ProfileEditAvatar
										avatarUri={avatarUri}
										onAvatarChange={uri => setValue('avatarUri', uri)}
									/>
								)}
							/>
						</View>

						<View style={profileEditStyles.form}>
							<ProfileEditField
								control={control}
								name='firstName'
								label='Имя'
								autoCapitalize='words'
								onClearError={() => clearErrors('firstName')}
							/>
							<ProfileEditField
								control={control}
								name='birthDate'
								label='Дата рождения'
								placeholder='01.01.2025'
							/>
							<ProfileEditField
								control={control}
								name='phone'
								label='Номер телефона'
								keyboardType='phone-pad'
								onClearError={() => clearErrors('phone')}
							/>
						</View>
					</ScrollView>

					<View style={profileEditStyles.footer}>
						<StyledButton full onPress={handleSubmit(handleSave)}>
							Заполнить профиль
						</StyledButton>
					</View>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</Modal>
	)
}
