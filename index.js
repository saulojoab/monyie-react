import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import MainNavigator from "./screens";

AppRegistry.registerComponent(appName, () => MainNavigator);