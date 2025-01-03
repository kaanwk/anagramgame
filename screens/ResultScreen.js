// screens/ResultScreen.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ResultScreen = ({ route, navigation }) => {
  const { score } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Oyun Bitti!</Text>
      <Text style={styles.score}>Skorun: {score}</Text>
      <Button title="Yeniden oyna" onPress={() => navigation.navigate('Game')} />
      <Button title="Ev" onPress={() => navigation.navigate('Home')} />
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
  score: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 40,
  },
});

export default ResultScreen;
