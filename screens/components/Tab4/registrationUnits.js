import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';
import { v4 as uuidv4 } from 'uuid'; // Certifique-se de ter a dependência `uuid`

const RegistrationUnit = () => {
  const [nomeUnidade, setNomeUnidade] = useState('');
  const [endereco, setEndereco] = useState('');
  const [cep, setCep] = useState('');
  const [unidades, setUnidades] = useState([]);

  const handleSubmit = () => {
    if (!nomeUnidade || !endereco || !cep) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
      return;
    }

    // Adicionar a nova unidade à lista
    setUnidades([
      ...unidades,
      { id: uuidv4(), nomeUnidade, endereco, cep }
    ]);

    // Limpar os campos após o envio
    setNomeUnidade('');
    setEndereco('');
    setCep('');
  };

  const handleDelete = (id) => {
    setUnidades(unidades.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.listContent}>
        <Text style={styles.listText}>Nome: {item.nomeUnidade}</Text>
        <Text style={styles.listText}>Endereço: {item.endereco}</Text>
        <Text style={styles.listText}>CEP: {item.cep}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton} accessibilityLabel={`Excluir ${item.nomeUnidade}`} accessibilityHint="Remove esta unidade da lista">
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Unidades Empresariais</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Unidade"
        value={nomeUnidade}
        onChangeText={setNomeUnidade}
        accessibilityLabel="Nome da unidade"
      />
      <TextInput
        style={styles.input}
        placeholder="Endereço"
        value={endereco}
        onChangeText={setEndereco}
        accessibilityLabel="Endereço"
      />
      <TextInput
        style={styles.input}
        placeholder="CEP"
        value={cep}
        onChangeText={setCep}
        keyboardType="numeric"
        accessibilityLabel="CEP"
      />

      <Button color="#ff6347" title="Cadastrar" onPress={handleSubmit} accessibilityLabel="Cadastrar unidade" />
      <Text style={{fontSize: 22, fontWeight: 'bold', padding: 20, marginTop: 40, color: '#1c2833' }} >     Recém Cadastrados </Text>

      <FlatList
        data={unidades}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 25,
    marginBottom: 20,
    padding: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  list: {
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    padding: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  listContent: {
    flex: 1,
  },
  listText: {
    fontSize: 16,
  },
  deleteButton: {
    backgroundColor: 'red',
    borderRadius: 15,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default RegistrationUnit;
