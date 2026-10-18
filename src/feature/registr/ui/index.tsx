import { userRolesData } from '@/feature/registr/data'
import { registrationDefaultValues } from '@/feature/registr/lib/registration-form/default-values'
import { RegistrationFormValues } from '@/feature/registr/lib/registration-form/types'
import {
	RegistrationWizardProvider,
	useRegistrationWizard,
} from '@/feature/registr/lib/registration-wizard/context'
import { RegistrationStep } from '@/feature/registr/types'
import Logo from '@/shared/ui/Logo'
import { StepBackButton } from '@/shared/ui/StepBackButton'
import StepIndicator from '@/shared/ui/StepIndicator'
import { router } from 'expo-router'
import { FormProvider, useForm } from 'react-hook-form'
import { StyleSheet, View } from 'react-native'

import { COUNT_OF_STEPS, getComponentScreenByRoleAndStep } from './steps/config'

function RegistrationScreenContent() {
	const { currentStep, setCurrentStep } = useRegistrationWizard()
	const methods = useForm<RegistrationFormValues>({
		defaultValues: registrationDefaultValues,
		mode: 'onSubmit',
	})
	const selectedRoleId = methods.watch('selectedRoleId')
	const currentRole =
		userRolesData.find(role => role.id === selectedRoleId)?.value ?? null

	const handlePressBack = () => {
		if (currentStep === 0) {
			router.replace('/')
			return
		}

		setCurrentStep((currentStep - 1) as RegistrationStep)
	}

	return (
		<FormProvider {...methods}>
			<View style={styles.container}>
				<View style={styles.header}>
					<View style={styles.headerSide}>
						<StepBackButton onPress={handlePressBack} />
					</View>
					<View style={styles.headerCenter}>
						<StepIndicator
							onStepPress={setCurrentStep}
							totalSteps={COUNT_OF_STEPS}
							currentStep={currentStep}
						/>
					</View>
					<View style={styles.headerSide} />
				</View>
				<Logo />
				{getComponentScreenByRoleAndStep(currentRole, currentStep)}
			</View>
		</FormProvider>
	)
}

export default function RegistrationScreen() {
	return (
		<RegistrationWizardProvider>
			<RegistrationScreenContent />
		</RegistrationWizardProvider>
	)
}

const styles = StyleSheet.create({
	container: {
		width: '100%',
		flex: 1,
		alignItems: 'center',
		flexDirection: 'column',
		justifyContent: 'space-between',
	},
	header: {
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
	},
	headerSide: {
		width: 32,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	headerCenter: {
		flex: 1,
		alignItems: 'center',
	},
})
