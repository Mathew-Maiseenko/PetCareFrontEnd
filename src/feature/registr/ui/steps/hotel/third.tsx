import { parseCost } from "@/feature/registr/lib/parsers/cost";
import { validateHotelStep } from "@/feature/registr/lib/validation/hotel-step";
import { useRegistrationStore } from "@/feature/registr/model";
import { StyledButton } from "@/shared/ui/Button";
import { StyledInput } from "@/shared/ui/Input";
import { StyledToggle } from "@/shared/ui/Toggle";
import { useMemo, useState } from "react";
import { Text, View } from "react-native";

import { stepFormStyles } from "../shared/styles";

export default function HotelRegistrationStep() {
	const { hotelData, setHotelData, completeRegistration } =
		useRegistrationStore();

	const [hotelName, setHotelName] = useState(hotelData.hotelName);
	const [address, setAddress] = useState(hotelData.address);
	const [cost, setCost] = useState(
		hotelData.cost !== undefined ? String(hotelData.cost) : "",
	);
	const [worksByContract, setWorksByContract] = useState(
		hotelData.worksByContract,
	);
	const [error, setError] = useState<string | null>(null);

	const isFormValid = useMemo(
		() => validateHotelStep({ hotelName, address, cost }).isValid,
		[hotelName, address, cost],
	);

	const handleCreate = () => {
		const validation = validateHotelStep({ hotelName, address, cost });

		if (!validation.isValid) {
			setError(validation.error);
			return;
		}

		setError(null);

		setHotelData({
			hotelName: hotelName.trim(),
			address: address.trim(),
			cost: cost.trim() ? parseCost(cost) : undefined,
			worksByContract,
		});

		completeRegistration();
	};

	return (
		<>
			<View style={stepFormStyles.form}>
				<StyledInput
					placeholder="Название гостиницы"
					value={hotelName}
					onChangeText={setHotelName}
					autoCapitalize="words"
				/>
				<StyledInput
					placeholder="Адрес гостиницы"
					value={address}
					onChangeText={setAddress}
					autoCapitalize="sentences"
				/>
				<StyledInput
					placeholder="Стоимость услуг (опционально)"
					value={cost}
					onChangeText={setCost}
					keyboardType="default"
				/>
				<StyledToggle
					label="Работа по договору"
					value={worksByContract}
					onValueChange={setWorksByContract}
				/>
				{error && <Text style={stepFormStyles.error}>{error}</Text>}
			</View>
			<StyledButton full disabled={!isFormValid} onPress={handleCreate}>
				Создать
			</StyledButton>
		</>
	);
}
