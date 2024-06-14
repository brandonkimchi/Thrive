import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RewardsScreen = () => {
  const [points, setPoints] = useState(250); // Sample points
  const [tier, setTier] = useState('Rookie Thriver'); // Current tier
  const [progress, setProgress] = useState(0); // Sample progress
  const [nric, setNric] = useState(''); // NRIC state
  const [discountCode, setDiscountCode] = useState(''); // Discount code state
  const [voucherCode, setVoucherCode] = useState(''); // E-Voucher code state
  const navigation = useNavigation();

  useEffect(() => {
    if (points > 750) {
      setTier('Master Thriver');
    } else if (points > 250) {
      setTier('Pro Thriver');
    } else {
      setTier('Rookie Thriver');
    }
    setProgress((points / 1000) * 100);
  }, [points]);

  const handlePointsSubmit = () => {
    if (voucherCode === 'code_exp') {
      setPoints(points + 50); // Add 50 points for the specified e-voucher code
      setVoucherCode(''); // Clear the e-voucher code input
    }
  };

  const handleRedeem = () => {
    const cost = 100; // Example cost
    if (points >= cost) {
      const newPoints = points - cost;
      setPoints(newPoints);
      // Generate a voucher code
      const voucher = Math.random().toString(36).substr(2, 8).toUpperCase(); // Generate a random alphanumeric string
      alert(`Voucher Code: ${voucher}`);
    } else {
      alert('Not enough points to redeem this reward');
    }
  };

  const handleNricSubmit = () => {
    // Validate NRIC and generate a discount code
    if (nric.length === 9) {
      setDiscountCode('DISCOUNT2024'); // Example discount code
      alert('Discount code generated: DISCOUNT2024');
    } else {
      alert('Please enter a valid NRIC');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.outerContainer}>
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <View style={styles.inputContainer}>
            <TextInput
              style={[styles.input, styles.largeInput, styles.bordered]}
              placeholder="Enter E-Voucher Code"
              onChangeText={setVoucherCode}
              value={voucherCode}
            />
            <TouchableOpacity style={styles.redeemButton} onPress={handlePointsSubmit}>
              <Text style={styles.redeemButtonText}>Redeem</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.tierContainer}>
            <Image
              source={require('../assets/images/rookie thriver.jpg')}
              style={[
                styles.tierIcon,
                tier === 'Rookie Thriver' && styles.activeTierIcon,
              ]}
            />
            <Text style={styles.tierText}>Rookie Thriver</Text>
          </View>
          <View style={styles.tierContainer}>
            <Image
              source={require('../assets/images/rookie thriver.jpg')}
              style={[
                styles.tierIcon,
                tier === 'Pro Thriver' && styles.activeTierIcon,
              ]}
            />
            <Text style={styles.tierText}>Pro Thriver</Text>
          </View>
          <View style={styles.tierContainer}>
            <Image
              source={require('../assets/images/rookie thriver.jpg')}
              style={[
                styles.tierIcon,
                tier === 'Master Thriver' && styles.activeTierIcon,
              ]}
            />
            <Text style={styles.tierText}>Master Thriver</Text>
          </View>
        </View>
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>Progress: {progress.toFixed(2)}%</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: `${progress}%` }]}></View>
          </View>
          <Text style={styles.pointsText}>{points} points</Text>
        </View>
        <View style={[styles.rewardsContainer, styles.bordered, styles.centered]}>
          <Text style={styles.title}>Rewards</Text>
          <TouchableOpacity style={styles.rewardButton} onPress={handleRedeem}>
            <Text style={styles.rewardText}>10% off next purchase - 100 points</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rewardButton} onPress={handleRedeem}>
            <Text style={styles.rewardText}>Free item - 250 points</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.lowIncomeContainer, styles.bordered, styles.centered]}>
          <Text style={styles.lowIncomeText}>Low Income Families</Text>
          <TextInput
            style={styles.input}
            placeholder="Enter NRIC"
            value={nric}
            onChangeText={setNric}
          />
          <TouchableOpacity style={styles.lowIncomeButton} onPress={handleNricSubmit}>
            <Text style={styles.lowIncomeButtonText}>Get Discount Code</Text>
          </TouchableOpacity>
          {discountCode ? (
            <Text style={styles.discountCodeText}>Discount Code: {discountCode}</Text>
          ) : null}
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  outerContainer: {
    flex: 1,
    padding: 20,
  },
  container: {
    flex: 1,
  },
  topContainer: {
    marginBottom: 20,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#7E7BFF',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '70%',
  },
  largeInput: {
    height: 50, // Adjust height to make the input larger
  },
  redeemButton: {
    backgroundColor: '#7E7BFF',
    borderRadius: 5,
    padding: 10,
    marginLeft: 10,
  },
  redeemButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tierContainer: {
    alignItems: 'center',
  },
  tierIcon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  activeTierIcon: {
    width: 70,
    height: 70,
  },
  tierText: {
    fontWeight: 'bold',
  },
  progressContainer: {
    alignItems: 'center',
  },
  progressText: {
    marginBottom: 5,
  },
  progressBar: {
    width: '100%',
    height: 20,
    backgroundColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#7E7BFF',
  },
  pointsText: {
    marginTop: 5,
  },
  rewardsContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0', // Background color added
    alignItems: 'center',
  },
  rewardButton: {
    width: '90%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#7E7BFF',
    borderRadius: 10,
    marginBottom: 10,
    alignItems: 'center',
  },
  rewardText: {
    color: '#7E7BFF',
    fontWeight: 'bold',
  },
  lowIncomeContainer: {
    marginTop: 20,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#f0f0f0', // Background color added
    alignItems: 'center',
  },
  lowIncomeText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  lowIncomeButton: {
    backgroundColor: '#7E7BFF',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  lowIncomeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  discountCodeText: {
    marginTop: 10,
  },
  bordered: {
    borderWidth: 1,
    borderColor: '#ccc',
  },
  centered: {
    alignItems: 'center',
  },
});

export default RewardsScreen;

   
