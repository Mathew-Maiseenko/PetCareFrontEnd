import { useCallback, useState } from "react";
import {
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

	const toggleMenu = useCallback(() => {
		setIsMenuShown((shown) => !shown);
	}, []);

	const handleSelectOption = useCallback(
		(value: T) => {
			onSelectValue(value);
			setIsMenuShown(false);
		},
		[onSelectValue],
	);

	const hasOptions = options && options.length > 0;

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
				{!isMenuShown ? (
					<EyeOpenedIcon stroke={Colors.placeholder} width={25} height={25} />
				) : (
					<EyeClosed fill={Colors.placeholder} width={25} height={25} />
				)}
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
