export type NotificationStatus = 'Ожидание' | 'Принято' | 'Отказано'

export type NotificationItem = {
	id: string
	name: string
	date: string
	time: string
	status: NotificationStatus
	avatarUri: string
}

export type NotificationGroupType = {
	title: string
	data: NotificationItem[]
}
export type SitterNotificationItem = {
	id: string
	name: string
	date: string
	time: string
	avatarUri: string
}
