import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';

const WillingHeartsScreen = ({ navigation }) => {
  const [donationCount, setDonationCount] = useState(0);

  const handleArrangePickup = () => {
    // Implement the pickup arrangement logic here
    alert('Arrange Pickup for Willing Hearts');
    setDonationCount(donationCount + 1); // Increment donation count
  };

  const handleArrangeDelivery = () => {
    // Implement the delivery arrangement logic here
    alert('Arrange Delivery for Willing Hearts');
    setDonationCount(donationCount + 1); // Increment donation count
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/willing hearts.png')} style={styles.logo} />
      <Text style={styles.heading}>Willing Hearts</Text>
      <Text style={styles.donationTracker}>Donations Made: {donationCount}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Arrange Pickup" onPress={handleArrangePickup} />
        <Button title="Arrange Delivery" onPress={handleArrangeDelivery} />
      </View>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  donationTracker: {
    fontSize: 16,
    color: 'green',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'lightgray',
    marginVertical: 20,
  },
});

export default WillingHeartsScreen;
