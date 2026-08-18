import { useCallback, useState } from "react";
import {
	Pressable,
	StyleSheet,
	TextInput,
	TextInputProps,
	View,
} from "react-native";
import EyeClosed from "../Icons/EyeClosed";
import EyeOpenedIcon from "../Icons/EyeOpened";
import { Colors } from "@/shared/styles";

type CustomInputProps = TextInputProps & { password?: boolean };

export function StyledInput({ password, ...props }: CustomInputProps) {
	const [isPasswordShown, setIsPasswordShown] = useState(false);

	const handlePasswordShowingChange = useCallback(
		() => setIsPasswordShown((shown) => !shown),
		[],
	);

	return (
		<View style={styles.inputContainer}>
			<TextInput
				style={styles.input}
				secureTextEntry={password && !isPasswordShown}
				placeholderTextColor={Colors.placeholder}
				{...props}
			/>
			{password && (
				<Pressable
					style={styles.rightMenu}
					onPress={handlePasswordShowingChange}
				>
					{!isPasswordShown ? (
						<EyeOpenedIcon stroke={Colors.placeholder} width={25} height={25} />
					) : (
						<EyeClosed fill={Colors.placeholder} width={25} height={25} />
					)}
				</Pressable>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	inputContainer: {
		width: "100%",
		position: "relative",
		borderColor: Colors.borderPrimary,
		borderWidth: 1,
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
});
