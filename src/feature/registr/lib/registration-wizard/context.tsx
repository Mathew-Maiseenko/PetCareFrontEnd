import { createContext, ReactNode, useContext, useMemo, useState } from 'react'

import { RegistrationStep } from '../../types'

type RegistrationWizardContextValue = {
	currentStep: RegistrationStep
	setCurrentStep: (step: RegistrationStep) => void
}

const RegistrationWizardContext =
	createContext<RegistrationWizardContextValue | null>(null)

export const RegistrationWizardProvider = ({
	children,
}: {
	children: ReactNode
}) => {
	const [currentStep, setCurrentStep] = useState<RegistrationStep>(0)
	const value = useMemo(
		() => ({ currentStep, setCurrentStep }),
		[currentStep],
	)

	return (
		<RegistrationWizardContext.Provider value={value}>
			{children}
		</RegistrationWizardContext.Provider>
	)
}

export const useRegistrationWizard = () => {
	const context = useContext(RegistrationWizardContext)

	if (!context) {
		throw new Error(
			'useRegistrationWizard must be used within RegistrationWizardProvider',
		)
	}

	return context
}
