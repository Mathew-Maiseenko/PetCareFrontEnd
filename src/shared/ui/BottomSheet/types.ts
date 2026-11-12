import { ReactNode } from 'react'

export type BottomSheetProps = {
	visible: boolean
	onClose: () => void
	children: ReactNode
	heightFactor?: number
}
