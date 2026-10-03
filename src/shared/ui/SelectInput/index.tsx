import { useCallback, useRef, useState } from "react";
import {
	Animated,
	Pressable,
	Text,
	TextInput,
	View,
} from "react-native";

import { Colors } from "@/shared/styles";

import ArrowIcon from "../Icons/Arrow";

import { styles } from "./styles";
import { StyledSelectInputProps } from "./types";

export function StyledSelectInput<T extends string>({
	options,
	selectedValue,
	onSelectValue,
	placeholder,
	...props
}: StyledSelectInputProps<T>) {
	const [isMenuShown, setIsMenuShown] = useState(false);
	const menuArrowRotation = useRef(new Animated.Value(0)).current;

	const toggleMenu = () => {
		const toValue = isMenuShown ? 0 : 1;

		Animated.spring(menuArrowRotation, {
			toValue,
			friction: 5,
			tension: 100,
			useNativeDriver: true,
		}).start();
		setIsMenuShown((shown) => !shown);
	};

	const handleSelectOption = useCallback(
		(value: T) => {
			onSelectValue(value);
			setIsMenuShown(false);

			Animated.timing(menuArrowRotation, {
				toValue: 0,
				duration: 100,
				useNativeDriver: true,
			}).start();
		},
		[onSelectValue],
	);

	const hasOptions = options && options.length > 0;

	const rotate = menuArrowRotation.interpolate({
		inputRange: [0, 1],
		outputRange: ["0deg", "90deg"],
	});

	return (
		<View style={styles.inputContainer}>
			<TextInput
				value={selectedValue}
				style={styles.input}
				placeholder={placeholder}
				placeholderTextColor={Colors.placeholder}
				editable={false}
				{...props}
			/>
			<Pressable style={styles.rightMenu} onPress={toggleMenu}>
				<Animated.View
					style={{
						transform: [
							{
								rotate,
							},
						],
					}}
				>
					<ArrowIcon width={25} height={25} stroke={Colors.placeholder} />
				</Animated.View>
			</Pressable>

			{isMenuShown && hasOptions && (
				<View style={styles.menu}>
					{options.map((option) => (
						<Pressable
							key={option}
							style={({ pressed }) => [
								styles.menuItem,
								pressed && { backgroundColor: Colors.borderPrimary },
								option === selectedValue && styles.menuItemSelected,
							]}
							onPress={() => handleSelectOption(option)}
						>
							<Text style={styles.menuItemText}>{option}</Text>
						</Pressable>
					))}
				</View>
			)}
		</View>
	);
}
