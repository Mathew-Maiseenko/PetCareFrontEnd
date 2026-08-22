import { useRegistrationStore } from "@/feature/registr/model";
import { StyledButton } from "@/shared/ui/Button";
import { StyledInput } from "@/shared/ui/Input";
import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

export default function CredentialsRegistrationStep() {
	const { name, password, setName, setPassword, setCurrentStep } =
		useRegistrationStore();

	const [localName, setLocalName] = useState(name);
	const [localPassword, setLocalPassword] = useState(password);
	const [confirmPassword, setConfirmPassword] = useState("");
	const [error, setError] = useState<string | null>(null);

	const handlePressNext = () => {
		if (!localName.trim()) {
			setError("Введите имя");
			return;
		}
		if (!localPassword.trim()) {
			setError("Введите пароль");
			return;
		}
		if (localPassword !== confirmPassword) {
			setError("Пароли не совпадают");
			return;
		}
		if (localPassword.length < 6) {
			setError("Пароль должен содержать минимум 6 символов");
			return;
		}
		setError(null);

		setName(localName.trim());
		setPassword(localPassword.trim());

		setCurrentStep(2);
	};

	return (
		<>
			<View style={styles.form}>
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
					value={confirmPassword}
					onChangeText={setConfirmPassword}
					secureTextEntry
				/>
				{error && <Text style={styles.error}>{error}</Text>}
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
	},
	error: {
		color: "red",
		fontSize: 14,
		marginTop: 8,
		alignSelf: "flex-start",
	},
});
