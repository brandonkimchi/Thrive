import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList, TouchableOpacity } from 'react-native';

// Define the itemsToOrder array
const itemsToOrder = [
  { id: '1', name: 'Hawaiian Pizza', originalPrice: '15', discountedPrice: '7.50', discountPercentage: '50', image: require('../assets/images/Pizza picture.jpeg') },
  { id: '2', name: 'Pepperoni Pizza', originalPrice: '12', discountedPrice: '9.60', discountPercentage: '20', image: require('../assets/images/Pizza picture.jpeg') },
  { id: '3', name: 'Vegetarian Pizza', originalPrice: '10', discountedPrice: '8', discountPercentage: '20', image: require('../assets/images/Pizza picture.jpeg') },
  // Add more items as needed
];

// Define the PizzaHut component
const PizzaHut = ({ navigation }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.itemDetails}>
        <Text style={styles.itemName}>{item.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>${item.originalPrice}</Text>
          <View style={styles.discountContainer}>
            <Text style={styles.discountedPrice}>${item.discountedPrice}</Text>
            <Text style={styles.discountPercentage}>({item.discountPercentage}% off)</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.addToCartButton} onPress={() => addToCart(item)}>
        <Text style={styles.addToCartButtonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/pizza hut logo.png')} style={styles.restaurantImage} />
      <FlatList
        data={itemsToOrder}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
      <TouchableOpacity
        style={styles.viewCartButton}
        onPress={() => navigation.navigate('CartScreen', { cartItems })}
      >
        <Text style={styles.viewCartButtonText}>View Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  restaurantImage: {
    width: '100%',
    height: 200, // Adjust height as needed
    resizeMode: 'cover',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    textDecorationLine: 'line-through',
    marginRight: 5,
  },
  discountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  discountedPrice: {
    fontWeight: 'bold',
    fontSize: 18, // Increased font size
    marginRight: 5,
  },
  discountPercentage: {
    color: 'green',
    fontSize: 18, // Increased font size
  },
  addToCartButton: {
    backgroundColor: '#C9B6FF',
    padding: 5,
    borderRadius: 5,
  },
  addToCartButtonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  viewCartButton: {
    backgroundColor: '#7E7BFF',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewCartButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});

export default PizzaHut;
