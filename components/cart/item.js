import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';

export default function ItemContainer(props) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        var icons = {
            0: "utensils",
            1: "laptop-code", 
            2: "smile-beam",
            3: "shower",
            4: "couch"
        }

        setIcon(icons[props.type]);
    }, [])

    return (
        <TouchableOpacity style={styles.container}>
            <View style={{flex: 0.1, borderRightWidth: 2, paddingRight: 5}}>
                <Icon type="FontAwesome5" style={{color: '#00361D'}} name={icon}/>
            </View>
            <View style={{flex: 0.6, padding: 10, flexDirection: 'row', alignItems: 'center'}}>
                <Text style={{color: '#00361D', fontSize: 25, fontFamily: 'Roboto-Black'}}>{props.name}</Text>
                <Text style={{color: '#00361D', fontSize: 20, fontFamily: 'Roboto-Thin', paddingLeft: 5, paddingRight: 10}}>(x{props.qtd})</Text>
            </View>
            <View style={{flex: 0.4, display: 'flex', flexDirection: 'column'}}>
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
        backgroundColor: '#00D072',
        display: 'flex',
        flexDirection: 'row',
        padding: 10,
        alignItems: 'center',
        borderWidth: 0.5,
        borderColor: '#009652',
        borderRadius: 3
    }
})

