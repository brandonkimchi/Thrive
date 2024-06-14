import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.activityHeader}>
        <Text style={styles.activityHeaderText}>Activity History</Text>
      </View>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>Food:</Text>
        <Text style={styles.summaryValue}>$9.00</Text>
        <Text style={styles.summaryText}>Groceries:</Text>
        <Text style={styles.summaryValue}>$23.10</Text>
      </View>
      <View style={styles.history}>
        <Text style={[styles.date, { fontSize: 18 }]}>Mon, 03 Jun 2024</Text>
        <View style={styles.item}>
          <Text>FairPrice</Text>
          <Text>Tomatoes x 30</Text>
          <Text>$8.45</Text>
        </View>
        <View style={styles.item}>
          <Text>Amazon Fresh</Text>
          <Text>Apples x 10</Text>
          <Text>$12.50</Text>
        </View>
        <View style={styles.separator} />
        <Text style={[styles.date, { fontSize: 18 }]}>Sat, 01 Jun 2024</Text>
        <View style={styles.item}>
          <Text>Don Don Donki</Text>
          <Text>Hokkaido Fresh Milk x 1</Text>
          <Text>$2.15</Text>
        </View>
        <View style={styles.item}>
          <Text>APizza Maru</Text>
          <Text>Pepperoni x 2</Text>
          <Text>$9.00</Text>
        </View>
        {/* Add more items similarly */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f8f8f8',
  },
  
  activityHeader: {
    backgroundColor: '#E5E1FB',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    marginTop: 0,
  },
  activityHeaderText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7D3CF8',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  summaryText: {
    fontSize: 16,
    color: '#7D3CF8',
  },
  summaryValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7D3CF8',
  },
  history: {
    backgroundColor: '#fff',
    borderRadius: 5,
    marginVertical: 10,
    padding: 10,
  },
  date: {
    fontSize: 16,
    color: '#7D3CF8',
    marginBottom: 5,
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 5,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    marginVertical: 5,
  },
});
