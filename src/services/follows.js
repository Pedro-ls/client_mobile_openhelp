import {serviceHttp} from '.';

export const endpointsFollows = {
   async getAll() {
      return await serviceHttp.get('/follows');
   },
   async register(company_id) {
      return await serviceHttp.post('/follows', {
         company_id,
      });
   },
};
