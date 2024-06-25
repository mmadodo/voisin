// src/screens/Auth/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { login } from '../services/auth';

const LoginScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    login(username, password); // Implement login functionality
  };

  return (
    <View>
      <Text>Login Screen</Text>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;
