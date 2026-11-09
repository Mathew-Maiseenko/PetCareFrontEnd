import { View, Text, StyleSheet } from 'react-native'
import { StyledButton } from '@/shared/ui/Button'
import { Colors } from '@/shared/styles'

type Props = {
    price: string
    onPress?: () => void 
}

export function SpecialistFooter({ price, onPress }: Props) {
    return (
        <View style={styles.footer}>
            <Text style={styles.price}>{price}</Text>
            <View style={styles.buttonWrapper}>
                <StyledButton onPress={onPress}>
                    Забронировать
                </StyledButton>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    footer: { 
        flexDirection: 'column',
        paddingHorizontal: 24, 
        paddingVertical: 16, 
        paddingBottom: 15, 
        backgroundColor: Colors.backgroundPrimary, 
        borderTopWidth: 1, 
        borderTopColor: '#EBEBEB' 
    },
    price: { 
        fontSize: 20, 
        fontWeight: '700',
        color: Colors.textPrimary, 
        marginBottom: 12 
    },
    buttonWrapper: { 
        width: '100%' 
    },
})