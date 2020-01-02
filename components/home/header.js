import React from 'react';
import {StyleSheet, View, TouchableOpacity, Dimensions, Image} from 'react-native';
import {Container, Text, Icon} from 'native-base';
import pfp from './../../assets/img/eu.png';


export default function Header(){
    return(
        <Container style={styles.headerContainer}>
        <View style={styles.photo} >
          <Image source={pfp} style={{width:80, height: 80, borderRadius: 50, opacity: 0.7}}/>
        </View>

        <View style={styles.textContainer}>
          <Text style={{fontFamily: 'Roboto-Black', fontSize: 30, color: '#00BE68', textAlign: 'center'}}>Olá,</Text>
          <Text style={{fontFamily: 'Roboto-Thin', fontSize: 25, color: '#00BE68', textAlign: 'center'}}>Saulo Joab :)</Text>
        </View>
        <View style={styles.iconContainer}>
            <TouchableOpacity>
              <Icon name='ios-settings' style={styles.icon}/>
            </TouchableOpacity>
        </View>
      </Container>
    )
}

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        backgroundColor: '#383838',
        width: Dimensions.get('screen').width,
        flex: 0.15,
        alignItems: 'center',
        paddingLeft: 20
    },
    photo: {
        backgroundColor: '#009350',
        height: 80,
        width: 80,
        borderRadius: 50,
        flex: 0.25
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'column',
        padding: 20,
        flex: 0.5,
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
        padding: 10,
    }
})