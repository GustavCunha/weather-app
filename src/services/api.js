import axios from 'axios';

// https://api.hgbrasil.com/weather?key=077b19f7&lat=-23.682&lon=-46.875

export const key = '077b19f7';

const API = axios.create({
    baseURL: 'https://api.hgbrasil.com'
})

export default API;