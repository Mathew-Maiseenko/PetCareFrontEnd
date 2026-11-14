import { TextInput, View, StyleSheet, Pressable, Text } from 'react-native'
import { Colors } from '@/shared/styles'
import SearchIcon from '@/shared/ui/Icons/Search'
import { useState, useEffect, useRef } from 'react'
import CloseIcon from '@/shared/ui/Icons/CloseInInput'
import { router } from 'expo-router'

export function SearchBar({ onFocus, onBlur, style, initialText = '', onClearPress, onEditPress, autoFocus = false } : any) {
    const [text, setText] = useState(initialText);
    const [isFocused, setIsFocused] = useState(false)
	const inputRef = useRef<TextInput>(null)

	useEffect(() => {
        if (autoFocus) {
            setIsFocused(true)
            if (onFocus) onFocus()
            setTimeout(() => {
                inputRef.current?.focus()
            }, 100)
        }
    }, [autoFocus])

	const handlePress = () => {
		if (onEditPress) {
			onEditPress(text)
		}
		else {
			inputRef.current?.focus();
		}
	}
    const handleFocus = () => {
		setIsFocused(true)
		if (onFocus) onFocus()
	}

	const handleCancel = () => {
		setIsFocused(false)
		setText('')
		if (onBlur) onBlur()
	}

	const handleClear = () => {
        if (onClearPress) {
            onClearPress()
        } 
		else {
            setText('')
        }
    }
	return (
		<View style={styles.wrapper}>
            <View style={[styles.container, style]}>
			<SearchIcon width={22} height={22} color={Colors.placeholder} />
			<TextInput
			    ref={inputRef}
				placeholder="Поиск"
				placeholderTextColor={Colors.placeholder}
				style={styles.input}
                value={text}
                onChangeText={setText}
				onFocus={handleFocus}
				onPressIn={handlePress}
                returnKeyType='search'
                onSubmitEditing={() => {
                    if (text.trim()) {
                        router.push(`/pet-owner/search?q=${text}`)
                    }
                }}
			/>
            {text.length > 0 && (
					<Pressable onPress={handleClear} style={styles.clearButton}>
						<CloseIcon width={14} height={14} color={Colors.placeholder} />
					</Pressable>
				)}
		</View>
        {isFocused && (
				<Pressable onPress={handleCancel} style={styles.cancelButton}>
					<Text style={styles.cancelText}>Отмена</Text>
				</Pressable>
			)}
        </View>
	)
}

const styles = StyleSheet.create({
    wrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		marginHorizontal: 24
	},
    container: {
        flex: 1,
        flexDirection: "row", 
        alignItems: 'center',
        backgroundColor: '#EBEBEB',
        borderRadius: 11,
        height: 47,
		paddingHorizontal: 12,
    },
    input: {
        flex: 1, 
        fontSize: 15, 
        color: Colors.textPrimary,
		marginLeft: 9,
        paddingVertical: 0,
    },
    clearButton: {
        padding: 4
    },
    cancelButton: {
		marginLeft: 12,
        paddingTop: 55
	},
    cancelText: {
		fontSize: 16,
		color: Colors.textPrimary,
	},
})