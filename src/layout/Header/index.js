import React from 'react';

import { StyleSheet, View, TouchableNativeFeedback, Text } from 'react-native';
import { Icon } from 'native-base';

import normalize from 'react-native-normalize'

import PropTypes from 'prop-types';

export default function Header(props) {
    return (
        <View style={styles.header}>
            {!props.hideLeft ? (
                <View style={styles.left}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('#353D4A', true)}>
                    <View style={{ width: normalize(40), justifyContent: 'center', alignItems: 'center' }}>
                        <Icon type="FontAwesome5" name="arrow-left" style={styles.icon} />
                    </View>
                </TouchableNativeFeedback>
            </View>
            ) : null}
            
            {!props.hideCenter ? (
            <View style={styles.center}>
                <Text style={styles.logo}>MONYIE</Text>
            </View>
            ) : null}

            {!props.hideRight ? (
            <View style={styles.right}>
                <TouchableNativeFeedback background={TouchableNativeFeedback.Ripple('white', false)} onPress={() => setVisible(true)}>
                    <Icon type="FontAwesome5" name="search" style={[styles.icon, { fontSize: normalize(25) }]} />
                </TouchableNativeFeedback>
            </View>
            ) : null}
      </View>
    )
}

const styles = StyleSheet.create({
    header: {
        flex: 0.1,
        backgroundColor: '#282A36',
        justifyContent: 'center',
        paddingLeft: normalize(20),
        paddingRight: normalize(20),
        flexDirection: 'row',
    },
    left: {
        flex: 1,
        justifyContent: 'center'
    },
    right: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    icon: {
        color: 'white',
        fontSize: normalize(30)
    },
    logo: {
        fontFamily: 'Neucha-Regular',
        fontSize: normalize(35),
        color: '#779664'
    }
})

Header.propTypes = {
    hideLeft: PropTypes.bool,
    hideCenter: PropTypes.bool,
    hideRight: PropTypes.bool,
}