import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Image, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const restaurantData = [
  { id: '1', name: 'Pizza Hut', image: require('../assets/images/pizza hut logo.png') },
  { id: '2', name: 'Jollibee', image: require('../assets/images/jollibee logo.jpg') },
  { id: '3', name: 'Sakae Sushi', image: require('../assets/images/sakae sushi logo.jpeg') },
];

const supermarketData = [
  { id: '1', name: 'Cold Storage', image: require('../assets/images/cold storage logo.png') },
  { id: '2', name: 'DON DON DONKI', image: require('../assets/images/DON DON DONKI logo.png') },
  { id: '3', name: 'Fairprice', image: require('../assets/images/fairprice logo.jpeg') },
];

const HomeScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [selectedTab, setSelectedTab] = useState('Restaurants');
  const [rewardsPoints, setRewardsPoints] = useState(100); // Sample rewards points
  const navigation = useNavigation(); // Get the navigation object
  const renderListItem = ({ item }) => (
    <TouchableOpacity style={styles.listItem} onPress={() => navigateToOrder(item.name)}>
      <Image source={item.image} style={styles.listItemImage} />
      <Text style={styles.listItemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const navigateToOrder = (restaurantName) => {
    if (restaurantName === 'Pizza Hut') {
      navigation.navigate('PizzaHut');
    } else {
      console.log(`Clicked ${restaurantName}`);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../assets/images/mari profile.jpg')} // Your app logo
          style={styles.logo}
        />
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('FavoritesScreen')}>
            <Image
              source={require('../assets/images/like icon.png')} // Heart icon image
              style={styles.icon}
            />
          </TouchableOpacity>
          <View>
            <TouchableOpacity style={styles.rewardsContainer} onPress={() => console.log('View rewards')}>
              <Text style={styles.rewardsText}>Points: {rewardsPoints} thrives</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.referButton} onPress={() => console.log('Refer friends')}>
              <Text style={styles.referButtonText}>Refer Friends</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Search for restaurants or supermarkets" //search bar
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Restaurants' && styles.activeTab]} //restaurants
          onPress={() => setSelectedTab('Restaurants')}
        >
          <Text style={styles.tabText}>Restaurants</Text> 
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'Supermarkets' && styles.activeTab]} //supermarkets
          onPress={() => setSelectedTab('Supermarkets')}
        >
          <Text style={styles.tabText}>Supermarkets</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={selectedTab === 'Restaurants' ? restaurantData : supermarketData}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 70,
    borderWidth: 2,
    borderColor: '#C9B6FF',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  icon: {
    width: 60,
    height: 60,
  },
  rewardsContainer: {
    backgroundColor: '#C9B6FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  rewardsText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  referButton: {
    backgroundColor: '#C9B6FF',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 20,
    alignItems: 'center',
  },
  referButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchBarContainer: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 5,
  },
  searchBar: {
    backgroundColor: '#f0f0f0',
    padding: 10,
    borderRadius: 5,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
  },
  tab: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#9996F1',
  },
  tabText: {
    fontSize: 16,
  },
  listContainer: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  listItem: {
    flex: 1,
    margin: 5,
    backgroundColor: '#C9B6FF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  listItemImage: {
    width: '100%',
    height: 150,
  },
  listItemText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
