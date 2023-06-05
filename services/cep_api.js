import axios from "axios";

const cep_api = axios.create({
    baseURL: 'https://viacep.com.br/ws',
});

export {cep_api};