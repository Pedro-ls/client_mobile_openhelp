import { serviceHttp } from "."

export const endpointsClient = {
    register: async (data) => {
        return await serviceHttp.post("/clients", data)
    },
    update: async (data, idClient) => {
        await serviceHttp.put("", {
            data,
            idClient
        })
    },
    delete: async (idClient) => {
        await serviceHttp.delete("", {
            idClient
        })
    }
}