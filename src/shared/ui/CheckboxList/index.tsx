import React, { useState } from "react";
import {
	Pressable,
	StyleSheet,
	ViewStyle,
	StyleProp,
	FlatList,
	View,
	Text,
} from "react-native";
import Svg, { Path } from "react-native-svg";
import TickIcon from "../Icons/Tick";
import { Colors } from "@/shared/styles";
import Checkbox from "../Checkbox";

interface CheckboxOption {
	id: number;
	label: string;
	isSelected: boolean;
}

interface CheckboxListProps {
	data: CheckboxOption[];
	onOptionSelect: (id: number) => void;
}

export default function CheckboxList({
	data,
	onOptionSelect,
}: CheckboxListProps) {
	const handleOptionSelect = (id: number) => () => onOptionSelect(id);

	return (
		<FlatList
			style={styles.list}
			data={data}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item: { label, isSelected, id } }) => (
				<View style={styles.optionContainer}>
					<Text>{label}</Text>
					<Checkbox onValueChange={handleOptionSelect(id)} value={isSelected} />
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	list: {
		gap: 12,
	},
	optionContainer: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
});
