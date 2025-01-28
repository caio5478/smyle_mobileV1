import React, {useEffect, useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert } from 'react-native';
import styles from './css/styles';
import api from './services/api';

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState(null); // Estado para armazenar dados do backend
  const [error, setError] = useState(null); // Estado para armazenar erros

  useEffect(() => {
    // Função para buscar dados do backend
    const fetchData = async () => {
      try {
        const response = await api.get("/login"); // Substitua pelo endpoint correto
        setData(response.data);
      } catch (err) {
        setError(error);
        console.error("Erro ao buscar dados:");
      }
    };
    fetchData();
  }, []);

 // Função para lidar com o login
 const handleLogin = async () => {
  if (!email || !password) {
    Alert.alert("Erro", "Por favor, preencha todos os campos.");
    return;
  }

  try {
    const response = await api.post("/login", { email, password });
    Alert.alert("Login", `Bem-vindo, ${response.data.user}!`);
  } catch (error) {
    Alert.alert( "Erro ao realizar login.");
    console.error("Erro no login:", error);
  }
};

  return (
    <View style={styles.container}>
         <Image
        source={require('./assets/logo.png')} // caminho para sua logo
        style={styles.logo}
      />
      
      <TextInput
        style={styles.input}
        placeholder="Digite seu e-mail"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Digite sua senha"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <Text style={styles.registerText}>Criar uma conta</Text>
    </View>
  );
};

export default App;