import React from 'react';
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Root } from 'native-base';
import {StatusBar} from 'react-native';

import MainNavigator from "./screens";

function MainApp(){
    return (
    <Root>
        <StatusBar backgroundColor="#383838" barStyle="light-content"/>
        <MainNavigator/>
    </Root>
    )
}

AppRegistry.registerComponent(appName, () => MainApp);