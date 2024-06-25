// src/screens/Auth/RegisterScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { register } from '../services/auth';

const RegisterScreen = () => {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleRegister = () => {
    register(username, password, email); // Implement register functionality
  };

  return (
    <View>
      <Text>Register Screen</Text>
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
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Button title="Register" onPress={handleRegister} />
    </View>
  );
};

export default RegisterScreen;
