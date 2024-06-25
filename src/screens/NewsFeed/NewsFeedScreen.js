// src/screens/NewsFeed/NewsFeedScreen.js
import React from 'react';
import { View, Text, FlatList } from 'react-native';
import React from 'react';
import { View, Text, Button } from 'react-native';

const NewsFeedScreen = ({ navigation }) => {
  return (
    <View>
      <Text>News Feed Screen</Text>
    </View>
  );
};

const NewsFeedScreen = () => {
  const posts = [
    { id: '1', author: 'Community Admin', text: 'Welcome to Voisin!', date: '2024-06-30' },
    { id: '2', author: 'User123', text: 'Excited to meet my neighbors!', date: '2024-07-01' },
    // Add more posts
  ];

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <View>
            <Text>{item.author}</Text>
            <Text>{item.text}</Text>
            <Text>{item.date}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default NewsFeedScreen;
