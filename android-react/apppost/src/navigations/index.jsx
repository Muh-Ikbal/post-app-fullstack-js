import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import PostIndex from '../screen/posts/Index';
import PostCreate from '../screen/posts/Create';
import PostEdit from '../screen/posts/Edit';

const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="PostIndex"
          component={PostIndex}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PostCreate"
          component={PostCreate}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="PostEdit"
          component={PostEdit}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
