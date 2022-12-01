import { serviceHttp } from '.';

export const endpointsMessages = {
    async getAll(follow_id) {
        return await serviceHttp.get('/messages?follow_id=' + follow_id);
    },

    async register(content, follow_id) {
        return await serviceHttp.post('/messages', {
            content,
            follow_id
        });
    }

};
