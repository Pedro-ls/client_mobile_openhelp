import AsyncStorage from '@react-native-community/async-storage';
import React, { createContext, useContext, useEffect, useState } from 'react';
import { serviceHttp } from '../services';
import { endpointsAuth } from '../services/auth';

const AuthContext = createContext({});

export function AuthProvider(props) {
   const [user, setUser] = useState(null);
   const [token, setToken] = useState(null);
   const [loadingScreen, setLoadingScreen] = useState(true);

   useEffect(() => {
      const loadStorageData = async () => {
         const storageUser = await AsyncStorage.getItem('RNOpenHelp:user');
         const token = await AsyncStorage.getItem('RNOpenHelp:token')


         if (storageUser && token) {
            setUser(JSON.parse(storageUser));
            setToken(token);
         }
         setLoadingScreen(false);
      };
      loadStorageData();
   }, []);

   async function login(email, password) {
      const { client, token } = await endpointsAuth.authenticate(email, password);

      if (client && token) {
         setUser(client);
         setToken(token);
         await AsyncStorage.setItem('RNOpenHelp:user', JSON.stringify(client));
         await AsyncStorage.setItem('RNOpenHelp:token', token);
      }
   }

   function logout() {
      AsyncStorage.clear().then(() => {
         setUser(null);
      });
   }

   return (
      <AuthContext.Provider
         value={{ signed: !!user, login, logout, user, loadingScreen, token }}>
         {props.children}
      </AuthContext.Provider>
   );
}

export function useAuth() {
   return useContext(AuthContext);
}
