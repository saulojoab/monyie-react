import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Icon} from 'native-base';

export default function ItemContainer(props) {
    const [icon, setIcon] = useState(null);

    useEffect(() => {
        var icons = {
            0: (<Icon type="FontAwesome5" name="utensils"/>),
            1: (<Icon type="FontAwesome5" name="laptop-code"/>), 
        }

        setIcon(icons[props.type]);
    }, [])

    return (
        <View style={styles.container}>
            <View>
                {icon}
            </View>
            <View>
                <Text style={{color: 'white'}}>{props.name}</Text>
            </View>
            <View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: 'green',
        display: 'flex',
        flexDirection: 'row'
    }
})

