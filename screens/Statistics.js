import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { ProgressBar, Badge } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

const screenWidth = Dimensions.get("window").width;

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/images/app logo.png')} style={styles.logo} />
        <Text style={styles.title}>Thrive Tracker</Text>
      </View>

      <View style={styles.badgeWrapper}>
        <View style={styles.badgeContainer}>
          <Badge style={styles.badge}>New</Badge>
          <Badge style={styles.badge}>Eco-Warrior</Badge>
        </View>
      </View>

      <View style={[styles.section, styles.lowerSection]}>
        <Text style={styles.sectionTitle}>Track Your Food Waste</Text>
        <Text style={styles.sectionSubtitle}>Prepare less on low demand days</Text>
        <LineChart
          data={{
            labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            datasets: [
              {
                data: [20, 45, 30, 80, 100, 40, 50]
              }
            ]
          }}
          width={screenWidth - 40}
          height={220}
          chartConfig={{
            backgroundColor: "#7E7BFF",
            backgroundGradientFrom: "#A1A0FF",
            backgroundGradientTo: "#C2C1FF",
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "#7E7BFF"
            }
          }}
          style={styles.graphImage}
        />
        <Text style={styles.description}>
          Monitor your daily food waste to identify trends and reduce unnecessary waste. 
          Make data-driven decisions to minimize over-preparation and contribute to a sustainable future.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => alert('Detailed Report')}>
          <Text style={styles.buttonText}>View Detailed Report</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.section, styles.lowerSection]}>
        <Text style={styles.sectionTitle}>Your Carbon Footprint Today</Text>
        <View style={styles.centerContent}>
          <Image source={require('../assets/images/carbon footprint.png')} style={styles.footprint} />
          <Text style={styles.percentage}>47%</Text>
        </View>
        <ProgressBar progress={0.47} color="#7E7BFF" style={styles.progressBar} />
        <Text style={styles.footprintText}>
          Pay more attention to your food wastage, play your role in protecting the environment!
        </Text>
        <Text style={styles.description}>
          Understanding your carbon footprint helps you take actionable steps to reduce it. 
          Track your progress and see the positive impact of your efforts.
        </Text>
        <TouchableOpacity style={styles.button} onPress={() => alert('Tips to Reduce Carbon Footprint')}>
          <Text style={styles.buttonText}>Learn How to Reduce</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginLeft: 8,
    color: '#7E7BFF',
  },
  badgeWrapper: {
    alignItems: 'center',
    marginVertical: 16,
  },
  badgeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#EDEAFF',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: -20
  
  },
  badge: {
    marginHorizontal: 8,
    backgroundColor: '#7E7BFF',
    color: '#fff',
    fontSize: 16,
    fontWeight: 'semi-bold',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 8,
    height: 40,
    lineHeight: 24, // Adjust lineHeight to center text vertically
  },
  section: {
    padding: 16,
    backgroundColor: '#f8f8f8',
    marginVertical: 8,
    borderRadius: 8,
    marginHorizontal: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  lowerSection: {
    marginTop: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
    color: '#2c3e50',
  },
  sectionSubtitle: {
    fontSize: 16,
    color: '#7f8c8d',
    marginBottom: 16,
    textAlign: 'center',
  },
  graphImage: {
    alignSelf: 'center',
    borderRadius: 16,
    marginBottom: 16,
  },
  centerContent: {
    alignItems: 'center',
    marginBottom: 16,
  },
  footprint: {
    width: 200,
    height: 200,
    marginVertical: 16,
  },
  percentage: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#7E7BFF',
    textAlign: 'center',
  },
  footprintText: {
    fontSize: 16,
    color: '#7f8c8d',
    textAlign: 'center',
    marginTop: 8,
  },
  description: {
    fontSize: 14,
    color: '#34495e',
    textAlign: 'center',
    marginTop: 8,
    paddingHorizontal: 16,
  },
  progressBar: {
    width: screenWidth - 80,
    height: 10,
    alignSelf: 'center',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#7E7BFF',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  }
});

