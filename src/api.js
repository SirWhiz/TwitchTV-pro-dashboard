import axios from 'axios';

import { clientId } from './constants';

let api = axios.create({
    headers: {
        'Client-ID': clientId,
        'Authorization': localStorage.getItem('accessToken')
    }
});

export default api;