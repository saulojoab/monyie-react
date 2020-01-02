import React from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Container, Text, Icon} from 'native-base';
import pfp from './../../assets/img/eu.png';


export default function Header(props){
    return(
        <Container style={styles.headerContainer}>
        <View style={styles.photo} >
            <Icon name="ios-cart" style={{color: '#00BE68'}}/>
        </View>

        <View style={styles.textContainer}>
            <Text style={{fontFamily: 'Roboto-Black', fontSize: 30, color: '#00BE68', textAlign: 'center'}}>Compras //</Text>
            <Text style={{fontFamily: 'Roboto-Thin', fontSize: 28, color: '#00BE68', textAlign: 'center'}}> Lista</Text>
        </View>

        <TouchableOpacity onPress={props.addItemPressed} style={styles.iconContainer}>
            <View >
                <Icon name='ios-add' style={styles.icon}/>
            </View>
        </TouchableOpacity>
      </Container>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#383838',
        width: Dimensions.get('screen').width,
        flex: 0.08,
        alignItems: 'center',
        height: 30,
    },
    photo: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.1,
        padding: 10,
        
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        textAlign: 'left',
        flex: 0.7,
    },
    icon: {
        fontSize: 40,
        color: '#00BE68',
        alignSelf: 'flex-end'
    },
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.2,
        height: '100%',
        borderLeftColor: '#00BE68',
        borderLeftWidth: 0.5,
    },

})