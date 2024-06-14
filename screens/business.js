import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { Provider as PaperProvider, Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Business() {
  const navigation = useNavigation();

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.welcome}>Welcome</Text>
          <Text style={styles.businessName}>Plain Vanilla</Text>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statText}>Total Sales Made Today!</Text>
              <Text style={styles.statValue}>$10.00</Text>
            </View>

            <View style={styles.statBox}>
              <Text style={styles.statText}>Refer a Business</Text>
              <TouchableOpacity style={styles.menuItem}>
                <Button 
                  icon="account-plus" 
                  mode="contained" 
                  style={styles.referButton}
                  onPress={() => navigation.navigate('ReferBiz')}
                >
                  Refer
                </Button>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.statsContainer}>
            <View style={styles.statBox}>
              <Text style={styles.statText}>Items Listed</Text>
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('ItemsListed')}
              >
                <Text style={styles.statValueBelow}>15</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.statBox}>
              <Text style={styles.statText}>Item Statistics</Text>
              <TouchableOpacity 
                style={styles.menuItem} 
                onPress={() => navigation.navigate('Statistics')}
              >
                <Button icon="chart-bar" mode="contained" style={styles.referButton}>View</Button>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigation.navigate('Orders')}
          >
            <Text style={styles.menuText}>Orders</Text>
            <Text style={styles.menuArrow}>➔</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigation.navigate('CompletedOrders')}
          >
            <Text style={styles.menuText}>Completed Orders</Text>
            <Text style={styles.menuArrow}>➔</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigation.navigate('MessagesBiz')}
          >
            <Text style={styles.menuText}>Messages</Text>
            <Text style={styles.menuArrow}>➔</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.menuItem} 
            onPress={() => navigation.navigate('Donate')}
          >
            <Text style={styles.menuText}>Donate</Text>
            <Text style={styles.menuArrow}>➔</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

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
  welcome: {
    fontSize: 16,
    color: '#7D3CF8',
    fontWeight: 'bold',
  },
  businessName: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
  },
  statBox: {
    width: '48%',
    backgroundColor: '#E5E1FB',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  statText: {
    fontSize: 17,
    color: '#7D3CF8',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  statValue: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
  statValueBelow: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },
  referButton: {
    backgroundColor: '#7E7BFF',
    marginTop: -10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E5E1FB',
    padding: 15,
    borderRadius: 10,
    marginVertical: 8, // Add margin bottom to create space between the buttons
  },
  menuText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  menuArrow: {
    fontSize: 16,
    color: '#7D3CF8',
  },
});
