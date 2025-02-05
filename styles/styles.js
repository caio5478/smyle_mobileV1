import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#407AE5',
    marginBottom: 40,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#407AE5',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonSenha: {
    width: '100%',
    height: 50,
    backgroundColor: '#ffff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 20,
    borderColor: '#407AE5',
    borderWidth: 1,
    padding: 9,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonTextSenha: {
    color: '#407AE5',
    fontSize: 16,
    fontWeight: 'bold',
  },
  registerText: {
    color: '#407AE5',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
  logo: {
    alignItems: 'center',
    marginVertical: 80
  },
  criarConta: {
    color: '#407AE5',
    fontWeight: 'bold',
  },
});

export {styles}; 