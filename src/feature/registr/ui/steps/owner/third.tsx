import { petBreeds } from "@/feature/registr/data";
import { parseAge } from "@/feature/registr/lib/parsers/age";
import { validateOwnerStep } from "@/feature/registr/lib/validation/owner-step";
import { useRegistrationStore } from "@/feature/registr/model";
import { StyledButton } from "@/shared/ui/Button";
import StarIcon from "@/shared/ui/Icons/Star";
import { StyledInput } from "@/shared/ui/Input";
import { StyledSelectInput } from "@/shared/ui/SelectInput";
import { StyledToggle } from "@/shared/ui/Toggle";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

import { stepFormStyles } from "../shared/styles";

export default function OwnerRegistrationStep() {
	const { ownerData, setOwnerData, completeRegistration } =
		useRegistrationStore();

	const [petType, setPetType] = useState(ownerData.petType);
	const [breed, setBreed] = useState(ownerData.breed);
	const [age, setAge] = useState(
		ownerData.age > 0 ? `${ownerData.age} лет` : "",
	);
	const [hasVaccination, setHasVaccination] = useState(
		ownerData.hasVaccination,
	);
	const [error, setError] = useState<string | null>(null);

	const isFormValid = useMemo(
		() => validateOwnerStep({ petType, breed, age }).isValid,
		[petType, breed, age],
	);

	const handleCreate = () => {
		const validation = validateOwnerStep({ petType, breed, age });

		if (!validation.isValid) {
			setError(validation.error);
			return;
		}

		setError(null);

		setOwnerData({
			petType: petType.trim(),
			breed,
			age: parseAge(age),
			hasVaccination,
		});

		completeRegistration();
	};

	return (
		<>
			<View style={stepFormStyles.form}>
				<StyledInput
					placeholder="Введите ваше животное"
					value={petType}
					onChangeText={setPetType}
					autoCapitalize="sentences"
				/>
				<StyledSelectInput
					options={[...petBreeds]}
					selectedValue={breed}
					onSelectValue={setBreed}
					placeholder="Порода"
				/>
				<StyledInput
					placeholder="Возраст питомца"
					value={age}
					onChangeText={setAge}
					keyboardType="default"
				/>
				<StyledToggle
					label="Есть ли прививка"
					icon={<StarIcon />}
					value={hasVaccination}
					onValueChange={setHasVaccination}
				/>
				{error && <Text style={stepFormStyles.error}>{error}</Text>}
			</View>
			<StyledButton full disabled={!isFormValid} onPress={handleCreate}>
				Создать
			</StyledButton>
		</>
	);
}
