import React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Loader from 'react-native-three-dots-loader'

export const VoiceSearchButton = ({ onMicrophoneHold, onMicrophoneRelease, message, loader }: { onMicrophoneRelease: any, onMicrophoneHold: any, message: any, loader: any }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.message} >Hold to speak and release to search</Text>
            <TouchableOpacity onPressIn={onMicrophoneHold} onPressOut={onMicrophoneRelease}>
                <FontAwesome name='microphone' style={styles.button} size={65}></FontAwesome>
                <Text style={styles.message}>{message}</Text>
            </TouchableOpacity>
            {loader && <Loader />}
        </View>
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
        fontSize: 18,
        margin:15,

    },
});
