import { FieldValues, Path, UseFormSetError } from 'react-hook-form'

import { FieldErrors as StepFieldErrors } from '../validation/types'

export const applyStepErrors = <TFieldValues extends FieldValues>(
	setError: UseFormSetError<TFieldValues>,
	errors: StepFieldErrors<string>,
) => {
	for (const [field, message] of Object.entries(errors)) {
		if (message) {
			setError(field as Path<TFieldValues>, {
				type: 'manual',
				message,
			})
		}
	}
}
