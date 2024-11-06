import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home Screen</Text>
      <Button title="Salvar" onPress={() => { /* função de salvar */ }} />
      {/* Aqui você pode adicionar uma tabela para exibir os dados */}
    </View>
  );
}
