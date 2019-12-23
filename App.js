import React, {useStates, useState} from 'react';
import {View,  StyleSheet, Dimensions} from 'react-native';
import { Container, Button, Text, Item, Input, Icon, Toast, Root } from 'native-base';

export default function App(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const authenticate = () => {
    if (email === 'oksaulo@gmail.com' && password === '123'){
      console.warn('logou');
    } else {
      Toast.show({
        text: 'Algum dos seus dados está incorreto!',
        buttonText: 'Entendi',
        duration: 5000,
        position: 'bottom',
        type: 'danger'
      });
    }
  };

  return (
    <Root>
    <Container style={styles.container}>
      <View style={{flex: 0.2, justifyContent: 'flex-end'}}>
        <Text style={{color: '#00BE68', fontWeight: 'bold', fontSize: 30, textAlign: 'center'}}>Monyie</Text>
      </View>
      <View style={{textAlign: 'left', flex: 0.3, justifyContent: 'center', width: Dimensions.get('screen').width * 0.7,}}>
        <Text style={{color: '#00BE68', fontWeight: '100', fontSize: 30, fontFamily: 'Roboto'}}>SEJA BEM-VINDO{email === 'oksaulo@gmail.com' ? ',' : ''}</Text>
        <Text style={{color: '#00BE68', fontWeight: 'bold', fontSize: 30, fontFamily: 'Roboto'}}>{email === 'oksaulo@gmail.com' ? 'Saulo.' : 'entre abaixo.'}</Text>
      </View>
      <View style={styles.formContainer}>

          <Item style={{borderBottomColor: '#383838'}}>
            <Icon active name='ios-mail' style={{color: "#00BE68"}} />
            <Input 
              keyboardType="email-address" 
              placeholder="Seu e-mail" 
              placeholderTextColor="#329468" 
              style={{color: '#00BE68'}}
              onChangeText={(e) => setEmail(e)}   
            />
          </Item>
          
          <Item style={{marginTop: 15, borderBottomColor: '#383838'}}>
            <Icon active name='ios-lock' style={{color: "#00BE68"}} />
            <Input 
              secureTextEntry 
              placeholder="Sua senha" 
              placeholderTextColor="#329468" 
              
              style={{color: '#00BE68'}}
              onChangeText={(p) => setPassword(p)}   
            />
          </Item>

          <Button 
          success 
          style={{marginTop: 15, width: 100, justifyContent: 'center', alignSelf: 'center'}}
          onPress={() => authenticate()}
          >
            <Text>Entrar</Text>
          </Button>
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
    width: Dimensions.get('screen').width * 0.7,
    flex: 0.5,
    fontFamily: 'Roboto'
  }
})