import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StartScreen = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground 
      source={require('../assets/images/start screen.png')} 
      style={styles.background}
    >
      <View style={styles.container}>
        <Image
          source={require('../assets/images/thrive logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Welcome to thrive</Text>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Main')}
        >
          <Text style={styles.buttonText}>User</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.button} 
          onPress={() => navigation.navigate('Business')} // Updated to navigate to 'Business' screen
        >
          <Text style={styles.buttonText}>Business</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Optional: To add a dark overlay to the background
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: -100,
    marginTop: -150
  },
  title: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 10,
    marginTop:10
  },
  button: {
    backgroundColor: '#9996F1',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 10,
    marginTop: 10,
    width: 200, // Fixed width
    height: 50, // Fixed height
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default StartScreen;
