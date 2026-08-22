import { UserCountry, UserRole } from "@/entity/user/types";
import { userRolesData } from "@/feature/registr/data";
import { useRegistrationStore } from "@/feature/registr/model";
import { StyledButton } from "@/shared/ui/Button";
import CheckboxList from "@/shared/ui/CheckboxList";
import { StyledInput } from "@/shared/ui/Input";
import { StyledSelectInput } from "@/shared/ui/SelectInput";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

export default function CommonRegistrationStep() {
	const { setCurrentRole, setCurrentCountry, setCurrentStep } =
		useRegistrationStore();
	const [selectedCountryLocal, setSelectedCountryLocal] = useState<UserCountry>(
		UserCountry.Belarus,
	);
	const [selectedRoleId, setSelectedRoleId] = useState(0);

	const handleSelectCountry = (country: UserCountry) => {
		setSelectedCountryLocal(country);
	};

	const handleSelectRoleId = (id: number) => {
		setSelectedRoleId(id);
	};

	const handlePressNext = () => {
		const selectedRole =
			userRolesData.find((value) => value.id === selectedRoleId)?.value ||
			UserRole.PET_OWNER;

		setCurrentRole(selectedRole);
		setCurrentCountry(selectedCountryLocal);
		setCurrentStep(1);
	};

	return (
		<>
			<View style={styles.form}>
				<CheckboxList
					data={userRolesData}
					selectedId={selectedRoleId}
					onOptionSelect={handleSelectRoleId}
				/>
				<StyledSelectInput
					options={Object.values(UserCountry)}
					selectedValue={selectedCountryLocal}
					onSelectValue={handleSelectCountry}
					placeholder="Страна"
				/>
				<StyledInput placeholder="+375 (44) 99 999 99" />
			</View>
			<StyledButton full onPress={handlePressNext}>
				Далее
			</StyledButton>
		</>
	);
}

const styles = StyleSheet.create({
	form: {
		width: "100%",

		justifyContent: "center",
		alignItems: "center",
		flexDirection: "column",
		gap: 24,
		// backgroundColor: "blue",
	},

	container: {
		width: "100%",
		flex: 1,
		alignItems: "center",
		flexDirection: "column",
		justifyContent: "space-between",
		// backgroundColor: "red",
	},
});
