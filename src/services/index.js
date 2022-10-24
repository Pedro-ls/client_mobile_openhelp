import AsyncStorage from '@react-native-community/async-storage';
import {create} from 'apisauce';
const serviceHttp = create({
   baseURL: 'http://10.131.248.245:5000/api',
});

serviceHttp.addAsyncRequestTransform(async request => {
   const token = await AsyncStorage.getItem('RNOpenHelp:token');
   console.log(token);
   if (token) {
      request.headers['Authorization'] = 'Bearer ' + token;
   }
});

export {serviceHttp};
