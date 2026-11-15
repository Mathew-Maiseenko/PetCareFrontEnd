export const toggleCityDraft = (selected: string[], city: string): string[] => {
	if (selected.includes(city)) {
		return selected.filter(item => item !== city)
	}
	return [...selected, city]
}
