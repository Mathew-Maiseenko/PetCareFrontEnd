import { TextInputProps } from 'react-native'

export type StyledSelectInputProps<T extends string> = TextInputProps & {
	placeholder: string
	options: T[]
	selectedValue: T
	onSelectValue: (value: T) => void
}
