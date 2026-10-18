import { LoginFormValues } from '@/feature/log-in/lib/login-form/types'
import { applyStepErrors } from '@/feature/registr/lib/registration-form/apply-step-errors'
import { loadLoginDraft, saveLoginDraft } from '@/feature/log-in/lib/storage/login-draft'
import { validateLoginForm } from '@/feature/log-in/lib/validation/login'
import { StyledButton } from '@/shared/ui/Button'
import { StyledInput } from '@/shared/ui/Input'
import Logo from '@/shared/ui/Logo'
import { StepBackButton } from '@/shared/ui/StepBackButton'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { StyleSheet, Text, View } from 'react-native'


export default function LogInScreen() {
	const { control, handleSubmit, setError, clearErrors, watch } =
		useForm<LoginFormValues>({
			defaultValues: loadLoginDraft(),
			mode: 'onSubmit',
		})

	useEffect(() => {
		const subscription = watch(values => {
			saveLoginDraft({
				username: values.username ?? '',
				password: values.password ?? '',
			})
		})

		return () => subscription.unsubscribe()
	}, [watch])

	const onSubmit = (values: LoginFormValues) => {
		const validation = validateLoginForm(values)

		if (!validation.isValid) {
			applyStepErrors(setError, validation.errors)
			return
		}

		clearErrors()
		saveLoginDraft(values)
	}

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<StepBackButton onPress={() => router.replace('/')} />
			</View>
			<View style={styles.form}>
				<Logo />

				<Controller
					control={control}
					name='username'
					render={({ field: { value, onChange }, fieldState }) => (
						<View style={styles.field}>
							<StyledInput
								placeholder='Имя пользователя'
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('username')
								}}
								autoCapitalize='none'
							/>
							{fieldState.error?.message ? (
								<Text style={styles.error}>{fieldState.error.message}</Text>
							) : null}
						</View>
					)}
				/>
				<Controller
					control={control}
					name='password'
					render={({ field: { value, onChange }, fieldState }) => (
						<View style={styles.field}>
							<StyledInput
								placeholder='Пароль'
								password
								value={value}
								onChangeText={text => {
									onChange(text)
									clearErrors('password')
								}}
								secureTextEntry
							/>
							{fieldState.error?.message ? (
								<Text style={styles.error}>{fieldState.error.message}</Text>
							) : null}
						</View>
					)}
				/>
			</View>
			<StyledButton full onPress={handleSubmit(onSubmit)}>
				Войти
			</StyledButton>
		</View>
	)
}

const styles = StyleSheet.create({
	form: {
		width: '100%',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		gap: 24,
		flex: 1,
	},

	container: {
		width: '100%',
		flex: 1,
		justifyContent: 'space-between',
		alignItems: 'center',
		flexDirection: 'column',
	},
	header: {
		width: '100%',
		minHeight: 32,
		alignItems: 'flex-start',
		justifyContent: 'center',
	},
	field: {
		width: '100%',
		gap: 4,
	},
	error: {
		color: 'red',
		fontSize: 12,
	},
})
