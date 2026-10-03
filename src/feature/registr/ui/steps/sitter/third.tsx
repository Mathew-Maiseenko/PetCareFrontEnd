import { experienceOptions } from "@/feature/registr/data";
import { parseCost } from "@/feature/registr/lib/parsers/cost";
import { parseExperienceYears } from "@/feature/registr/lib/parsers/experience";
import { validateSitterStep } from "@/feature/registr/lib/validation/sitter-step";
import { useRegistrationStore } from "@/feature/registr/model";
import { StyledButton } from "@/shared/ui/Button";
import { StyledInput } from "@/shared/ui/Input";
import { StyledSelectInput } from "@/shared/ui/SelectInput";
import { StyledToggle } from "@/shared/ui/Toggle";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

import { stepFormStyles } from "../shared/styles";

const formatExperience = (years: number) => {
	if (years <= 0) {
		return "";
	}

	const option = experienceOptions.find((item) =>
		item.startsWith(String(years)),
	);

	return option ?? `${years} лет`;
};

export default function SitterRegistrationStep() {
	const { sitterData, setSitterData, completeRegistration } =
		useRegistrationStore();

	const [experience, setExperience] = useState(
		formatExperience(sitterData.experienceYears),
	);
	const [cost, setCost] = useState(
		sitterData.cost !== undefined ? `${sitterData.cost} р/час` : "",
	);
	const [hasEducation, setHasEducation] = useState(sitterData.hasEducation);
	const [error, setError] = useState<string | null>(null);

	const isFormValid = useMemo(
		() => validateSitterStep({ experience, cost }).isValid,
		[experience, cost],
	);

	const handleCreate = () => {
		const validation = validateSitterStep({ experience, cost });

		if (!validation.isValid) {
			setError(validation.error);
			return;
		}

		setError(null);

		setSitterData({
			experienceYears: parseExperienceYears(experience),
			cost: parseCost(cost),
			hasEducation,
		});

		completeRegistration();
	};

	return (
		<>
			<View style={stepFormStyles.form}>
				<StyledSelectInput
					options={[...experienceOptions]}
					selectedValue={experience}
					onSelectValue={setExperience}
					placeholder="Ваш опыт"
				/>
				<StyledInput
					placeholder="Стоимость услуг (опционально)"
					value={cost}
					onChangeText={setCost}
					keyboardType="default"
				/>
				<StyledToggle
					label="Образование"
					value={hasEducation}
					onValueChange={setHasEducation}
				/>
				{error && <Text style={stepFormStyles.error}>{error}</Text>}
			</View>
			<StyledButton full disabled={!isFormValid} onPress={handleCreate}>
				Создать
			</StyledButton>
		</>
	);
}
