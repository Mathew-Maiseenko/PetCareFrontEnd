import { UserCountry, UserRole } from "@/entity/user/types";
import { userRolesData } from "@/feature/registr/data";
import { validateFirstStep } from "@/feature/registr/lib/validation/first-step";
import { useRegistrationStore } from "@/feature/registr/model";
import { StyledButton } from "@/shared/ui/Button";
import CheckboxList from "@/shared/ui/CheckboxList";
import { StyledInput } from "@/shared/ui/Input";
import { StyledSelectInput } from "@/shared/ui/SelectInput";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

import { stepFormStyles } from "../shared/styles";

export default function CommonRegistrationStep() {
	const {
		phone,
		setPhone,
		setCurrentRole,
		setCurrentCountry,
		setCurrentStep,
	} = useRegistrationStore();
	const [selectedCountryLocal, setSelectedCountryLocal] = useState<UserCountry>(
		UserCountry.Belarus,
	);
	const [selectedRoleId, setSelectedRoleId] = useState(0);
	const [localPhone, setLocalPhone] = useState(phone);
	const [error, setError] = useState<string | null>(null);

	const isFormValid = useMemo(
		() =>
			validateFirstStep({
				selectedRoleId,
				country: selectedCountryLocal,
				phone: localPhone,
			}).isValid,
		[selectedRoleId, selectedCountryLocal, localPhone],
	);

	const handlePressNext = () => {
		const validation = validateFirstStep({
			selectedRoleId,
			country: selectedCountryLocal,
			phone: localPhone,
		});

		if (!validation.isValid) {
			setError(validation.error);
			return;
		}

		setError(null);

		const selectedRole =
			userRolesData.find((value) => value.id === selectedRoleId)?.value ||
			UserRole.PET_OWNER;

		setCurrentRole(selectedRole);
		setCurrentCountry(selectedCountryLocal);
		setPhone(localPhone.trim());
		setCurrentStep(1);
	};

	return (
		<>
			<View style={stepFormStyles.form}>
				<CheckboxList
					data={userRolesData}
					selectedId={selectedRoleId}
					onOptionSelect={setSelectedRoleId}
				/>
				<StyledSelectInput
					options={Object.values(UserCountry)}
					selectedValue={selectedCountryLocal}
					onSelectValue={setSelectedCountryLocal}
					placeholder="Страна"
				/>
				<StyledInput
					placeholder="+375 (44) 99 999 99"
					value={localPhone}
					onChangeText={setLocalPhone}
					keyboardType="phone-pad"
				/>
				{error && <Text style={stepFormStyles.error}>{error}</Text>}
			</View>
			<StyledButton full disabled={!isFormValid} onPress={handlePressNext}>
				Далее
			</StyledButton>
		</>
	);
}
