import { useUserProfileStore } from '@/entity/user/model'
import { ProviderRole, PetProfile } from '@/entity/user/types'
import { applyStepErrors } from '@/feature/registr/lib/registration-form/apply-step-errors'
import { StyledButton } from '@/shared/ui/Button'
import CloseIcon from '@/shared/ui/Icons/Close'
import TickIcon from '@/shared/ui/Icons/Tick'
import { Colors } from '@/shared/styles'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { useRouter } from 'expo-router'
import {
	KeyboardAvoidingView,
	Modal,
	Platform,
	Pressable,
	ScrollView,
	View,
} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { profilePetToFormValues } from '../lib/profile-pet-to-form'
import {
	ProfilePetEditFormValues,
	validateProfilePetEditForm,
} from '../lib/validation/profile-pet-edit'
import { ProfileEditAvatar } from './profile-edit-avatar'
import { ProfileEditField } from './profile-edit-field'
import { profileEditStyles } from './profile-edit-styles'

type ProfileEditModalProps = {
	visible: boolean
	role: ProviderRole
	profile: PetProfile
	onClose: () => void
}
export function ProfilePetEditModal({
	visible,
	role,
	profile,
	onClose,
}: ProfileEditModalProps) {
	const updateProviderProfile = useUserProfileStore(
		state => state.updateProviderProfile,
	)

	const {
		control,
		handleSubmit,
		reset,
		setError,
		clearErrors,
		watch,
		setValue,
	} = useForm<ProfilePetEditFormValues>({
		defaultValues: profilePetToFormValues(profile),
		mode: 'onSubmit',
	})

	const avatarUri = watch('avatarUri')

	useEffect(() => {
		if (visible) {
			reset(profilePetToFormValues(profile))
		}
	}, [visible, profile, reset])

	const handleSave = (values: ProfilePetEditFormValues) => {
		const validation = validateProfilePetEditForm(values)

		if (!validation.isValid) {
			applyStepErrors(setError, validation.errors)
			return
		}

		clearErrors()

		updateProviderProfile(role, {
			name: values.name.trim(),
			type: values.type.trim(),
			breed: values.breed.trim(),
			age: values.age.trim(),
			avatarUri: values.avatarUri,
		} as any)

		onClose()
	}

	const router = useRouter()
	const handleAddInfo = () => {
		onClose()
		router.push('/petowner/profile/petprofile/information')
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
								name='name'
								label='Кличка'
								autoCapitalize='words'
								onClearError={() => clearErrors('name')}
							/>
							<ProfileEditField
								control={control}
								name='type'
								label='Какой питомец?'
								placeholder='Какой у Вас питомец?'
							/>
							<ProfileEditField
								control={control}
								name='breed'
								label='Порода питомца'
								onClearError={() => clearErrors('breed')}
							/>
							<ProfileEditField
								control={control}
								name='age'
								label='Возраст питомца'
								onClearError={() => clearErrors('age')}
							/>
						</View>
					</ScrollView>

					<View style={profileEditStyles.footer}>
						<StyledButton onPress={handleAddInfo}>
							Дополнить информацию
						</StyledButton>
					</View>
				</KeyboardAvoidingView>
			</SafeAreaView>
		</Modal>
	)
}
