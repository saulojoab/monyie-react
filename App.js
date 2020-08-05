import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity
} from 'react-native';

import { Input } from './components'

import normalize from 'react-native-normalize'


export default function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')
  const [feira, setFeira] = useState([]);

  function addItemToList() {
    if (name === '' || price === '' || amount === '') {
      return;
    }

    const items = new Array(feira.values);

    const item = {
      name,
      price,
      amount
    }

    console.warn(item);

    items.push(item);
    setFeira(items);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#282A36" barStyle="light-content" />

      <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
        <Input onChangeText={(t) => setName(t)} label="Nome do Produto" placeholder="Nome do Produto" />
        <Input onChangeText={(t) => setPrice(t)} label="Preço do Produto" placeholder="Preço do Produto" />
        <Input onChangeText={(t) => setAmount(t)} label="Quantidade" placeholder="Quantidade" />

        <TouchableOpacity onPress={addItemToList} style={styles.button}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Add</Text>
        </TouchableOpacity>
      </View>

        {feira.length > 0 ? (
          <ScrollView style={{ flex: 1 }}>
            {
              feira.map((item) => {
                return (
                  <>
                    <Text style={{ color: 'white' }}>{item.nome}</Text>
                    <Text style={{ color: 'white' }}>{item.preco}</Text>
                    <Text style={{ color: 'white' }}>{item.quantidade}</Text>
                  </>
                )
              }
              )
            }
          </ScrollView>
        ) : (
          <View style={styles.empty}>
            <Text style={{ color: 'white'}}>num tem coisa</Text>
          </View>
        )}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center', 
    flex: 1,
    backgroundColor: '#282A36'
  },
  empty: {
    flex: 0.6, 
    width: '100%',
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  button: {
    backgroundColor: 'green',
    height: normalize(40),
    width: normalize(100),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 10,
    marginTop: normalize(10)
  }
})

