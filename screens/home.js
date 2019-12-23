import React, {useStates, useState} from 'react';
import {View,  StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import { Container, Button, Text, Item, Input, Icon, Toast, Root } from 'native-base';
import logo from './../assets/img/MONIYElogo.png';

export default function Home(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Root>
    <Container style={styles.container}>
      <Text>OKNOTOK</Text>
    </Container>
    </Root>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: Dimensions.get('screen').height,
    backgroundColor: '#1C1C1C',
    padding: 20,
    alignItems: 'center',
    fontFamily: 'Roboto'
  },
})