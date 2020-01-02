import React from 'react';
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import { Root } from 'native-base';

import MainNavigator from "./screens";

function MainApp(){
    return (<Root><MainNavigator/></Root>)
}

AppRegistry.registerComponent(appName, () => MainApp);