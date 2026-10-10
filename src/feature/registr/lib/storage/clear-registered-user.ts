import { STORAGE_KEYS } from '@/shared/storage/keys'
import { storage } from '@/shared/storage/mmkv'

export const clearRegisteredUser = (): void => {
	storage.remove(STORAGE_KEYS.USER_DATA)
	storage.remove(STORAGE_KEYS.IS_REGISTERED)
}
