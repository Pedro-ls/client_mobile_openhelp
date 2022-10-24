import {serviceHttp} from '.';

export const endpointsCompanies = {
   async getAll(search) {
      return await serviceHttp.get(`/companies?search=${String(search)}`);
   },
};
