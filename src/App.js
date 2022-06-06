import React from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import Home from './screens/Home';
import Details from './screens/Details';
import Constants from './Constants';
import Icon from 'react-native-vector-icons/Ionicons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign: 'center'}}>
        <Stack.Screen name="Home" component={Home} options={headerStyle} />
        <Stack.Screen
          name="Details"
          component={Details}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const headerStyle = {
  title: 'Movies',
  headerStyle: {
    backgroundColor: Constants.baseColor,
  },
  headerTitleStyle: {color: Constants.textColor},
  headerLeft: () => (
    <Icon
      style={{marginLeft: 10}}
      name="menu"
      size={30}
      color={Constants.textColor}
    />
  ),
  headerRight: () => (
    <Icon
      style={{marginRight: 10}}
      name="search"
      size={25}
      color={Constants.textColor}
    />
  ),
};

export default App;
