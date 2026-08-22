import React, { useState } from "react";
import { Pressable, StyleSheet, ViewStyle, StyleProp } from "react-native";
import Svg, { Path } from "react-native-svg";
import TickIcon from "../Icons/Tick";
import { Colors } from "@/shared/styles";

interface CheckboxProps {
	/**
	 * Текущее состояние (true = отмечен)
	 */
	value: boolean;
	/**
	 * Коллбэк при изменении состояния
	 */
	onValueChange: (newValue: boolean) => void;
	/**
	 * Размер чекбокса (по умолчанию 24)
	 */
	size?: number;
	/**
	 * Дополнительные стили для контейнера
	 */
	style?: StyleProp<ViewStyle>;
}

export default function Checkbox({
	value,
	onValueChange,
	size = 32,
	style,
}: CheckboxProps) {
	const [internalValue, setInternalValue] = useState(false);
	const isChecked = value !== undefined ? value : internalValue;

	const handlePress = () => {
		const newValue = !isChecked;
		if (value === undefined) {
			setInternalValue(newValue);
		}
		onValueChange?.(newValue);
	};

	return (
		<Pressable
			style={({ pressed }) => [
				styles.checkbox,
				{
					width: size,
					height: size,
					borderColor: Colors.placeholder,
					borderWidth: isChecked ? 0 : 1,
					backgroundColor: isChecked
						? Colors.buttonPrimary
						: Colors.backgroundPrimary,
					opacity: pressed ? 0.7 : 1,
				},
				style,
			]}
			onPress={handlePress}
		>
			{isChecked && <TickIcon />}
		</Pressable>
	);
}

const styles = StyleSheet.create({
	checkbox: {
		padding: 5,
		borderWidth: 1,
		borderRadius: "50%",
		alignItems: "center",
		justifyContent: "center",
	},
});
