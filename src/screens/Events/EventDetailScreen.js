// src/screens/Events/EventDetailScreen.js
import React from 'react';
import { View, Text } from 'react-native';

const EventDetailScreen = ({ route }) => {
  const { eventId } = route.params; // Assuming eventId is passed via navigation params

  // Fetch event details based on eventId from API or local storage

  return (
    <View>
      <Text>Event Detail Screen for Event ID: {eventId}</Text>
      {/* Display event details */}
    </View>
  );
};

export default EventDetailScreen;
