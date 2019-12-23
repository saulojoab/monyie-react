import * as React from 'react';
import { Dimensions, View, Text } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import Home from './home';

const initialLayout = { width: Dimensions.get('window').width };

export default function TabViewExample() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Início' },
  ]);

  const renderScene = SceneMap({
    first: Home,
  });

  return (
    <TabView
      navigationState={{ index, routes }}
      renderTabBar={props => <TabBar indicatorStyle={{backgroundColor: 'white'}} style={{backgroundColor: '#00BE68'}} {...props}/>}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      tabBarPosition="bottom"
    />
  );
}