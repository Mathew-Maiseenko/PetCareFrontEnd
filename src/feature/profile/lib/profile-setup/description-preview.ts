const DESCRIPTION_PREVIEW_MAX = 120

export const buildDescriptionPreview = (text: string): string => {
	const trimmed = text.trim()
	if (!trimmed) {
		return ''
	}
	if (trimmed.length <= DESCRIPTION_PREVIEW_MAX) {
		return trimmed
	}
	return `${trimmed.slice(0, DESCRIPTION_PREVIEW_MAX)}..`
}
