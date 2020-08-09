import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  Dimensions,
  TouchableNativeFeedback,
} from 'react-native';

import { Input } from './components'
import { Header } from './layout'

import normalize from 'react-native-normalize'

export default function App() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [amount, setAmount] = useState('')
  const [feira, setFeira] = useState([]);

  const [visible, setVisible] = useState(false)

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
    setVisible(false);
  }

  function toggleModal() {
    setVisible(previousState => !previousState);
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#282A36" barStyle="light-content" />

      <Modal animated={true} animationType="fade" transparent={true} visible={visible}>
        <View style={styles.modalContainer}>
          <TouchableOpacity onPress={() => setVisible(false)} style={styles.backdrop} />

          <View style={styles.modalContent}>
            <Input onChangeText={(t) => setName(t)} label="Nome do Produto" placeholder="Nome do Produto" />
            <Input keyboardType="number-pad" onChangeText={(t) => setPrice(t)} label="Preço do Produto" placeholder="Preço do Produto" />
            <Input keyboardType="number-pad" onChangeText={(t) => setAmount(t)} label="Quantidade" placeholder="Quantidade" />

            <TouchableOpacity onPress={addItemToList} style={styles.button}>
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Add</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Header hideRight />
      
      <View style={styles.productListing}>

      </View>

      <TouchableNativeFeedback onPress={toggleModal} background={TouchableNativeFeedback.Ripple('white')}>
        <View style={styles.footer}>
          <Text style={styles.footerText}>Adicionar Produto</Text>
        </View>
      </TouchableNativeFeedback>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
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
  },
  modalContent: {
    backgroundColor: "#282A36",
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(20),
    borderRadius: 10,
    width: '90%',
    elevation: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backdrop: {
    position: "absolute",
    height: Dimensions.get('window').height,
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
  },
  productListing: {
    flex: 0.8,
  },
  footer: {
    flex: 0.1,
    backgroundColor: '#779664',
    justifyContent: 'center',
    alignItems: 'center'
  },
  footerText: {
    fontSize: normalize(22),
    color: 'white',
    fontFamily: 'Roboto-Light'
  },  
  addButton: {
    height: normalize(40),
    width: normalize(50),
    backgroundColor: '#353D4A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 2,
    elevation: 10
  },
})

