import React from 'react';

// components react-native
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import Home from './screens/Home';
import Login from './screens/Login';
import Register from './screens/Register';

// instance components
const Stack = createNativeStackNavigator();

function App() {
   return (
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
               name="Sign"
               options={{
                  header: () => null,
                  title: 'Entrar',
               }}
               component={Login}
            />

            <Stack.Screen
               name="Register"
               options={{
                  title: 'Criar nova conta',
               }}
               component={Register}
            />

            <Stack.Screen
               name="Home"
               options={{
                  header: () => null,
                  title: 'Principal',
               }}
               component={Home}
            />
         </Stack.Navigator>
      </NavigationContainer>
   );
}

export default App;
