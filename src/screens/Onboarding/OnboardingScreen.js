// src/screens/Onboarding/OnboardingScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const OnboardingScreen = ({ navigation }) => {
  const completeOnboarding = () => {
    // Implement logic to mark onboarding as complete (e.g., set in AsyncStorage)
    // Navigate to HomeScreen or other appropriate screen
    navigation.navigate('Home');
  };

  return (
    <View>
      <Text>Welcome to Voisin App!</Text>
      <Text>Complete Onboarding Steps</Text>
      <Button title="Continue" onPress={completeOnboarding} />
    </View>
  );
};

export default OnboardingScreen;
