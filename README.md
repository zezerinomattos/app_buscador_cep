# React Native CEP Address app_buscador_cep

Este é um projeto em React Native que permite preencher automaticamente um endereço a partir de um CEP digitado pelo usuário. O aplicativo utiliza a API do ViaCEP para obter as informações do endereço com base no CEP fornecido.

## Pré-requisitos

Node.js (v12.0.0 ou superior)
React Native CLI (v2.0.1 ou superior)
Android ou iOS SDK configurado no ambiente de desenvolvimento

## Instalação

1: Clone o repositório do projeto:

git clone https://github.com/seu-usuario/app_buscador_cep.git

cd app_buscador_cep

npm install

OU

yarn install


## Configuração

Abra o arquivo src/services/api.js e verifique se a URL da API do ViaCEP está configurada corretamente. Caso seja necessário, atualize a URL de acordo com as suas necessidades.

import axios from "axios";

const cep_api = axios.create({
    baseURL: 'https://viacep.com.br/ws',
});

export {cep_api};

## Executando o aplicativo

Certifique-se de que o emulador Android esteja em execução ou que um dispositivo movel esteja conectado ao computador. Em seguida, execute o seguinte comando:

npx expo start

## Como usar

1 - Na tela inicial do aplicativo, insira o CEP desejado no campo de texto e pressione o botão "BUSCAR ENDEREÇO PELO CEP".

2 -O aplicativo fará uma chamada à API do ViaCEP para obter as informações do endereço correspondentes ao CEP     fornecido.

3 - Os campos de endereço (rua, bairro, cidade, estado) serão preenchidos automaticamente com as informações   retornadas pela API.

4 - O botão de "ENVIAR FORMULÁRIO", está apenas limpando os campos e colocando o focus no input de CEP. O foco desse projeto é apenas fazer a consulta na api e trazer os dados de endereço.

## Contribuição

Contribuições são bem-vindas! Se você encontrar algum problema ou tiver alguma sugestão, sinta-se à vontade para abrir uma issue ou enviar um pull request.