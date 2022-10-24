import {serviceHttp} from '.';

export const endpointsAuth = {
   authenticate: async (email, password) => {
      var result = await serviceHttp.post('/auth', {
         email,
         password,
      });
      if (result.ok) {
         return result.data;
      } else {
         return null;
      }
   },
   auth: async (email, password) => {
      await serviceHttp.get('/auth');
   },
};
