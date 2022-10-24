import AsyncStorage from '@react-native-community/async-storage';
import React, {createContext, useContext, useEffect, useState} from 'react';
import {serviceHttp} from '../services';
import {endpointsAuth} from '../services/auth';

const AuthContext = createContext({});

export function AuthProvider(props) {
   const [user, setUser] = useState(null);
   const [token, setToken] = useState(null);
   const [loadingScreen, setLoadingScreen] = useState(true);

   useEffect(() => {
      const loadStorageData = async () => {
         const storageUser = await AsyncStorage.getItem('RNOpenHelp:user');
         setToken(await AsyncStorage.getItem('RNOpenHelp:token'));

         if (storageUser) {
            setUser(JSON.parse(storageUser));
            serviceHttp.headers['Authorization'] = 'Bearer ' + token;
         }
         setLoadingScreen(false);
      };
      loadStorageData();
   }, []);

   async function login(email, password) {
      const {client, token} = await endpointsAuth.authenticate(email, password);

      if (client && token) {
         setUser(client);
         await AsyncStorage.setItem('RNOpenHelp:user', JSON.stringify(client));
         await AsyncStorage.setItem('RNOpenHelp:token', token);
         serviceHttp.headers['Authorization'] = 'Bearer ' + token;
      }
   }

   function logout() {
      AsyncStorage.clear().then(() => {
         setUser(null);
      });
   }

   return (
      <AuthContext.Provider
         value={{signed: !!user, login, logout, user, loadingScreen, token}}>
         {props.children}
      </AuthContext.Provider>
   );
}

export function useAuth() {
   return useContext(AuthContext);
}
