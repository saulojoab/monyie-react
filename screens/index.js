import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './login';
import TabHandler from './tabhandler';

const MainNavigator = createAppContainer(createStackNavigator({
  Login: {screen: Login, navigationOptions: {header: null}},
  TabHandler: {screen: TabHandler, navigationOptions: {header: null}},
}));

export default MainNavigator;