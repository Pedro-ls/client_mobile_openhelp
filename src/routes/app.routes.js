import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {colors} from '../colors';
import Chat from '../screens/Home/Pages/chat';
import Update from '../screens/Home/Pages/Client/update';
import Profile from '../screens/Home/Pages/profile';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

export const AppRoutes = () => (
   <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
         name="Home"
         options={{
            header: () => null,
            title: 'Principal',
            headerTintColor: colors.dark.Azul_01,
            headerStyle: {
               backgroundColor: colors.dark.black_02,
            },
            contentStyle: {
               backgroundColor: colors.dark.black_01,
            },
         }}
         component={Home}
      />
      <Stack.Screen
         name="Profile"
         options={{
            title: 'Perfil do usuário',
            headerTintColor: colors.dark.Azul_01,
            headerStyle: {
               backgroundColor: colors.dark.black_02,
            },
            contentStyle: {
               backgroundColor: colors.dark.black_01,
            },
         }}
         component={Profile}
      />
      <Stack.Screen
         name="Update"
         options={{
            title: 'Atualizar sua conta',
            headerTintColor: colors.dark.Azul_01,
            headerStyle: {
               backgroundColor: colors.dark.black_02,
            },
            contentStyle: {
               backgroundColor: colors.dark.black_01,
            },
         }}
         component={Update}
      />
      <Stack.Screen
         name="Chat"
         options={{
            title: 'Conversando com empresa',
            headerTintColor: colors.dark.Azul_01,
            headerStyle: {
               backgroundColor: colors.dark.black_02,
            },
            contentStyle: {
               backgroundColor: colors.dark.black_01,
            },
         }}
         component={Chat}
      />
   </Stack.Navigator>
);
