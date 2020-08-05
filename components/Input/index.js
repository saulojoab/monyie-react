import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import PropTypes from 'prop-types';

import normalize from 'react-native-normalize'

export default function Input(props) {
    return (
        <View style={styles.container}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <View style={{ flex: 0.6 }}>
                <TextInput onChangeText={props.onChangeText} style={styles.input} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        padding: normalize(10),
        flexDirection: 'row'
    },
    input: {
        width: '100%',
        height: normalize(35),
        color: '#282A36',
        padding: normalize(10),
        borderRadius: 5,
        backgroundColor: 'white',
    },
    labelContainer: {
        flex: 0.4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        color: 'white',
        margin: normalize(5),
    }
})  

Input.propTypes = {
    label: PropTypes.string
}