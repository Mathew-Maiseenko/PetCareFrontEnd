import { STORAGE_KEYS } from "@/shared/storage/keys";
import { storage } from "@/shared/storage/mmkv";

import { RegisteredUserData } from "../../types/stored-user";

export const getRegisteredUser = (): RegisteredUserData | null => {
	const raw = storage.getString(STORAGE_KEYS.USER_DATA);

	if (!raw) {
		return null;
	}

	return JSON.parse(raw) as RegisteredUserData;
};

export const isUserRegistered = (): boolean =>
	storage.getBoolean(STORAGE_KEYS.IS_REGISTERED) ?? false;
