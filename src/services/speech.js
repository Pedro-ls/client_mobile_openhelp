import { serviceHttp } from '.';

export const endpointsSpeeches = {
    async register(follow_id) {
        return await serviceHttp.post('/speeches', {
            follow_id,
        });
    },
    async getAll() {
        const response = await serviceHttp.get('/speeches');
        console.warn("chegou");
        return response
    }
};
