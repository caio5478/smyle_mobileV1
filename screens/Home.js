import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import { styles } from '../css/styles';
import api from '../services/api';
import { useNavigation } from '@react-navigation/native';


const Home = () => {
  const navigation = useNavigation()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [setData] = useState(null); // Estado para armazenar dados do backend
  const [error, setError] = useState(null); // Estado para armazenar erros
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Função para buscar dados do backend
    const fetchData = async () => {
      try {
        const response = await api.get("/login"); // Substitua pelo endpoint correto
        setData(response.data);
      } catch (err) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  // Função para lidar com o login
  const handleLogin = async () => {
    setLoading(true);
    if (!email || !password) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }
    try {
      const response = await api.post("/login", { email, password });
      if (response.data.token) {
        setTimeout(()=>{
          setLoading(false);
          alert('Login realizado com sucesso!');
        }, 3000);
        navigation.navigate("Perfil");
      } else {
        Alert.alert("Erro", "Usuário não encontrado ou credenciais inválidas.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/logo.png')} // caminho para sua logo
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
      <TouchableOpacity style={styles.button} onPress={() => handleLogin()} disabled={loading} >
      {loading ? (
          <ActivityIndicator size="small" color="#FFFFFF"/>
        ) : (
          <Text style={styles.buttonText}>Entrar</Text>
        )}
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSenha}>
        <Text style={styles.buttonTextSenha}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.criarConta}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;