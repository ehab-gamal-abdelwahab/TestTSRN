import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../activities/HomeScreen'
import DetailsScreen from '../activities/DetailsScreen'


const MainStackNavigation = ({}) => {
  const stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <stack.Navigator
        // screenOptions={{
        //   headerShown: true
        // }}
        >
        <stack.Screen options={{title: 'Posts List'}} name="Home" component={HomeScreen}></stack.Screen>
        <stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{title: 'Post Details'}}></stack.Screen>
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default MainStackNavigation;
