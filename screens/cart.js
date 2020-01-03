import React, {useState} from 'react';
import {View,  StyleSheet, Dimensions, Modal, Text, TouchableOpacity} from 'react-native';
import { Container, Row, Col, Icon, Item, Input, Button, Picker } from 'native-base';

import Header from './../components/cart/header';
import ItemContainer from './../components/cart/item';

export default function Cart(){
  const [addItem, setAddItem] = useState(false);

  // Product Data
  const [name, setName] = useState('');
  const [qtd, setQtd] = useState(0);
  const [type, setType] = useState(-1);
  const [items, setItems] = useState([{
    name: 'a',
    qtd: 1,
    type: 1
  }]);

  const addNewItem = () => {
    if (name === '' || qtd === 0 || type == -1)
    {
      console.warn("Missing data");
    } 
    else 
    {
      const obj = {
        name: name,
        qtd: qtd,
        type: type
      }

      setItems([...items, obj]);
      console.warn(items);
    }
  }

  return (
    <> 
      <Modal
      animationType="fade"
      transparent={true}
      visible={addItem}
      onRequestClose={()=> setAddItem(false)}
      >
        <View style={{width: '100%', height: 780, backgroundColor: 'rgba(0,0,0,0.6)'}}>
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
                <Item style={{borderBottomColor: '#00BE68', marginTop: 15}}>
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
              </Col>
            </Row>
            <Row style={{flex: 0.19, alignItems: 'center', justifyContent: 'center'}}>
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
            </Row>
          </Container>
        </View>
      </Modal>

      <Container style={styles.container}>
        <Header addItemPressed={() => setAddItem(true)}/>
        {items.map((i) => {
          return(
            <ItemContainer name={name} qtd={qtd} type={type}/>
          )
        })}
      </Container>
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
    fontFamily: 'Roboto'
  },
  modalContainer: {
    width: '80%',
    height: '100%',
    backgroundColor: '#2D2D2D',
    alignSelf: 'center',
    margin: 100,
    borderRadius: 15
  },
  modalHeader: {
    backgroundColor: '#00BE68',
    flex: 0.1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15
  },
  modalContent: {
    flex: 1
  }
})