// utils/anagramUtils.js
const WORDS = [
    { word: 'elma', anagram: 'mlea' },
    { word: 'react', anagram: 'cater' },
    { word: 'javascript', anagram: 'prajvitsca' },
    // kelime ekle
  ];
  
  export const getRandomAnagram = () => {
    const randomIndex = Math.floor(Math.random() * WORDS.length);
    return WORDS[randomIndex];
  };
  
  export const checkAnswer = (answer, correctAnswer) => {
    return answer.toLowerCase() === correctAnswer.toLowerCase();
  };
  