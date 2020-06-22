import axios from 'axios';

export const clientId = "d2f0jy0xnzkliwtggzo5u9nr4p3s5m";
export const clientSecret = "xfyad218q15f6ce94gqqd20oqfhg6h";

export const fetchAccessToken = async () => {
    let api = axios.create();
    const result = await api.post(`https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`);
    console.log(result.data.access_token);
    localStorage.setItem('accessToken', 'Bearer ' + result.data.access_token);
}