import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const QRCodeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Redeem Your Reward</Text>
      <Image
        source={{ uri: 'https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=SampleQRCode' }}
        style={styles.qrCode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  qrCode: {
    width: 200,
    height: 200,
  },
});

export default QRCodeScreen;
