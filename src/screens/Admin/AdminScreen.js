// src/screens/Admin/AdminScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';

const AdminScreen = () => {
  const users = [
    { id: '1', name: 'Admin User', role: 'Admin' },
    { id: '2', name: 'User123', role: 'User' },
    // Add more users
  ];

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.role}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default AdminScreen;
