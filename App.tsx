import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import styles from './css/styles';

const App = () => {
  return (
    <View style={styles.container}>
         <Image
        source={require('./assets/logo.png')} // caminho para sua logo
        style={styles.logo}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
      />
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>Criar uma conta</Text>
    </View>
  );
};

export default App;