import React, { useState } from 'react';
import { Image, Text, View, TextInput, Pressable, StyleSheet, ScrollView, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function SelfPickup({ navigation }) {
  const [selectedOutlet, setSelectedOutlet] = useState(null);

  const handleOutletSelection = (outlet) => {
    setSelectedOutlet(outlet);
  };

  const handleContinue = () => {
    if (selectedOutlet) {
      navigation.navigate('CartContext');
    } else {
      Alert.alert('No Outlet Selected', 'Please select an outlet before continuing.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Choose Your Outlet</Text>
        <Text style={styles.subtitle}>You can select the outlet based on distance.</Text>
        
        <TextInput 
          style={styles.input} 
          placeholder="Enter your location/postal code"
          defaultValue="Marine Parade, Singapore"
        />
        
        <Pressable 
          style={[styles.outlet, selectedOutlet === 'PLQ' && styles.selectedOutlet]} 
          onPress={() => handleOutletSelection('PLQ')}
        >
          <Image source={require('../assets/images/thrive logo.png')} style={styles.outletImage} />
          <View style={styles.outletDetails}>
            <Text style={styles.outletTitle}>PLQ - Paya Lebar Quarter</Text>
            <Text style={styles.outletSubtitle}>PLQ Mall, 10 Paya Lebar Road, Singapore 409057</Text>
            <Text style={styles.outletInfo}>2 km</Text>
            <Text style={styles.outletInfo}>Waiting time: 5 min</Text>
          </View>
        </Pressable>

        {/* Add similar Pressable for NEX outlet */}

        <Pressable style={styles.continueButton} onPress={handleContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </Pressable>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  container: {
    width: '100%',
    maxWidth: 600,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#888',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  outlet: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff', // Add this line
  },
  selectedOutlet: {
    backgroundColor: '#F8F8F8', // Change this to the desired highlight color
  },
  outletImage: {
    width: 100,
    height: 100,
  },
  outletDetails: {
    flex: 1,
    padding: 10,
  },
  outletTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  outletSubtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 5,
  },
  outletInfo: {
    fontSize: 12,
    color: '#666',
  },
  continueButton: {
    backgroundColor: '#7E7BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
    width: '100%',
  },
  continueButtonText: {
    color: '#fff',
    fontSize: 16,
  },
});
