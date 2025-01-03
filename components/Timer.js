//tracks the time left for the player to answer
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';

const Timer = ({ duration, onTimeUp }) => {
    const [timeLeft, setTimeLeft] = useState(duration);

    useEffect(() => {
        if (timeLeft === 0) {
            onTimeUp();
            return;
        }
        const timerId = setInterval(() => {
            setTimeLeft(timeLeft - 1);
        }, 1000);
        return () => clearInterval(timeId);
    }, [timeLeft]);

    return <Text style={StyleSheet.timerText}>{timeLeft}s</Text>;
};

const styles = StyleSheet.create({
    timerText: {
        fontSize: 20,
        color: '#ff0000',
    },
});

export default Timer;