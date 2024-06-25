// src/screens/Settings/SettingsScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Settings</Text>
      <Button title="Privacy Settings" onPress={() => navigation.navigate('PrivacySettings')} />
      {/* Add more settings options */}
    </View>
  );
};

export default SettingsScreen;
