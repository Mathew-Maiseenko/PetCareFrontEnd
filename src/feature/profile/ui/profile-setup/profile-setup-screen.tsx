import { useUserProfileStore } from '@/entity/user/model'
import { ProviderRole } from '@/entity/user/types'
import { buildDescriptionPreview } from '@/feature/profile/lib/profile-setup/description-preview'
import { profileToSetupValues } from '@/feature/profile/lib/profile-setup/profile-to-setup'
import {
	ProfileSetupFormValues,
	ProfileSetupStep,
} from '@/feature/profile/lib/profile-setup/types'
import { StyledButton } from '@/shared/ui/Button'
import ArrowIcon from '@/shared/ui/Icons/Arrow'
import CloseIcon from '@/shared/ui/Icons/Close'
import { Colors } from '@/shared/styles'
import StepIndicator from '@/shared/ui/StepIndicator'
import { router } from 'expo-router'
import { useEffect, useState } from 'react'
import { FormProvider, useForm, useWatch } from 'react-hook-form'
import { Pressable, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { CitiesStep } from './cities-step'
import { DescriptionStep } from './description-step'
import { profileSetupStyles } from './profile-setup-styles'
import { SkillsStep } from './skills-step'

const TOTAL_STEPS = 3

type ProfileSetupScreenProps = {
	role: ProviderRole
}

export function ProfileSetupScreen({ role }: ProfileSetupScreenProps) {
	const profile = useUserProfileStore(state => state.profiles[role])
	const updateProviderProfile = useUserProfileStore(
		state => state.updateProviderProfile,
	)
	const [currentStep, setCurrentStep] = useState<ProfileSetupStep>(0)

	const methods = useForm<ProfileSetupFormValues>({
		defaultValues: profileToSetupValues(profile),
		mode: 'onSubmit',
	})

	const cities = useWatch({
		control: methods.control,
		name: 'cities',
		defaultValue: [],
	})

	useEffect(() => {
		methods.reset(profileToSetupValues(profile))
	}, [profile, methods])

	const handleClose = () => {
		router.back()
	}

	const handleBack = () => {
		if (currentStep > 0) {
			setCurrentStep((currentStep - 1) as ProfileSetupStep)
		}
	}

	const persistSkillsStep = (values: ProfileSetupFormValues) => {
		updateProviderProfile(role, { services: values.skills })
	}

	const persistCitiesStep = (values: ProfileSetupFormValues) => {
		updateProviderProfile(role, { workCities: values.cities })
	}

	const handleNext = methods.handleSubmit(values => {
		if (currentStep === 0) {
			persistSkillsStep(values)
			setCurrentStep(1)
			return
		}

		if (currentStep === 1) {
			persistCitiesStep(values)
			setCurrentStep(2)
		}
	})

	const handleCreate = methods.handleSubmit(values => {
		const fullDescription = values.aboutDescription.trim()
		updateProviderProfile(role, {
			fullDescription,
			description: buildDescriptionPreview(fullDescription),
		})
		router.back()
	})

	return (
		<FormProvider {...methods}>
			<SafeAreaView style={profileSetupStyles.screen} edges={['top', 'bottom']}>
				<View style={profileSetupStyles.header}>
					<View style={profileSetupStyles.headerSide}>
						{currentStep > 0 ? (
							<Pressable
								onPress={handleBack}
								hitSlop={8}
								style={({ pressed }) => [
									profileSetupStyles.headerBack,
									pressed && { opacity: 0.6 },
								]}
							>
								<View style={profileSetupStyles.headerBackIcon}>
									<ArrowIcon
										width={24}
										height={24}
										stroke={Colors.iconAccent}
									/>
								</View>
							</Pressable>
						) : null}
					</View>
					<View style={profileSetupStyles.headerCenter}>
						<StepIndicator
							totalSteps={TOTAL_STEPS}
							currentStep={currentStep}
							onStepPress={step => {
								if (step < currentStep) {
									setCurrentStep(step as ProfileSetupStep)
								}
							}}
						/>
					</View>
					<Pressable
						onPress={handleClose}
						hitSlop={8}
						style={({ pressed }) => [
							profileSetupStyles.headerClose,
							pressed && { opacity: 0.6 },
						]}
					>
						<CloseIcon width={24} height={24} />
					</Pressable>
				</View>

				<View style={profileSetupStyles.content}>
					{currentStep === 0 ? <SkillsStep /> : null}
					{currentStep === 1 ? <CitiesStep /> : null}
					{currentStep === 2 ? <DescriptionStep /> : null}
				</View>

				<View style={profileSetupStyles.footer}>
					{currentStep < TOTAL_STEPS - 1 ? (
						<StyledButton
							full
							onPress={handleNext}
							disabled={currentStep === 1 && cities.length === 0}
						>
							Далее
						</StyledButton>
					) : null}
					{currentStep === TOTAL_STEPS - 1 ? (
						<StyledButton full onPress={handleCreate}>
							Создать
						</StyledButton>
					) : null}
				</View>
			</SafeAreaView>
		</FormProvider>
	)
}
