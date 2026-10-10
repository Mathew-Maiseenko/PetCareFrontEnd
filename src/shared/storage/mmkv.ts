import kvStorage from 'expo-sqlite/kv-store'

type StorageValue = string | number | boolean

const serialize = (value: StorageValue): string => {
	if (typeof value === 'boolean') {
		return value ? 'true' : 'false'
	}

	return String(value)
}

export const storage = {
	set(key: string, value: StorageValue): void {
		kvStorage.setItemSync(key, serialize(value))
	},
	getString(key: string): string | undefined {
		return kvStorage.getItemSync(key) ?? undefined
	},
	getBoolean(key: string): boolean | undefined {
		const value = kvStorage.getItemSync(key)

		if (value == null) {
			return undefined
		}

		return value === 'true'
	},
	remove(key: string): void {
		kvStorage.removeItemSync(key)
	},
}
