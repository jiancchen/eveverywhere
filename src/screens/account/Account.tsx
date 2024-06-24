import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function AccountScreen() {
    return (
        <View style={styles.container}>
            <Icon name="account-circle" size={100} color="#4F8EF7" />
            <Text style={styles.title}>Account Screen</Text>
            <View style={styles.infoContainer}>
                <Icon name="email" size={24} color="#333" />
                <Text style={styles.infoText}>user@example.com</Text>
            </View>
            <View style={styles.infoContainer}>
                <Icon name="phone" size={24} color="#333" />
                <Text style={styles.infoText}>+1234567890</Text>
            </View>
            <View style={styles.infoContainer}>
                <Icon name="location-on" size={24} color="#333" />
                <Text style={styles.infoText}>123 Example Street</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF',
    },
    title: {
        fontSize: 24,
        marginVertical: 20,
    },
    infoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    infoText: {
        marginLeft: 10,
        fontSize: 18,
    },
});

export default AccountScreen;