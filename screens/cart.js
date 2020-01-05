import React, {useState, useEffect} from 'react';
import {View,  StyleSheet, Dimensions, Modal, Text, TouchableOpacity, Animated, ScrollView, AsyncStorage} from 'react-native';
import { Container, Row, Col, Icon, Item, Input, Button, ActionSheet, Picker, Toast } from 'native-base';

import Header from './../components/cart/header';
import ItemContainer from './../components/cart/item';

export default function Cart(){
  const [addItem, setAddItem] = useState(false);

  // Product Data
  const [name, setName] = useState('');
  const [qtd, setQtd] = useState(0);
  const [type, setType] = useState(-1);
  const [items, setItems] = useState([]);

  useEffect(() => {
    if (AsyncStorage.getItem('list')) {
      console.warn(AsyncStorage.getItem('list'));
      //setItems(JSON.parse(AsyncStorage.getItem('list')));   
    }
  }, [])

  const firstLettersUppercase = (word) => {
    const upper = (word.charAt(0).toUpperCase()) + word.slice(1);
    return upper;
  }

  const addNewItem = () => {
    if (name === '' || qtd === 0 || type == -1)
    {
      Toast.show({
        text: 'Alguns dados estão faltando!',
        buttonText: 'Entendi',
        duration: 3000,
        position: 'bottom',
        type: 'danger'
      });
    } 
    else 
    {
      const words = name.split(' ');
      let newName = "";
      words.map((w, idx) => {
        if (w !== "de"){
          let word = firstLettersUppercase(w);
          if (idx !== words.length){
            word = word + " ";
          }
          newName = newName + word;
        }
      });

      const obj = {
        name: newName,
        qtd: qtd,
        type: type
      }

      setItems([...items, obj]);
    }
  }

  const removeItem = (i) => {
    ActionSheet.show(
      {
        options: [
          { text: "Sim, quero remover", icon: "ios-checkmark-circle", iconColor: "#2c8ef4" },
          { text: "Não, cancela", icon: "close", iconColor: "#25de5b" }
        ],
        cancelButtonIndex: 1,
        destructiveButtonIndex: 1,
        title: "Deseja remover esse item?"
      },
      buttonIndex => {
        if (buttonIndex == 0) {
          const itemsArray = items;
          setItems(itemsArray.filter(it => it !== i));
          Toast.show({
            text: 'Item removido com Sucesso!',
            buttonText: 'Entendi',
            duration: 3000,
            position: 'bottom',
            type: 'success'
          });
        }
      }
    )
  }

  const saveList = () => {
      ActionSheet.show(
        {
          options: [
            { text: AsyncStorage.getItem('list') == null ? "Sim, quero remover" : 'Sim, quero salvar', icon: "ios-checkmark-circle", iconColor: "#2c8ef4" },
            { text: "Não, cancela", icon: "close", iconColor: "#25de5b" }
          ],
          cancelButtonIndex: 1,
          destructiveButtonIndex: 1,
          title: AsyncStorage.getItem('list') == null ? "Você quer sobrescrever a sua lista antiga?" : "Você quer realmente salvar sua lista?"
        },
        async buttonIndex =>  {
          if (buttonIndex == 0) {
            await AsyncStorage.setItem('list', JSON.stringify(items))
            Toast.show({
              text: 'Item removido com Sucesso!',
              buttonText: 'Entendi',
              duration: 3000,
              position: 'bottom',
              type: 'success'
            });
          }
        }
      )
  }

  return (
    <> 
      <Modal
      animationType="fade"
      transparent={true}
      visible={addItem}
      onRequestClose={()=> setAddItem(false)}
      >
        <View style={{width: '100%', height: Dimensions.get('screen').height - 50, display: 'flex', flexDirection: 'column', backgroundColor: 'rgba(0,0,0,0.6)'}}>
          <Container style={styles.modalContainer}>
            <Row style={styles.modalHeader}>
              <Col style={{flex: 0.9}}>
                <Text style={{textAlign: 'center', fontFamily: 'Roboto-Light', fontSize: 25, color: '#2D2D2D', paddingLeft: 10}}>
                  Adicionar Item
                </Text>
              </Col>
              <Col style={{flex: 0.1}}>
                <TouchableOpacity onPress={() => setAddItem(false)}>
                  <Icon name="ios-close"/>
                </TouchableOpacity>
              </Col>
            </Row>
            <Row style={styles.modalContent}>
              <Col style={{padding: 20}}>
                <Text style={{fontFamily: 'Roboto-Thin', fontSize: 28, color: '#00BE68'}}>Preencha os dados do Item:</Text>
                <Item style={{borderBottomColor: '#00BE68', marginTop: 20}}>
                  <Icon active name='pencil-alt' type='FontAwesome5' style={{color: "#00BE68"}} />
                  <Input 
                    keyboardType="default" 
                    placeholder="Nome do Produto" 
                    placeholderTextColor="#329468" 
                    style={{color: '#00BE68', fontFamily: 'Roboto-Light'}}
                    onChangeText={(t) => setName(t)}
                  />
                </Item>
                <Item style={{borderBottomColor: '#00BE68', marginTop: 20}}>
                  <Icon active name='cubes' type='FontAwesome5' style={{color: "#00BE68"}} />
                  <Input 
                    keyboardType="number-pad" 
                    placeholder="Quantidade" 
                    placeholderTextColor="#329468" 
                    style={{color: '#00BE68', fontFamily: 'Roboto-Light'}}
                    onChangeText={(n) => setQtd(n)}
                  />
                </Item>
                <Item  style={{borderBottomColor: '#00BE68', marginTop: 15}}>
                  <Icon active name='question-circle' type='FontAwesome5' style={{color: "#00BE68"}} />
                  <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    style={{color: '#00BE68', fontFamily: 'Roboto-Light'}}
                    onValueChange={(v) => setType(v)}
                    selectedValue={type}
                  >
                    <Picker.Item label="Tipo do Produto" value="-1" />
                    <Picker.Item label="Alimentação" value="0" />
                    <Picker.Item label="Tecnologia" value="1" />
                    <Picker.Item label="Lazer" value="2" />
                    <Picker.Item label="Limpeza" value="3" />
                    <Picker.Item label="Conforto" value="4" />
                  </Picker>
                </Item>
                <View style={{display: 'flex', flexDirection: 'row', marginTop: 20}}>
                  <Button 
                    success 
                    style={{width: 130, margin: 5, justifyContent: 'center', borderRadius: 15}}
                    onPress={() => addNewItem()}
                  >
                    <Text style={{fontFamily: 'Roboto-Light', fontSize: 18}}>Adicionar</Text>
                  </Button>
                  <Button 
                    danger 
                    style={{width: 130, margin: 5, justifyContent: 'center', borderRadius: 15}}
                    onPress={() => setAddItem(false)}
                  >
                    <Text style={{fontFamily: 'Roboto-Light', fontSize: 18}}>Cancelar</Text>
                  </Button>
                </View>
                
              </Col>
            </Row>
          </Container>
        </View>
      </Modal>
      <View style={styles.container}>
      <Header addItemPressed={() => setAddItem(true)}/> 
          {items.length > 0 ? (
            <TouchableOpacity 
            onPress={() => saveList()}
            style={{width: Dimensions.get('screen').width * 0.7,
            alignSelf: 'center',
            margin: 5,
            height: 50, backgroundColor: '#009F71', borderRadius: 5, 
            display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', padding: 10}}>
              <Icon type="FontAwesome5" style={{color: '#2BEEB6'}} name="save"/><Text style={{fontFamily: 'Roboto-Black', fontSize: 25, paddingLeft: 5, color: '#2BEEB6'}}>Salvar Lista</Text>
            </TouchableOpacity>) : <></>}
          <ScrollView style={{width: Dimensions.get('screen').width, flex: 0.9}}>
          {items.length > 0 ? items.map((i) => {
            return(
              <ItemContainer onLongPress={() => removeItem(i)} name={i.name} qtd={i.qtd} type={i.type}/>
            )
          }
        ) : 
        <View style={{padding: 20, justifyContent: 'center', flex: 0.85, paddingTop: 200}}>
          <Text style={{color: '#00BE68', fontFamily: 'Roboto-Thin', fontSize: 35}}>Sua lista de compras está <Text style={{color: '#00BE68', fontFamily: 'Roboto-Black', fontSize: 35}}>vazia</Text>.</Text>
          <Text style={{color: '#00BE68', fontFamily: 'Roboto-Thin', fontSize: 35, textAlign: 'right', marginTop: 30}}>Adicione novos items <Text style={{color: '#00BE68', fontFamily: 'Roboto-Black', fontSize: 35}}>lá em cima</Text>.</Text>
        </View>}

        {items.length > 0 ? (
          <View><Text>Preço total: R$0.0</Text></View>
        ) : <></>}
        </ScrollView>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: Dimensions.get('screen').height,
    backgroundColor: '#1C1C1C',
    alignItems: 'center',
    fontFamily: 'Roboto',
  },
  modalContainer: {
    width: '80%',
    height: Dimensions.get('screen').height,
    backgroundColor: '#2D2D2D',
    alignSelf: 'center',
    margin: 100,
    borderRadius: 15,
  },
  modalHeader: {
    backgroundColor: '#00BE68',
    height: 60,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
})