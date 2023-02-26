import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './screens/Home';
import Wordify from './screens/Wordify';
import Leaderboard from './screens/Leaderboard';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Wordify" component={Wordify} />
      </Stack.Group>
      <Stack.Group screenOptions={{presentation: 'modal'}}>
        <Stack.Screen name="Leaderboard" component={Leaderboard} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default StackNavigator;
