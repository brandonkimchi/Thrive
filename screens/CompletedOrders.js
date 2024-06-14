// CompletedOrders.js
import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function CompletedOrders() {
  const navigation = useNavigation();

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Completed Orders</Text>
          <OrderCard
            name="Nicole"
            items={[
              { name: '1 x PB Brownie', price: '$5.11' },
              { name: '1 x Salmon Quiche', price: '$7.00' }
            ]}
            total="$12.11"
            navigation={navigation}
          />
          <OrderCard
            name="Brandon"
            items={[
              { name: '1 x Butter Crossiant', price: '' },
              { name: '1 x Banana Chocolate Cupcake', price: '' },
              { name: '1 x Flourless Chocolate Cake', price: '' }
            ]}
            total="$18.45"
            navigation={navigation}
          />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const OrderCard = ({ name, items, total, navigation }) => (
  <View style={styles.orderCard}>
    <View style={styles.orderHeader}>
      <Text style={styles.orderName}>{name}</Text>
      <Text style={styles.orderTotal}>{total}</Text>
    </View>
    {items.map((item, index) => (
      <Text key={index} style={styles.orderItem}>{item.name}</Text>
    ))}
    <TouchableOpacity 
      onPress={() => navigation.navigate('DigitalReceipt', { name, items, total })} 
      style={styles.printButton}
    >
      <Text style={styles.printButtonText}>Print</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#E5E1FB',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#7D3CF8',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  orderCard: {
    backgroundColor: '#E5E1FB',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  orderHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  orderName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderTotal: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orderItem: {
    fontSize: 16,
  },
  printButton: {
    marginTop: 10,
    backgroundColor: '#7D3CF8',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  printButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
