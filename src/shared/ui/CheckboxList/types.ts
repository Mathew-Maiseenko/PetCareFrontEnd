export type CheckboxOption = {
	id: number
	label: string
	value?: string
}

export type CheckboxListProps = {
	data: CheckboxOption[]
	onOptionSelect: (id: number) => void
	selectedId: number
}
