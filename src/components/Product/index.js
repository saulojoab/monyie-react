import React from 'react';
import { View, StyleSheet, Text, TouchableNativeFeedback } from 'react-native';
import normalize from 'react-native-normalize';
import { Icon } from 'native-base';

export default function Product(props) {
    return (
        <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#779664', false)}>
            <View style={styles.container}>
                <View style={styles.left}>
                    <View style={styles.ball}>
                        <Icon type="FontAwesome5" name="user" style={styles.icon}/>
                    </View>
                </View>
                <View style={styles.center}>
                    <Text style={styles.name}>{props.name}</Text>
                </View>
                <View style={styles.right}>
                    <Icon type="FontAwesome5" name="pen" style={[styles.icon, { marginRight: normalize(20), }]}/>
                </View>
            </View>
        </TouchableNativeFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2E3842',
        width: '90%',
        height: normalize(70),
        alignSelf: 'center',
        flexDirection: 'row',
        borderRadius: 10,
        elevation: 10,
        margin: normalize(8)
    },
    left: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    center: {
        flex: 0.6,
        justifyContent: 'center',
        alignItems: 'center',
    },
    right: {
        flex: 0.2,
        justifyContent: 'center',
        alignItems: 'flex-end',
        
    },
    ball: {
        width: normalize(50),
        height: normalize(50),
        backgroundColor: '#779664',
        borderRadius: 50,
        marginLeft: normalize(15),
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: 'white',
        fontSize: normalize(20)
    },
    name: {
        fontSize: normalize(25),
        color: '#779664',
        fontFamily: 'Roboto-Thin',
        textAlign: 'center'
    }
})