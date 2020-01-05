import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

export default function ItemContainer(props) {
    const [icon, setIcon] = useState(null);
    const [color, setColor] = useState(null);

    useEffect(() => {
        var icons = {
            0: "utensils",
            1: "laptop-code", 
            2: "smile-beam",
            3: "shower",
            4: "couch"
        }

        var colorList = {
            0: '#BEB66E',
            1: '#66B3CF',
            2: '#C2FF91',
            3: 'lightblue',
            4: '#81C380'
        }

        setIcon(icons[props.type]);
        setColor(colorList[props.type]);
    }, [])

    return (
        <TouchableOpacity onLongPress={props.onLongPress} style={[styles.container, {backgroundColor: color}]}>
            <View style={{flex: 0.15, borderRightWidth: 2, paddingRight: 5, height: '70%', alignItems: 'center'}}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                    <Icon type="FontAwesome5" style={{color: '#00361D'}} name={icon}/>
                </View>
            </View>
            <View style={{flex: 0.7, padding: 10, flexDirection: 'column', alignItems: 'center', justifyContent: "center"}}>
                <Text style={{color: '#00361D', fontSize: 25, fontFamily: 'Roboto-Black', flex: 0.7, textAlign: 'center'}}>{props.name}</Text>
                <Text style={{color: '#00361D', fontSize: 20, fontFamily: 'Roboto-Thin', flex: 0.3, textAlign: 'center'}}>(x{props.qtd})</Text>
            </View>
            <View style={{flex: 0.3, display: 'flex', flexDirection: 'column', borderLeftWidth: 2, padding: 10}}>
                <>
                <Text style={{textAlign: 'center', fontFamily: 'Roboto-Black'}}>PREÇO PROVÁVEL:</Text>
                <Text style={{textAlign: 'center', fontFamily: 'Roboto-Light'}}>Não disponível ainda</Text>
                </>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#009652',
        borderRadius: 3
    }
})

