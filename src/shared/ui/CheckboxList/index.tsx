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

type CheckboxOption = {
	id: number;
	label: string;
	value?: string;
};

type CheckboxListProps = {
	data: CheckboxOption[];
	onOptionSelect: (id: number) => void;
	selectedId: number;
};

export default function CheckboxList({
	data,
	onOptionSelect,
	selectedId,
}: CheckboxListProps) {
	const handleOptionSelect = (id: number) => () => onOptionSelect(id);

	return (
		<FlatList
			style={styles.list}
			data={data}
			keyExtractor={(item) => item.id.toString()}
			renderItem={({ item: { label, id } }) => (
				<View style={styles.optionContainer}>
					<Text style={styles.optionText}>{label}</Text>
					<Checkbox
						onValueChange={handleOptionSelect(id)}
						value={id === selectedId}
					/>
				</View>
			)}
		/>
	);
}

const styles = StyleSheet.create({
	optionText: {
		fontSize: 20,
		lineHeight: 26,
	},
	list: {
		width: "100%",
		gap: 24,
	},
	optionContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 8,
	},
});
