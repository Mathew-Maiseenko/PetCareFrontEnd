import { ReactNode } from "react";
import { StyleProp, ViewStyle } from "react-native";

export interface StyledToggleProps {
	value: boolean;
	onValueChange: (value: boolean) => void;
	label: string;
	icon?: ReactNode;
	style?: StyleProp<ViewStyle>;
}
