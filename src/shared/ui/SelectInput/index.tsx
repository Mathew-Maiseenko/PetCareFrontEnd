import { useCallback, useRef, useState } from "react";
import {
	Animated,
	Pressable,
	StyleSheet,
	Text,
	TextInput,
	TextInputProps,
	View,
} from "react-native";
import EyeClosed from "../Icons/EyeClosed";
import EyeOpenedIcon from "../Icons/EyeOpened";
import { Colors } from "@/shared/styles";
import ArrowIcon from "../Icons/Arrow";

type CustomInputProps<T extends string> = TextInputProps & {
	placeholder: string;
	options: T[];
	selectedValue: T;
	onSelectValue: (value: T) => void;
};

export function StyledSelectInput<T extends string>({
	options,
	selectedValue,
	onSelectValue,
	placeholder,
	...props
}: CustomInputProps<T>) {
	const [isMenuShown, setIsMenuShown] = useState(false);
	const menuArrowRotation = useRef(new Animated.Value(0)).current;

	const toggleMenu = () => {
		const toValue = isMenuShown ? 0 : 1;

		Animated.spring(menuArrowRotation, {
			toValue,
			friction: 5, // сопротивление (чем меньше, тем больше колебаний)
			tension: 100, // натяжение (чем больше, тем быстрее)
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
								option === selectedValue && styles.menuItemSelected, //
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

const styles = StyleSheet.create({
	menu: {
		width: "100%",
		position: "absolute",
		top: "100%",
		marginTop: 5,
		left: 0,
		right: 0,
		borderColor: Colors.borderPrimary,
		borderWidth: 1,
		borderRadius: 10,
		backgroundColor: Colors.secondaryBackground,
		zIndex: 10,
		maxHeight: 200,
		overflow: "hidden",
	},
	inputContainer: {
		width: "100%",
		position: "relative",
		borderColor: Colors.borderPrimary,
		borderWidth: 1,
		borderRadius: 10,
	},
	input: {
		borderRadius: 10,
		color: Colors.textPrimary,
		backgroundColor: Colors.secondaryBackground,
		width: "100%",
		height: 55,
		fontSize: 18,
		paddingLeft: 20,
		paddingRight: 20,
	},
	rightMenu: {
		position: "absolute",
		top: 0,
		right: 15,
		justifyContent: "center",
		height: "100%",
	},
	rightMenuIcon: {},
	menuItem: {
		paddingVertical: 12,
		paddingHorizontal: 20,
		borderBottomWidth: 1,
		borderBottomColor: Colors.borderPrimary,
	},
	menuItemSelected: {
		backgroundColor: Colors.placeholder, // или любой другой цвет для выделения
	},
	menuItemText: {
		fontSize: 18,
		color: Colors.textPrimary,
	},
});
