// src/screens/Messaging/ChatScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const ChatScreen = ({ route }) => {
  const { userId } = route.params; // Assuming userId is passed via navigation params
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]); // Array to store chat messages

  const sendMessage = () => {
    // Implement sending message functionality
    // Append message to messages array
    setMessages([...messages, { text: message, sender: 'user' }]);
    setMessage('');
  };

  return (
    <View>
      <Text>Chat Screen with User ID: {userId}</Text>
      {/* Display chat messages */}
      <View>
        {messages.map((msg, index) => (
          <Text key={index}>{msg.text}</Text>
        ))}
      </View>
      <TextInput
        placeholder="Type your message..."
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={sendMessage} />
    </View>
  );
};

export default ChatScreen;
