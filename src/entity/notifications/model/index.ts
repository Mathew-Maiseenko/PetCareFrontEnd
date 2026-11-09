import { NotificationGroupType } from '../types'

export const DATA_NOTIFICATIONS: NotificationGroupType[] = [
	{
		title: 'Недавнее',
		data: [
			{
				id: '1',
				name: 'Павел',
				date: '25.12.2025',
				time: '12:00 - 18:00',
				status: 'Ожидание',
				avatarUri:
					'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
			},
		],
	},
	{
		title: 'Последние 7 дней',
		data: [
			{
				id: '2',
				name: 'Виктория',
				date: '25.12.2025',
				time: 'целый день',
				status: 'Принято',
				avatarUri:
					'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop',
			},
			{
				id: '3',
				name: 'Мария',
				date: '25.12.2025',
				time: '12:00 - 20:00',
				status: 'Принято',
				avatarUri:
					'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
			},
		],
	},
	{
		title: 'Более поздние',
		data: [
			{
				id: '4',
				name: 'Алина',
				date: '25.12.2025',
				time: '12:00 - 20:00',
				status: 'Принято',
				avatarUri:
					'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop',
			},
			{
				id: '5',
				name: 'Николай',
				date: '25.12.2025',
				time: '12:00 - 20:00',
				status: 'Принято',
				avatarUri:
					'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
			},
			{
				id: '6',
				name: 'Игорь',
				date: '25.12.2025',
				time: '12:00 - 20:00',
				status: 'Принято',
				avatarUri:
					'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop',
			},
			{
				id: '7',
				name: 'Зоя',
				date: '25.12.2025',
				time: '12:00 - 20:00',
				status: 'Отказано',
				avatarUri:
					'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=150&h=150&fit=crop',
			},
		],
	},
]
