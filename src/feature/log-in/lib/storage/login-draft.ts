import { STORAGE_KEYS } from '@/shared/storage/keys'
import { storage } from '@/shared/storage/mmkv'

import { LoginFormValues } from '../login-form/types'

const loginDraftDefaultValues: LoginFormValues = {
	username: '',
	password: '',
}

export const loadLoginDraft = (): LoginFormValues => {
	const raw = storage.getString(STORAGE_KEYS.LOGIN_DRAFT)

	if (!raw) {
		return loginDraftDefaultValues
	}

	try {
		const parsed = JSON.parse(raw) as Partial<LoginFormValues>

		return {
			username: parsed.username ?? '',
			password: parsed.password ?? '',
		}
	} catch {
		return loginDraftDefaultValues
	}
}

export const saveLoginDraft = (values: LoginFormValues): void => {
	storage.set(STORAGE_KEYS.LOGIN_DRAFT, JSON.stringify(values))
}
