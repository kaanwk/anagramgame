// screens/HomeScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Anagram oyununa hosgeldiniz!</Text>
      <Button title="Oyuna basla" onPress={() => navigation.navigate('Game')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: 20,
  },
});

export default HomeScreen;
