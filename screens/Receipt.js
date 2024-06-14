// Receipt.js

import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function Receipt({ route }) {
    const { name, items, total } = route.params;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Receipt</Text>
        <View style={styles.receipt}>
          <Text style={styles.receiptHeader}>Thrive</Text>
          <Text style={styles.receiptSubHeader}>Order Details</Text>
          <View style={styles.receiptItems}>
            {items.map((item, index) => (
              <View key={index} style={styles.receiptItem}>
                <Text style={styles.itemName}>{item.name}</Text>
                <Text style={styles.itemPrice}>{item.price}</Text>
              </View>
            ))}
          </View>
          <View style={styles.receiptTotal}>
            <Text style={styles.totalLabel}>Total:</Text>
            <Text style={styles.totalAmount}>{total}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  receipt: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    padding: 10,
  },
  receiptHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  receiptSubHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  receiptItems: {
    marginBottom: 10,
  },
  receiptItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  itemName: {
    flex: 1,
    marginRight: 10,
  },
  itemPrice: {
    width: 80,
    textAlign: 'right',
  },
  receiptTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderTopColor: '#000',
    paddingTop: 5,
  },
  totalLabel: {
    fontWeight: 'bold',
  },
  totalAmount: {
    fontWeight: 'bold',
  },
});
