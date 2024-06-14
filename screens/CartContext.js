import React from 'react';
import { View, Text, Image, Pressable, StyleSheet, ScrollView, TextInput } from 'react-native';

export default function PlqScreen({ navigation }) {
  const [voucherCode, setVoucherCode] = React.useState('');

  const redeemVoucher = () => {
    // Implement voucher redemption logic here
    console.log('Voucher code redeemed:', voucherCode);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>YOUR CART</Text>
        <Text style={styles.subtitle}>SELF PICKUP AT</Text>
        <Text style={styles.location}>PLQ - Paya Lebar Quarter</Text>
        <Text style={styles.address}>PLQ Mall, 10 Paya Lebar Road, Singapore, 409057</Text>
      </View>

      <View style={styles.datetime}>
        <View style={styles.datetimeItem}>
          <Text style={styles.datetimeLabel}>DATE OF PICKUP</Text>
          <Text style={styles.datetimeValue}>03-06-2024</Text>
        </View>
        <View style={styles.datetimeItem}>
          <Text style={styles.datetimeLabel}>COLLECTION TIME</Text>
          <Text style={styles.datetimeValue}>16:15 PM</Text>
        </View>
      </View>

      <View style={styles.cartItem}>
        <Image source={require('../assets/images/thrive logo.png')} style={styles.itemImage} />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>Pepperoni Pizza</Text>
          <Text style={styles.itemPrice}>14.00</Text>
        </View>
        <View style={styles.itemQuantity}>
          <Pressable style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>-</Text>
          </Pressable>
          <Text style={styles.quantityText}>2</Text>
          <Pressable style={styles.quantityButton}>
            <Text style={styles.quantityButtonText}>+</Text>
          </Pressable>
        </View>
      </View>

      <Text style={styles.addItems}>+ Add Items</Text>
      <Text style={styles.clearCart}>Clear Cart</Text>

      <View style={styles.voucherContainer}>
        <TextInput
          style={styles.voucherInput}
          placeholder="Enter e-voucher code..."
          value={voucherCode}
          onChangeText={setVoucherCode}
        />
        <Pressable style={styles.redeemButton} onPress={redeemVoucher}>
          <Text style={styles.redeemButtonText}>Redeem</Text>
        </Pressable>
      </View>

      <TextInput
        style={styles.messageInput}
        placeholder="Enter your message here..."
      />

      <View style={styles.paymentOptions}>
        <Text style={styles.payBy}>Pay By</Text>
        <Pressable style={styles.paymentButton}>
          <Text style={styles.paymentButtonText}>Apple Pay</Text>
        </Pressable>
        <Pressable style={styles.paymentButton} onPress={() => navigation.navigate('CardScreen')}>
          <Text style={styles.paymentButtonText}>Credit / Debit Card</Text>
        </Pressable>
        <Pressable style={styles.paymentButton} onPress={() => navigation.navigate('Nets')}>
          <Text style={styles.paymentButtonText}>NETS Bank Card</Text>
        </Pressable>
      </View>

      <Pressable style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Checkout</Text>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white', 
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginVertical: 5,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  address: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
  },
  datetime: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  datetimeItem: {
    alignItems: 'center',
  },
  datetimeLabel: {
    fontSize: 14,
    color: '#888',
  },
  datetimeValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  itemPrice: {
    fontSize: 14,
    color: '#888',
  },
  itemQuantity: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantityButton: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#888',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  quantityButtonText: {
    fontSize: 18,
    color: '#888',
  },
  quantityText: {
    marginHorizontal: 10,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  addItems: {
    fontSize: 16,
    color: '#8A2BE2',
    textAlign: 'center',
    marginVertical: 10,
  },
  clearCart: {
    fontSize: 16,
    color: '#8A2BE2',
    textAlign: 'center',
    marginBottom: 20,
  },
  messageInput: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  voucherContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  voucherInput: {
    flex: 1,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  redeemButton: {
    backgroundColor: '#7E7BFF',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
    alignItems: 'center',
  },
  redeemButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  paymentOptions: {
    marginVertical: 20,
  },
  payBy: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 10,
  },
  paymentButton: {
    backgroundColor: '#d3d3d3',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  paymentButtonText: {
    fontSize: 16,
    color: '#000',
  },
  checkoutButton: {
    backgroundColor: '#7E7BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
  },
  checkoutButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});









