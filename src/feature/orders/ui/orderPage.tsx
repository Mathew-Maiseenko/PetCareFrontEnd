import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import { Colors } from '@/shared/styles'

const ORDERS = [
    { id: '1', name: 'Матвей', date: '24.12.2025', time: 'Целый день', status: 'Принято', avatar: 'https://i.pravatar.cc/150?img=12', upcoming: true },
    { id: '2', name: 'Павел', date: '25.12.2025', time: '12:00 - 18:00', status: 'Отказано', avatar: 'https://i.pravatar.cc/150?img=11', upcoming: false },
    { id: '3', name: 'Николай', date: '12.12.2025', time: '12:00 - 20:00', status: 'Принято', avatar: 'https://i.pravatar.cc/150?img=13', upcoming: false },
    { id: '4', name: 'Игорь', date: '10.12.2025', time: '12:00 - 20:00', status: 'Отказано', avatar: 'https://i.pravatar.cc/150?img=14', upcoming: false },
    { id: '5', name: 'Зоя', date: '02.12.2025', time: '12:00 - 20:00', status: 'Отказано', avatar: 'https://i.pravatar.cc/150?img=9', upcoming: false },
]

export function OrderPage() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Заказы</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Text style={styles.subtitle}>Предстоящие</Text>
                {ORDERS.filter(order => order.upcoming).map((order) => (
                    <View key={order.id} style={styles.row}>
                        <Image source={{ uri: order.avatar }} style={styles.avatar} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{order.name}</Text>
                            <Text style={styles.date}>{order.date}</Text>
                            <Text style={styles.time}>{order.time}</Text>
                        </View>
                        <View style={styles.statusBadge}>
                            <Text style={styles.statusText}>{order.status}</Text>
                        </View>
                    </View>
                ))}

                <Text style={[styles.subtitle, { marginTop: 12 }]}>Прошедшие и отклоненные</Text>
                {ORDERS.filter(order => !order.upcoming).map((order) => (
                    <View key={order.id} style={styles.row}>
                        <Image source={{ uri: order.avatar }} style={styles.avatar} />
                        <View style={styles.info}>
                            <Text style={styles.name}>{order.name}</Text>
                            <Text style={styles.date}>{order.date}</Text>
                            <Text style={styles.time}>{order.time}</Text>
                        </View>
                        <View style={styles.statusBadge}>
                            <Text style={styles.statusText}>{order.status}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: Colors.backgroundPrimary, 
        paddingTop: 58 
    },
    title: { 
        fontSize: 24,
        color: Colors.textPrimary, 
        fontWeight: 700,
        paddingHorizontal: 24, 
        marginBottom: 40
    },
    subtitle: { 
        fontSize: 20,
        color: Colors.textPrimary, 
        fontWeight: 700,
        paddingHorizontal: 24, 
        marginBottom: 23 
    },
    row: { 
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingHorizontal: 24, 
        marginBottom: 20 
    },
    avatar: { 
        width: 59, 
        height: 59, 
        borderRadius: 30, 
        marginRight: 17, 
        backgroundColor: '#eee' 
    },
    info: { 
        flex: 1 
    },
    name: { 
        fontSize: 18,
        fontWeight: 600,
        color: Colors.textPrimary, 
        marginBottom: 2 
    },
    date: { 
        fontSize: 13,
        color: Colors.placeholder,
        marginBottom: 2
    },
    time: {
        fontSize: 13, 
        color: Colors.placeholder,
    },
    statusBadge: { 
        backgroundColor: '#EBEBEB',
        paddingVertical: 8,
		paddingHorizontal: 18,
		borderRadius: 5,
        width: 100,
        alignItems: 'center',
    },
    statusText: {
        fontSize: 14,
        color: Colors.textPrimary,
        fontWeight: 700,
    },
})