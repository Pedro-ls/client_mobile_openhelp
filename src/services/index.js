import AsyncStorage from '@react-native-community/async-storage';
import { create } from 'apisauce';

const serviceHttp = create({
   baseURL: 'http://192.168.10.103:5000/api',
   timeout: 20000
});

serviceHttp.addAsyncRequestTransform(async request => {
   const token = await AsyncStorage.getItem('RNOpenHelp:token');

   if (token) {
      request.headers['Authorization'] = 'Bearer ' + token;
   }
});

export { serviceHttp };
