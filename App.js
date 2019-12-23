import React, {useStates, useState} from 'react';
import {View,  StyleSheet, Dimensions} from 'react-native';
import { Container, Button, Text, Item, Input, Icon, Label } from 'native-base';

export default function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container style={styles.container}>
      <View>
        <Text style={{color: '#00BE68', fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>Monyie</Text>
      </View>
      <View style={{textAlign: 'left'}}>
        <Text style={{color: '#00BE68', fontWeight: 'bold', fontSize: 30}}>SEJA BEM-VINDO {email === 'oksaulo@gmail.com' ? ', SAULO' : ''}</Text>
        <Text style={{color: '#00BE68', fontWeight: '100', fontSize: 30}}>entre abaixo.</Text>
      </View>
      <View style={styles.formContainer}>

          <Item>
            <Icon active name='ios-mail' style={{color: "#00BE68"}} />
            <Input 
              keyboardType="email-address" 
              placeholder="Seu e-mail" 
              placeholderTextColor="#329468" 
              style={{color: '#00BE68'}}
              onChange={(e) => setEmail(e)}   
            />
          </Item>
          
          <Item style={{marginTop: 15}}>
            <Icon active name='ios-lock' style={{color: "#00BE68"}} />
            <Input 
              secureTextEntry 
              placeholder="Sua senha" 
              placeholderTextColor="#329468" 
              style={{color: '#00BE68'}}
              onChange={(p) => setPassword(p)}   
            />
          </Item>

          <Button success style={{marginTop: 15, width: 100, justifyContent: 'center', alignSelf: 'center'}}>
            <Text>Entrar</Text>
          </Button>
      </View>
    </Container>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: Dimensions.get('screen').height,
    backgroundColor: '#1C1C1C',
    padding: 20,
    
  },
  formContainer: {
    width: Dimensions.get('screen').width * 0.7,
  }
})