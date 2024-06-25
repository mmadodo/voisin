// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile')}
      />
      <Button
        title="Go to Events"
        onPress={() => navigation.navigate('Events')}
      />
      <Button
        title="Go to News Feed"
        onPress={() => navigation.navigate('NewsFeed')}
      />
    </View>
  );
};

export default HomeScreen;
