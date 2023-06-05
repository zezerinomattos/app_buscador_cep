import React, { useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, TextInput, StatusBar, TouchableOpacity, Keyboard } from 'react-native';

import { cep_api } from './services/cep_api';

export default function App() {

  const [cep, setCep] = useState('');

  const [logradouro, setLogradouro] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [municipio, setMunicipio] = useState('');
  const [estado, setEstado] = useState('');
  
  const inputRef = useRef(null);

  async function carregaCep(){
    
    if(cep === ''){
      alert('Digite um cep Valido');
      setCep('');
      inputRef.current.focus();
      return;
    }

    await cep_api.get(`/${cep}/json/`)
      .then(response => {
        setLogradouro(response.data.logradouro);
        setBairro(response.data.bairro);
        setMunicipio(response.data.localidade);
        setEstado(response.data.uf);

        Keyboard.dismiss();
      })
      .catch(error => {
        console.log(error);
      })

  }

  async function enviarForm(){
    setCep('');
    setLogradouro('');
    setComplemento('');
    setBairro('');
    setMunicipio('');
    setEstado('');

    inputRef.current.focus();
  }

  return (
    <View style={styles.container}>
      <StatusBar translucent={false}/>

      <Text style={styles.title}>ENDEREÇO</Text>

      <View style={styles.formContainer}>
        <TextInput
          style={styles.input}
          placeholder='Informe seu CEP'
          placeholderTextColor={'#53736A'}
          keyboardType='numeric'
          value={cep}
          onChangeText={setCep}
          ref={inputRef}
        />

        <TouchableOpacity style={styles.buttonCep} onPress={carregaCep}>
          <Text style={styles.textButtonCep}>BUSCAR ENDEREÇO PELO CEP</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder='Logradouro'
          placeholderTextColor={'#53736A'}
          editable={false}
          value={logradouro}
        />

        <TextInput
          style={styles.input}
          placeholder='Complemento'
          placeholderTextColor={'#53736A'}
          value={complemento}
          onChangeText={setComplemento}
        />

        <TextInput
          style={styles.input}
          placeholder='Bairro'
          placeholderTextColor={'#53736A'}
          editable={false}
          value={bairro}
        />

        <TextInput
          style={styles.input}
          placeholder='Municipio'
          placeholderTextColor={'#53736A'}
          editable={false}
          value={municipio}
        />

        <TextInput
          style={styles.input}
          placeholder='Estado'
          placeholderTextColor={'#53736A'}
          editable={false}
          value={estado}
        />

        <TouchableOpacity style={styles.buttonEnviar} onPress={enviarForm}>
          <Text style={styles.textButtonCep}>ENVIAR FORMULÁRIO</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    alignItems: 'center'
  },
  title:{
    textAlign: 'center',
    marginVertical: 20,
    color: '#2D4B73',
    fontSize: 24,
    fontWeight: 'bold',
  },
  formContainer: {
    flex: 1,
    width: '100%',
    padding: 10,
    alignItems: 'center'
  },
  input:{
    width: '90%',
    height: 40,
    color: '#BF8D30',
    borderWidth: 1,
    borderRadius: 8,
    marginVertical: 5,
    paddingHorizontal: 10
  },
  buttonCep:{
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2D4B73',
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 10,
  },
  textButtonCep:{
    color: '#FFF',
    fontWeight: '700',
    fontSize: 18
  },
  buttonEnviar:{
    width: '90%',
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#127369',
    borderRadius: 8,
    marginBottom: 20,
    marginTop: 10,
  }

});
