import { AditionalInfoStep } from '../type'

export const ADITIONAL_INFO_PET_STEPS: AditionalInfoStep[] = [
	{
		id: 'emergency_actions',
		type: 'select',
		title: 'Чрезвычайные ситуации',
		subtitle: 'Выберите действия при чрезвычайных ситуациях',
		options: [
			'связаться с хозяином питомца',
			'доставить в вет клинику',
			'вызвать ветврача на дом',
			'дать лекарство',
			'решить самостоятельно',
		],
	},
	{
		id: 'description',
		type: 'text',
		title: 'Описание',
		subtitle: 'Расскажите немного о питомце: его график дня, привычки и тд',
	},
]
