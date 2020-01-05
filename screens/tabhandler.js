import * as React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Home from './home';
import Cart from './cart';


const initialLayout = { width: Dimensions.get('window').width, height: Dimensions.get('screen').height };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'first', title: 'Carrinho'},
    { key: 'second', title: 'Início' },
  ]);

  const renderScene = SceneMap({
    first: Cart,
    second: Home,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={props => <TabBar indicatorStyle={{backgroundColor: '#1C1C1C'}} style={{backgroundColor: '#00BE68', color: '#1C1C1C', elevation: 20}} {...props}/>}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      tabBarPosition="bottom"
      style={{color: '#1C1C1C'}}
      swipeEnabled
    />
  );
}