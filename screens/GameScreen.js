// screens/GameScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';
import AnagramCard from '../components/Anagramcard';
import Timer from '../components/Timer';
import AnswerInput from '../components/AnswerInput';
import { getRandomAnagram, checkAnswer } from '../utils/anagramUtils';

const GAME_DURATION = 60; // seconds

const GameScreen = ({ navigation }) => {
  const [currentAnagram, setCurrentAnagram] = useState('');
  const [score, setScore] = useState(0);

  useEffect(() => {
    setNewAnagram();
  }, []);

  const setNewAnagram = () => {
    const { anagram, answer } = getRandomAnagram();
    setCurrentAnagram(anagram);
    // Store the correct answer in state or context if needed
    setCorrectAnswer(answer);
  };

  const [correctAnswer, setCorrectAnswer] = useState('');

  const handleSubmit = (userAnswer) => {
    if (userAnswer === correctAnswer.toLowerCase()) {
      setScore(score + 1);
      Alert.alert('Correct!', 'You got it right!', [
        { text: 'Next', onPress: () => setNewAnagram() },
      ]);
    } else {
      Alert.alert('Incorrect', 'Try again!');
    }
  };

  const handleTimeUp = () => {
    Alert.alert('Time Up!', `Your score: ${score}`, [
      { text: 'Go to Results', onPress: () => navigation.navigate('Result', { score }) },
    ]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.scoreText}>Score: {score}</Text>
      <Timer duration={GAME_DURATION} onTimeUp={handleTimeUp} />
      <AnagramCard anagram={currentAnagram} />
      <AnswerInput onSubmit={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  scoreText: {
    fontSize: 20,
    textAlign: 'right',
  },
});

export default GameScreen;
