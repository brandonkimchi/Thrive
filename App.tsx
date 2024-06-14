import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';
import StartScreen from './screens/StartScreen';
import Restaurant from './screens/Restaurant';
import PizzaHut from './screens/PizzaHut';
import WalletScreen from './screens/WalletScreen';
import MessagesScreen from './screens/MessagesScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import QRCodeScreen from './screens/QRCodeScreen';
import CartScreen from './screens/CartScreen';
import CartContext from './screens/CartContext';
import Business from './screens/business'; // Import the Business screen
import ItemsListed from './screens/ItemsListed';
import Orders from './screens/Orders';
import Receipt from './screens/Receipt';
import CompletedOrders from './screens/CompletedOrders';
import DigitalReceipt from './screens/DigitalReceipt';
import MessagesBiz from './screens/MessagesBiz';
import Donate from './screens/Donate';
import Statistics from './screens/Statistics';
import ReferBiz from './screens/ReferBiz'; 
import WillingHeartsScreen from './screens/WillingHeartsScreen';
import FavouritesScreen from './screens/FavouritesScreen';
import Nets from './screens/Nets';

// Create stack and tab navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Define the stack navigator for the Restaurant screens
const RestaurantStack = () => (
  <Stack.Navigator>
    <Stack.Screen name="Restaurant" component={Restaurant} options={{ headerShown: false }} />
    <Stack.Screen name="PizzaHut" component={PizzaHut} />
  </Stack.Navigator>
);

// Define the main tab navigator
const MainTabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;

        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home-outline';
        } else if (route.name === 'Wallet') {
          iconName = focused ? 'wallet' : 'wallet-outline';
        } else if (route.name === 'Messages') {
          iconName = focused ? 'chatbubble' : 'chatbubble-outline';
        } else if (route.name === 'Rewards') {
          iconName = focused ? 'medal' : 'medal-outline';
        } else if (route.name === 'Profile') {
          iconName = focused ? 'person' : 'person-outline';
        }

        return <Ionicons name={iconName} size={size} color={color} />;
      },
      tabBarActiveTintColor: '#7E7BFF',
      tabBarInactiveTintColor: '#9996F1',
    })}
  >
    <Tab.Screen name="Home" component={RestaurantStack} options={{ headerShown: false }} />
    <Tab.Screen name="Wallet" component={WalletScreen} />
    <Tab.Screen name="Messages" component={MessagesScreen} />
    <Tab.Screen name="Rewards" component={RewardsScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />

  </Tab.Navigator>
);

const AppHeaderRight = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerIcons}>
      <TouchableOpacity onPress={() => alert('Search icon pressed')} style={styles.iconContainer}>
        <Ionicons name="search" size={24} color="#333" style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('CartScreen')} style={styles.iconContainer}>
        <Ionicons name="cart" size={24} color="#333" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

// Define the main app component
const App = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="StartScreen"
      screenOptions={({ route }) => ({
        headerStyle: { backgroundColor: '#fff' },
        headerTitleAlign: 'center',
        headerTitle: () => (
          <Image
            source={require('./assets/images/thrive logo.png')}
            resizeMode="contain"
            style={styles.logo}
          />
        ),
        headerRight: () => {
          if (route.name !== 'Business' && route.name !== 'ItemsListed' && route.name !== 'Orders' && route.name !== 'Receipt' && route.name !== 'CompletedOrders' && route.name !== 'DigitalReceipt' && route.name !== 'MessagesBiz' && route.name !== 'Donate' && route.name !== 'Statistics' && route.name !== 'ReferBiz') {
            return <AppHeaderRight />;
          }
          return null;
        },
        headerTitleStyle: {
          fontSize: 24,
        },
      })}
    >
      <Stack.Screen name="StartScreen" component={StartScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={MainTabNavigator} />
      <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="CartContext" component={CartContext} />
      <Stack.Screen name="Business" component={Business} />
      <Stack.Screen name="ItemsListed" component={ItemsListed} />
      <Stack.Screen name="Orders" component={Orders} />
      <Stack.Screen name="Receipt" component={Receipt} />
      <Stack.Screen name="CompletedOrders" component={CompletedOrders} />
      <Stack.Screen name="DigitalReceipt" component={DigitalReceipt} />
      <Stack.Screen name="MessagesBiz" component={MessagesBiz} />
      <Stack.Screen name="Donate" component={Donate} />
      <Stack.Screen name="Statistics" component={Statistics} />
      <Stack.Screen name="ReferBiz" component={ReferBiz} />
      <Stack.Screen name="WillingHeartsScreen" component={WillingHeartsScreen} />
      <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
      <Stack.Screen name="Nets" component={Nets} />
    </Stack.Navigator>
  </NavigationContainer>
);

// Define the styles for the app
const styles = StyleSheet.create({
  logo: {
    width: 100,
    height: 100,
    marginTop: -30,
  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    marginLeft: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
});

// Export the app component
export default App;
