import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image, Button } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const OrganisationCard = ({ name, logo }) => {
  const navigation = useNavigation();

  const handleDonate = () => {
    navigation.navigate('WillingHeartsScreen');
  };

  return (
    <View style={styles.card}>
      <Image source={logo} style={styles.logo} />
      <Text style={styles.cardText}>{name}</Text>
      <View style={styles.buttonContainer}>
        <Button title="Donate" onPress={handleDonate} />
      </View>
    </View>
  );
};

export default function App() {
  return (
    <PaperProvider>
      <ScrollView style={styles.container}>
        <View style={styles.content}>
          <Text style={styles.heading}>Donate to Organisations</Text>
          <Text style={styles.subheading}>Make the world a better place</Text>
          <View style={styles.organisationGrid}>
            <OrganisationCard name="Fei Yue Community Services" logo={require('../assets/images/fei yue.jpg')} />
            <OrganisationCard name="Willing Hearts" logo={require('../assets/images/willing hearts.png')} />
            <OrganisationCard name="Food from the Heart" logo={require('../assets/images/food from the heart.jpg')} />
            <OrganisationCard name="TOUCH Community Services" logo={require('../assets/images/touch community services.jpg')} />
            <OrganisationCard name="The Food Bank Singapore Ltd" logo={require('../assets/images/food bank.jpeg')} />
            <OrganisationCard name="Beyond Social Services" logo={require('../assets/images/beyond.png')} />
            <OrganisationCard name="Free Food For All" logo={require('../assets/images/free food for all.png')} />
            <OrganisationCard name="Lions Befrienders" logo={require('../assets/images/lions befrienders.jpeg')} />
          </View>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    backgroundColor: '#E5E1FB',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    color: '#7D3CF8',
    fontWeight: 'bold',
  },
  content: {
    padding: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subheading: {
    fontSize: 14,
    color: 'gray',
    marginBottom: 20,
  },
  organisationGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '48%',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 10,
    marginBottom: 20,
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 10,
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
