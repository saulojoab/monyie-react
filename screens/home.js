import React, {useState} from 'react';
import {View,  StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import { Container, Button, Text, Item, Input, Icon, Toast, Root } from 'native-base';

import Header from './../components/home/header';

export default function Home(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  return (
    <Container style={styles.container}>
      <Header/>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: Dimensions.get('screen').height,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
  },
})