//displaying the anagram to the player
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AnagramCard = ({ anagram }) => {
    return (
        <View style={StyleSheet.card}>
            <Text style={StyleSheet.anagramText}>{anagram}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    card: {
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f0f0f0',
        marginVertical: 20,
        alignItems: 'center',
    },
    anagramText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default AnagramCard;
