import React, {useStates, useState} from 'react';
import {View,  StyleSheet, Dimensions, Image, TouchableOpacity} from 'react-native';
import { Container, Button, Text, Item, Input, Icon, Toast, Root } from 'native-base';
import logo from './assets/img/MONIYElogo.png';

export default function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = () => {
    if (email === 'oksaulo@gmail.com' && password === '123'){
      Toast.show({
        text: 'Autenticado com sucesso!',
        buttonText: 'Entendi',
        duration: 3000,
        position: 'bottom',
        type: 'success'
      });
    } else {
      Toast.show({
        text: 'Algum dos seus dados está incorreto!',
        buttonText: 'Entendi',
        duration: 3000,
        position: 'bottom',
        type: 'danger'
      });
    }
  };

  return (
    <Root>
    <Container style={styles.container}>
      <View style={{flex: 0.2, justifyContent: 'flex-end',}}>
        <Image source={logo} style={{width: 300, height: 60}}/>
      </View>
      <View style={{textAlign: 'left', flex: 0.3, justifyContent: 'center', width: Dimensions.get('screen').width * 0.7,}}>
        <Text style={{color: '#00BE68', fontSize: 35, fontFamily: 'Roboto-Black'}}>SEJA BEM-VINDO</Text>
        <Text style={{color: '#00BE68', fontSize: 30, fontFamily: 'Roboto-Thin'}}>{email === 'oksaulo@gmail.com' ? 'novamente, Saulo :)' : 'insira seus dados.'}</Text>
      </View>
      <View style={styles.formContainer}>

          <Item style={{borderBottomColor: '#383838'}}>
            <Icon active name='ios-mail' style={{color: "#00BE68"}} />
            <Input 
              keyboardType="email-address" 
              placeholder="Seu e-mail" 
              placeholderTextColor="#329468" 
              style={{color: '#00BE68', fontFamily: 'Roboto-Light'}}
              onChangeText={(e) => setEmail(e)}   
            />
          </Item>
          
          <Item style={{marginTop: 15, borderBottomColor: '#383838'}}>
            <Icon active name='ios-lock' style={{color: "#00BE68"}} />
            <Input 
              secureTextEntry 
              placeholder="Sua senha" 
              placeholderTextColor="#329468" 
              style={{color: '#00BE68', fontFamily: 'Roboto-Light'}}
              onChangeText={(p) => setPassword(p)}   
            />
          </Item>

          <Button 
          success 
          style={{marginTop: 30, width: 100, justifyContent: 'center', alignSelf: 'center'}}
          onPress={() => authenticate()}
          
          >
            <Text>Entrar</Text>
          </Button>
          <TouchableOpacity
          style={{alignSelf: 'center', marginTop: 10}}
          >
            <Text style={{color: '#00BE68', fontFamily: 'Roboto-Light'}}>Esqueceu a senha?</Text>
          </TouchableOpacity>
      </View>
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
  formContainer: {
    width: Dimensions.get('screen').width * 0.8,
    flex: 0.5,
    fontFamily: 'Roboto-thin'
  }
})