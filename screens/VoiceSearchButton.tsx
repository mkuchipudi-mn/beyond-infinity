import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Loader from 'react-native-three-dots-loader'

export const VoiceSearchButton = ({ toggleListening, message, loader }: { toggleListening: any, message: any, loader: any }) => {
    return (
        <>
            <Text style={styles.message} >Hold to speak and release to search</Text>
            <TouchableOpacity onPressIn={toggleListening} onPressOut={toggleListening}>
                <FontAwesome name='microphone' style={styles.button} size={40}></FontAwesome>
                <Text style={styles.message}>{message}</Text>
            </TouchableOpacity>
            {loader && <Loader />}
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
    message: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
});