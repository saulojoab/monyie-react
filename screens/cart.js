import React, {useState} from 'react';
import {View,  StyleSheet, Dimensions, Modal, Text, TouchableOpacity} from 'react-native';
import { Container, Row, Col, Icon, Item, Input, Button } from 'native-base';

import Header from './../components/cart/header';


export default function Cart(){
  const [addItem, setAddItem] = useState(false);

  return (
    <> 
      <Modal
      animationType="fade"
      transparent={true}
      visible={addItem}
      onRequestClose={()=> setAddItem(false)}
      >
        <View style={{width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.6)'}}>
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
                <Item style={{borderBottomColor: '#00BE68'}}>
                  <Icon active name='pencil-alt' type='FontAwesome5' style={{color: "#00BE68"}} />
                  <Input 
                    keyboardType="default" 
                    placeholder="Nome do Produto" 
                    placeholderTextColor="#329468" 
                    style={{color: '#00BE68', fontFamily: 'Roboto-Light'}}
                  />
                </Item>
                <Item style={{borderBottomColor: '#00BE68', marginTop: 15}}>
                  <Icon active name='cubes' type='FontAwesome5' style={{color: "#00BE68"}} />
                  <Input 
                    keyboardType="number-pad" 
                    placeholder="Quantidade" 
                    placeholderTextColor="#329468" 
                    style={{color: '#00BE68', fontFamily: 'Roboto-Light'}}
                  />
                </Item>
              </Col>
            </Row>
            <Row style={{flex: 0.19, alignItems: 'center', justifyContent: 'center'}}>
              <Button 
                success 
                style={{width: 130, margin: 5, justifyContent: 'center', borderRadius: 15}}
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
    height: '80%',
    width: '80%',
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