import { validateCredentialsStep } from "@/feature/registr/lib/validation/credentials-step";
import { useRegistrationStore } from "@/feature/registr/model";
import { StyledButton } from "@/shared/ui/Button";
import { StyledInput } from "@/shared/ui/Input";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

import { stepFormStyles } from "../shared/styles";

export default function CredentialsRegistrationStep() {
	const {
		name,
		password,
		confirmPassword,
		setName,
		setPassword,
		setConfirmPassword,
		setCurrentStep,
	} = useRegistrationStore();

	const [localName, setLocalName] = useState(name);
	const [localPassword, setLocalPassword] = useState(password);
	const [localConfirmPassword, setLocalConfirmPassword] =
		useState(confirmPassword);
	const [error, setError] = useState<string | null>(null);

	const isFormValid = useMemo(
		() =>
			validateCredentialsStep({
				name: localName,
				password: localPassword,
				confirmPassword: localConfirmPassword,
			}).isValid,
		[localName, localPassword, localConfirmPassword],
	);

	const handlePressNext = () => {
		const validation = validateCredentialsStep({
			name: localName,
			password: localPassword,
			confirmPassword: localConfirmPassword,
		});

		if (!validation.isValid) {
			setError(validation.error);
			return;
		}

		setError(null);

		setName(localName.trim());
		setPassword(localPassword);
		setConfirmPassword(localConfirmPassword);

		setCurrentStep(2);
	};

	return (
		<>
			<View style={stepFormStyles.form}>
				<StyledInput
					placeholder="Имя"
					value={localName}
					onChangeText={setLocalName}
					autoCapitalize="words"
				/>
				<StyledInput
					password
					placeholder="Пароль"
					value={localPassword}
					onChangeText={setLocalPassword}
					secureTextEntry
				/>
				<StyledInput
					password
					placeholder="Подтверждение пароля"
					value={localConfirmPassword}
					onChangeText={setLocalConfirmPassword}
					secureTextEntry
				/>
				{error && <Text style={stepFormStyles.error}>{error}</Text>}
			</View>
			<StyledButton full disabled={!isFormValid} onPress={handlePressNext}>
				Далее
			</StyledButton>
		</>
	);
}
