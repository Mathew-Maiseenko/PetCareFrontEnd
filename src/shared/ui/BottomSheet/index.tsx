import { useEffect, useState } from 'react'
import { Modal, Pressable, useWindowDimensions, View } from 'react-native'
import Animated, {
	Easing,
	runOnJS,
	useAnimatedStyle,
	useSharedValue,
	withTiming,
} from 'react-native-reanimated'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

import { styles } from './styles'
import { BottomSheetProps } from './types'

const OPEN_DURATION = 280
const CLOSE_DURATION = 240

export function BottomSheet({ visible, onClose, children }: BottomSheetProps) {
	const { height } = useWindowDimensions()
	const insets = useSafeAreaInsets()
	const sheetHeight = height * 0.7
	const [rendered, setRendered] = useState(visible)
	const translateY = useSharedValue(sheetHeight)
	const overlayOpacity = useSharedValue(0)

	useEffect(() => {
		if (visible) {
			setRendered(true)
		}
	}, [visible])

	useEffect(() => {
		if (!rendered) {
			return
		}

		if (visible) {
			translateY.value = sheetHeight
			overlayOpacity.value = 0
			translateY.value = withTiming(0, {
				duration: OPEN_DURATION,
				easing: Easing.out(Easing.cubic),
			})
			overlayOpacity.value = withTiming(0.45, {
				duration: OPEN_DURATION,
			})
			return
		}

		translateY.value = withTiming(
			sheetHeight,
			{
				duration: CLOSE_DURATION,
				easing: Easing.in(Easing.cubic),
			},
			finished => {
				if (finished) {
					runOnJS(setRendered)(false)
				}
			},
		)
		overlayOpacity.value = withTiming(0, { duration: CLOSE_DURATION })
	}, [overlayOpacity, rendered, sheetHeight, translateY, visible])

	const sheetStyle = useAnimatedStyle(() => ({
		transform: [{ translateY: translateY.value }],
	}))
	const overlayStyle = useAnimatedStyle(() => ({
		opacity: overlayOpacity.value,
	}))

	if (!rendered) {
		return null
	}

	return (
		<Modal
			transparent
			visible
			animationType='none'
			statusBarTranslucent
			onRequestClose={onClose}
		>
			<View style={styles.root} pointerEvents='box-none'>
				<Pressable style={styles.overlayPressable} onPress={onClose}>
					<Animated.View
						pointerEvents='none'
						style={[styles.overlay, overlayStyle]}
					/>
				</Pressable>
				<Animated.View
					style={[
						styles.sheet,
						{ height: sheetHeight, paddingBottom: insets.bottom },
						sheetStyle,
					]}
				>
					{children}
				</Animated.View>
			</View>
		</Modal>
	)
}
