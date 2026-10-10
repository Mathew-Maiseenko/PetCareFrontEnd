import { useCallback, useState } from 'react'

import { FieldErrors } from './types'

export const useFieldErrors = <T extends string>() => {
	const [errors, setErrors] = useState<FieldErrors<T>>({})

	const clearError = useCallback((field: T) => {
		setErrors(prev => {
			if (!prev[field]) {
				return prev
			}

			const next = { ...prev }
			delete next[field]
			return next
		})
	}, [])

	const updateField =
		<V>(field: T, setter: (value: V) => void) =>
		(value: V) => {
			setter(value)
			clearError(field)
		}

	return { errors, setErrors, updateField }
}
