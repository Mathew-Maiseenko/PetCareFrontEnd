import { STORAGE_KEYS } from "@/shared/storage/keys";
import { storage } from "@/shared/storage/mmkv";

import { RegisteredUserData } from "../../types/stored-user";

export const saveRegisteredUser = (user: RegisteredUserData): void => {
	storage.set(STORAGE_KEYS.USER_DATA, JSON.stringify(user));
	storage.set(STORAGE_KEYS.IS_REGISTERED, true);
};
