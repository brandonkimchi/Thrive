import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo icons
import Restaurant from './screens/Restaurant';
import PizzaHut from './screens/PizzaHut';
import WalletScreen from './screens/WalletScreen';
import MessagesScreen from './screens/MessagesScreen';
import RewardsScreen from './screens/RewardsScreen';
import ProfileScreen from './screens/ProfileScreen';
import QRCodeScreen from './screens/QRCodeScreen'; // Import QRCodeScreen
import CartScreen from './CartScreen'; // Import your CartScreen component
import FavouritesScreen from './screens/FavouritesScreen';



const MainStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="PizzaHut" component={PizzaHutScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} /> {/* Add this line */}
      <Stack.Screen name="FavouritesScreen" component={FavouritesScreen} />
    </Stack.Navigator>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const RestaurantStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Restaurant" component={Restaurant} options={{ headerShown: false }} />
      <Stack.Screen name="PizzaHut" component={PizzaHut} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
            iconColor = focused ? '#7E7BFF' : '#9996F1'; // Example colors
          } else if (route.name === 'Wallet') {
            iconName = focused ? 'wallet' : 'wallet-outline';
            iconColor = focused ? '#7E7BFF' : '#9996F1'; // Example colors
          } else if (route.name === 'Messages') {
            iconName = focused ? 'chatbubble' : 'chatbubble-outline';
            iconColor = focused ? '#7E7BFF' : '#9996F1'; // Example colors
          } else if (route.name === 'Rewards') {
            iconName = focused ? 'medal' : 'medal-outline';
            iconColor = focused ? '#7E7BFF' : '#9996F1'; // Example colors
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
            iconColor = focused ? '#7E7BFF' : '#9996F1'; // Example colors
          }

          return <Ionicons name={iconName} size={size} color={iconColor} />;
        },
        tabBarActiveTintColor: '#7E7BFF',
        tabBarInactiveTintColor: '#9996F1',
      })}
    >
      <Tab.Screen name="Home" component={RestaurantStack} />
      <Tab.Screen name="Wallet" component={WalletScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
      <Tab.Screen name="Rewards" component={RewardsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={MainTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="QRCodeScreen" component={QRCodeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
