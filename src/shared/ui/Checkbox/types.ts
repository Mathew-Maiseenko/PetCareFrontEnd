import { StyleProp, ViewStyle } from "react-native";

export interface CheckboxProps {
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
