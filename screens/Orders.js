import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Orders() {
  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Orders</Text>
          <OrderCard
            name="Javier Kah"
            items={[
              { name: '1 x Chocolatine', price: '$11.11' },
              { name: '1 x Beef Pie', price: '' }
            ]}
            total="$11.11"
          />
          <OrderCard
            name="Vernice Chan"
            items={[
              { name: '1 x Matcha Latte', price: '' },
              { name: '2 x Strawberry White Chocolate Cupcake', price: '' },
              { name: '1 x Flourless Chocolate Cake', price: '' }
            ]}
            total="$18.45"
          />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const OrderCard = ({ name, items, total }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.orderCard}>
      <View style={styles.orderHeader}>
        <Text style={styles.orderName}>{name}</Text>
        <Text style={styles.orderTotal}>{total}</Text>
      </View>
      {items.map((item, index) => (
        <Text key={index} style={styles.orderItem}>{item.name}</Text>
      ))}
      <TouchableOpacity onPress={() => navigation.navigate('Receipt', { name, items, total })} style={styles.printButton}>
        <Text style={styles.printButtonText}>Print</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
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
    backgroundColor: '#7E7BFF',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  printButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
