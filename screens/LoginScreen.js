// screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>USUÁRIO</Text>
      <TextInput style={styles.input} placeholder="Usuário" />
      <Text style={styles.title}>SENHA</Text>
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry />
      <Button 
        title="ENTRAR" 
        color="#32CD32" 
        onPress={() => navigation.replace('Main')} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f8f8f8'
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    marginBottom: 5
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#eeeeee'
  }
});
