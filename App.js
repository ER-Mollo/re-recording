import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './src/components/login';
import Recorder from './src/components/recorder';
import Register from './src/components/register';

// import DetailsScreen from './src/views/screens/DetailsScreen';
// import BottomNavigator from './src/views/navigation/BottomNavigator';
// import OnBoardScreen from './src/views/screens/OnBoardScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Recorder" component={Recorder} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
