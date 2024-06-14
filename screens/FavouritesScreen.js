import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';

const favoriteData = [
  { id: '1', name: 'Favorite Restaurant 1', image: require('../assets/images/pizza hut logo.png') },
  { id: '2', name: 'Favorite Restaurant 2', image: require('../assets/images/jollibee logo.jpg') },
  { id: '3', name: 'Favorite Supermarket 1', image: require('../assets/images/fairprice logo.jpeg') },
];

const FavoritesScreen = () => {
  const [favorites, setFavorites] = useState(favoriteData);

  const removeFavorite = (id) => {
    setFavorites(favorites.filter(item => item.id !== id));
  };

  const renderFavoriteItem = ({ item }) => (
    <View style={styles.favoriteItem}>
      <Image source={item.image} style={styles.favoriteItemImage} />
      <Text style={styles.favoriteItemText}>{item.name}</Text>
      <TouchableOpacity onPress={() => removeFavorite(item.id)} style={styles.removeButton}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={favorites}
        renderItem={renderFavoriteItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  listContainer: {
    paddingBottom: 20,
  },
  favoriteItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    paddingBottom: 10,
  },
  favoriteItemImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  favoriteItemText: {
    flex: 1,
    fontSize: 16,
  },
  removeButton: {
    padding: 5,
    backgroundColor: '#FF6347',
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 12,
  },
});

export default FavoritesScreen;

