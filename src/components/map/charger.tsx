import React from 'react';
import { View, Text, Button } from 'react-native';

export default function Charger() {
    return (
        <View>
            <Text>Charger</Text>
            <Button title="Press me" onPress={() => alert("This is a button!")} />
        </View>
    );
}