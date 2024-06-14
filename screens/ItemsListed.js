import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {
  const [isEnabled, setIsEnabled] = React.useState({
    AlmondBearClaw: true,
    BeefPie: false,
    BlueberryLoaf: true,
    Chocolatine: true,
    ChocolateHoneycombTart: false,
    LemonChiaSeedLoaf: true,
    PeanutButterBrownie: true,
    PorkFennelSageSausageRoll: true,
  });

  const toggleSwitch = (key) => {
    setIsEnabled(prevState => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  const toggleAllSwitches = () => {
    const updatedSwitches = {};
    for (const key in isEnabled) {
      updatedSwitches[key] = false;
    }
    setIsEnabled(updatedSwitches);
  };

  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.searchContainer}>
          <Text style={styles.filterText}>Enter item below</Text>
          <TextInput style={styles.searchInput} placeholder="Search for food item" />
        </View>
        <View style={styles.filterContainer}>
          {['Customer Favourites', 'Bakes', 'Beverages', 'Mains', 'Salads', 'Cupcakes', 'Savoury', 'Viennoiseries', 'Tea Cakes'].map((category) => (
            <TouchableOpacity key={category} style={styles.filterButton}>
              <Text style={styles.filterText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity style={styles.toggleButton} onPress={toggleAllSwitches}>
          <Text style={styles.toggleButtonText}>Toggle All Off</Text>
        </TouchableOpacity>
        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>Customer Favourites</Text>
          {Object.keys(isEnabled).map(key => (
            <View key={key} style={styles.itemContainer}>
              <Text style={styles.itemText}>{key.replace(/([A-Z])/g, ' $1').trim()}</Text>
              <Switch
                trackColor={{ false: "#767577", true: "#7D3CF8" }}
                thumbColor={isEnabled[key] ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={() => toggleSwitch(key)}
                value={isEnabled[key]}
              />
            </View>
          ))}
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
  searchContainer: {
    padding: 10,
  },
  searchInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
  },
  filterContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    padding: 10,
  },
  filterButton: {
    backgroundColor: '#E5E1FB',
    borderRadius: 5,
    padding: 10,
    margin: 5,
    width: '30%', // Set a fixed width for each button
    alignItems: 'center', // Center the text horizontally
    justifyContent: 'center', // Center the text vertically
  },
  filterText: {
    color: '#7D3CF8',
  },
  listContainer: {
    padding: 10,
  },
  listTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7D3CF8',
    marginVertical: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginTop: 20,
  },
  itemText: {
    fontSize: 16,
  },
  toggleButton: {
    backgroundColor: '#7E7BFF',
    borderRadius: 5,
    padding: 10,
    margin: 10,
    alignItems: 'center',
  },
  toggleButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
