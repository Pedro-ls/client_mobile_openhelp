import {serviceHttp} from '.';

export const endpointsWarnings = {
   getAll: async (page, per_page) => {
      const response = await serviceHttp.get(
         `/warnings?page=${page}&per_page=${per_page}`,
      );

      const res = response.data;
      console.log(res);
      return res;
   },
   async getImage(id) {
      return await serviceHttp.get(`/warnings/image/${id}`);
   },
};
