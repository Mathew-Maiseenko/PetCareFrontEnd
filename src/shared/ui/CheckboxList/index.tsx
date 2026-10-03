import { FlatList, Text, View } from "react-native";

import Checkbox from "../Checkbox";

import { styles } from "./styles";
import { CheckboxListProps } from "./types";

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
