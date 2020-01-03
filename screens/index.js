import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './login';
import TabHandler from './tabhandler';

const MainNavigator = createAppContainer(createStackNavigator({
  TabHandler: {screen: TabHandler, navigationOptions: {header: null}},
  Login: {screen: Login, navigationOptions: {header: null}},
}));

export default MainNavigator;