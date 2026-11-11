export type AditionalInfoStepType = 'select' | 'text'

export type AditionalInfoStep = {
	id: string
	type: AditionalInfoStepType
	title: string
	subtitle: string
	options?: string[]
}
