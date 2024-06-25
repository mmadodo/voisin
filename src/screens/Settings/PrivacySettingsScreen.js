// src/screens/Settings/PrivacySettingsScreen.js
import React from 'react';
import { View, Text, Switch } from 'react-native';

const PrivacySettingsScreen = () => {
  const [isVisible, setIsVisible] = React.useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <Text>Privacy Settings</Text>
      <View>
        <Text>Visible to others</Text>
        <Switch value={isVisible} onValueChange={toggleVisibility} />
      </View>
    </View>
  );
};

export default PrivacySettingsScreen;
