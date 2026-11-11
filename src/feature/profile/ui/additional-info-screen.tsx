import React, { useState } from 'react'
import { View, StyleSheet, ScrollView, Pressable } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

import { ADITIONAL_INFO_PET_STEPS } from '@/entity/aditional-info-step/model'
import {
	AdditionalInfoSelectStep,
	AdditionalStepTextStep,
} from './additional-info-step'
import { StepBackButton } from '@/shared/ui/StepBackButton'
import { StyledButton } from '@/shared/ui/Button'
import { AdditionalInfoHeader } from './additional-info-header'
import CloseIcon from '@/shared/ui/Icons/Close'

export function AdditionalInfoScreen() {
	const router = useRouter()
	const [stepIndex, setStepIndex] = useState(0)
	const [answers, setAnswers] = useState<Record<string, string | string[]>>({})

	const currentStep = ADITIONAL_INFO_PET_STEPS[stepIndex]
	const isLastStep = stepIndex === ADITIONAL_INFO_PET_STEPS.length - 1

	const handleNext = () => {
		if (isLastStep) {
			console.log(answers)
			router.back()
		} else {
			setStepIndex(prev => prev + 1)
		}
	}

	const handleBack = () => setStepIndex(prev => Math.max(0, prev - 1))

	const isStepValid = () => {
		const value = answers[currentStep.id]
		return currentStep.type === 'select'
			? Array.isArray(value) && value.length > 0
			: typeof value === 'string' && value.trim().length > 0
	}

	return (
		<SafeAreaView style={styles.screen}>
			<AdditionalInfoHeader
				currentStep={stepIndex}
				totalSteps={ADITIONAL_INFO_PET_STEPS.length}
				onBack={handleBack}
			/>

			<ScrollView contentContainerStyle={styles.scrollContent}>
				{currentStep.type === 'select' ? (
					<AdditionalInfoSelectStep
						config={currentStep}
						selected={(answers[currentStep.id] as string[]) || []}
						onChange={newVal =>
							setAnswers(prev => ({ ...prev, [currentStep.id]: newVal }))
						}
					/>
				) : (
					<AdditionalStepTextStep
						config={currentStep}
						value={(answers[currentStep.id] as string) || ''}
						onChange={newVal =>
							setAnswers(prev => ({ ...prev, [currentStep.id]: newVal }))
						}
					/>
				)}
			</ScrollView>

			<View style={styles.footer}>
				<StyledButton
					full
					onPress={handleNext}
					style={!isStepValid() ? styles.buttonDisabled : {}}
				>
					{isLastStep ? 'Создать' : 'Далее'}
				</StyledButton>
			</View>
		</SafeAreaView>
	)
}

const styles = StyleSheet.create({
	screen: {
		flex: 1,
		backgroundColor: '#FFFFFF',
	},
	dots: {
		flexDirection: 'row',
		gap: 8,
	},
	dot: {
		width: 8,
		height: 8,
		borderRadius: 4,
	},
	dotActive: {
		backgroundColor: '#FEBC46',
	},
	dotInactive: {
		backgroundColor: '#D3D3D3',
	},
	backButtonContainer: {
		paddingHorizontal: 20,
		alignItems: 'flex-start',
		marginBottom: 10,
	},
	scrollContent: {
		paddingHorizontal: 20,
		paddingBottom: 20,
		flexGrow: 1,
	},
	footer: {
		padding: 20,
	},
	buttonDisabled: { backgroundColor: '#FAD999', opacity: 0.7 },
})
