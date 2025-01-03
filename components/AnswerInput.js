import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const AnswerInput = ({ onSubmit }) => {
    const [answer, setAnswer] = useState('');

    const handleSubmit = () => {
        onSubmit(answer.trim().toLowerCase());
        setAnswer('');
    };

    return (
        <View style={StyleSheet.inputContainer}>
            <TextInput
                style={styles.textInput}
                placeholder="Senin Cevabin"
                value={answer}
                onChangeText={setAnswer}
            />
            <Button title="Gonder" onPress={handleSubmit} />
        </View>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      marginTop: 20,
    },
    textInput: {
      flex: 1,
      borderBottomWidth: 1,
      marginRight: 10,
      fontSize: 18,
    },
});
  
export default AnswerInput;