import { useEffect, useRef } from 'react'

export const usePersistOnUnmount = (persist: () => void) => {
	const persistRef = useRef(persist)
	persistRef.current = persist

	useEffect(() => {
		return () => {
			persistRef.current()
		}
	}, [])
}
