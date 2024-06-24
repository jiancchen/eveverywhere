import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function PlansScreen() {
  // Function to handle plan selection could be added here

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Choose Your Plan</Text>
      
      <TouchableOpacity style={styles.planBox}>
        <Icon name="payment" size={24} color="#4F8EF7" />
        <Text style={styles.planTitle}>Flex Pay</Text>
        <Text>Pay as you go</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.planBox}>
        <Icon name="directions-car" size={24} color="#4F8EF7" />
        <Text style={styles.planTitle}>Around Town</Text>
        <Text>$25</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.planBox}>
        <Icon name="card-travel" size={24} color="#4F8EF7" />
        <Text style={styles.planTitle}>Road Trip</Text>
        <Text>$69 - $1 Temporary hold on card</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  planBox: {
    width: '100%',
    padding: 20,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  planTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default PlansScreen;