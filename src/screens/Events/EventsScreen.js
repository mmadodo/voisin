// src/screens/Events/EventsScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const EventsScreen = () => {
  const events = [
    { id: '1', title: 'Community BBQ', location: 'Park', date: '2024-07-01' },
    { id: '2', title: 'Neighborhood Cleanup', location: 'Streets', date: '2024-07-10' },
    // Add more events
  ];

  return (
    <View>
      <FlatList
        data={events}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>{item.location}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default EventsScreen;
