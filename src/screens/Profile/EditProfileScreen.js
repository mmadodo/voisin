// src/screens/Profile/EditProfileScreen.js
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const EditProfileScreen = () => {
  const [displayName, setDisplayName] = React.useState('');
  const [bio, setBio] = React.useState('');

  const handleSaveProfile = () => {
    // Implement save profile functionality
  };

  return (
    <View>
      <Text>Edit Profile Screen</Text>
      <TextInput
        placeholder="Display Name"
        value={displayName}
        onChangeText={setDisplayName}
      />
      <TextInput
        placeholder="Bio"
        value={bio}
        onChangeText={setBio}
        multiline
      />
      <Button title="Save Profile" onPress={handleSaveProfile} />
    </View>
  );
};

export default EditProfileScreen;
