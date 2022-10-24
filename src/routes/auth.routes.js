import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../colors';
import SignIn from '../screens/Login';
import Register from '../screens/Home/Pages/Client/register';
const Stack = createNativeStackNavigator();
export const AuthRoutes = () => {
   return (
      <Stack.Navigator initialRouteName="SignIn">
         <Stack.Screen
            name="SignIn"
            options={{
               header: () => null,
               title: 'Entrar',
            }}
            component={SignIn}
         />

         <Stack.Screen
            name="Register"
            options={{
               title: 'Criar nova conta',
               headerTintColor: colors.dark.Azul_01,
               headerStyle: {
                  backgroundColor: colors.dark.black_02,
               },
               contentStyle: {
                  backgroundColor: colors.dark.black_01,
               },
            }}
            component={Register}
         />
      </Stack.Navigator>
   );
};
