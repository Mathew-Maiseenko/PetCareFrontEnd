import { useCallback, useState } from "react";
import { Pressable, TextInput, View } from "react-native";

import { Colors } from "@/shared/styles";

import EyeClosed from "../Icons/EyeClosed";
import EyeOpenedIcon from "../Icons/EyeOpened";

import { styles } from "./styles";
import { StyledInputProps } from "./types";

export function StyledInput({
	password,
	secureTextEntry,
	style,
	...props
}: StyledInputProps) {
	const [isPasswordShown, setIsPasswordShown] = useState(false);

	const handlePasswordShowingChange = useCallback(
		() => setIsPasswordShown((shown) => !shown),
		[],
	);

	const isSecure = password ? !isPasswordShown : secureTextEntry;

	return (
		<View style={styles.inputContainer}>
			<TextInput
				{...props}
				style={[styles.input, style]}
				placeholderTextColor={Colors.placeholder}
				secureTextEntry={isSecure}
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
