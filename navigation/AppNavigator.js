import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MealDetails from '../screens/MealDetails';
import MealList from '../screens/MealList';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MealList} />
        <Stack.Screen name="Details" component={MealDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;