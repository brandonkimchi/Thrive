import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity, Share } from 'react-native';

export default function ReferBiz() {
  const [businessName, setBusinessName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [referralCode, setReferralCode] = useState('REF123456'); // Sample referral code

  const handleSubmit = () => {
    if (businessName && contactPerson && phoneNumber && email) {
      // Process the form submission here
      // For example, send the data to your backend or store it locally
      Alert.alert('Business Referred', `Business Name: ${businessName}\nContact Person: ${contactPerson}\nPhone: ${phoneNumber}\nEmail: ${email}`);
    } else {
      Alert.alert('Error', 'Please fill out all fields.');
    }
  };

  const shareReferralCode = async () => {
    try {
      await Share.share({
        message: `Refer a business using my code: ${referralCode}`,
      });
    } catch (error) {
      Alert.alert('Error', 'Failed to share referral code.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Refer a Business</Text>
      
      <TextInput
        style={styles.input}
        placeholder="Business Name"
        value={businessName}
        onChangeText={setBusinessName}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Contact Person"
        value={contactPerson}
        onChangeText={setContactPerson}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phoneNumber}
        onChangeText={setPhoneNumber}
        keyboardType="phone-pad"
      />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      
      <Button
        title="Submit"
        onPress={handleSubmit}
        color="#7D3CF8"
      />

      <View style={styles.referralContainer}>
        <Text style={styles.referralTitle}>Your Referral Code</Text>
        <Text style={styles.referralCode}>{referralCode}</Text>
        <TouchableOpacity style={styles.shareButton} onPress={shareReferralCode}>
          <Text style={styles.shareButtonText}>Share Code</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#7D3CF8',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#7D3CF8',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  referralContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  referralTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#7D3CF8',
    marginBottom: 10,
  },
  referralCode: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  shareButton: {
    backgroundColor: '#7E7BFF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  shareButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
