import * as ImagePicker from 'expo-image-picker'
import { Alert } from 'react-native'

const pickerOptions: ImagePicker.ImagePickerOptions = {
	allowsEditing: true,
	aspect: [1, 1],
	quality: 0.8,
}

export type AvatarPickSource = 'library' | 'camera'

const showPermissionAlert = () => {
	Alert.alert(
		'Нет доступа',
		'Разрешите доступ в настройках устройства, чтобы добавить фото.',
	)
}

export const pickProfileAvatarFromSource = async (
	source: AvatarPickSource,
): Promise<string | null> => {
	if (source === 'library') {
		const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()

		if (!permission.granted) {
			showPermissionAlert()
			return null
		}

		const result = await ImagePicker.launchImageLibraryAsync(pickerOptions)

		if (result.canceled || !result.assets[0]?.uri) {
			return null
		}

		return result.assets[0].uri
	}

	const permission = await ImagePicker.requestCameraPermissionsAsync()

	if (!permission.granted) {
		showPermissionAlert()
		return null
	}

	const result = await ImagePicker.launchCameraAsync(pickerOptions)

	if (result.canceled || !result.assets[0]?.uri) {
		return null
	}

	return result.assets[0].uri
}
