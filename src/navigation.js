// Navigation.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import EventsScreen from './screens/EventsScreen';
import NewsFeedScreen from './screens/NewsFeedScreen';
import PrivacySettingsScreen from './screens/PrivacySettingsScreen';
import SettingsScreen from './screens/SettingsScreen';
import AdminScreen from './screens/AdminScreen';
import EventDetailScreen from './screens/EventDetailScreen';
import ChatScreen from './screens/ChatScreen';
import OnboardingScreen from './screens/OnboardingScreen';

const Stack = createStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="Events" component={EventsScreen} />
        <Stack.Screen name="NewsFeed" component={NewsFeedScreen} />
        <Stack.Screen name="PrivacySettings" component={PrivacySettingsScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        <Stack.Screen name="Admin" component={AdminScreen} />
        <Stack.Screen name="EventDetail" component={EventDetailScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
