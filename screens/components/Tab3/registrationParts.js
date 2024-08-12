import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList, TouchableOpacity } from 'react-native';

const RegistrationPart = () => {
  const [nomePeca, setNomePeca] = useState('');
  const [tamanho, setTamanho] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [peso, setPeso] = useState('');
  const [pecas, setPecas] = useState([]);

  const handleSubmit = () => {
    if (!nomePeca || !tamanho || !quantidade || !peso) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
      return;
    } 

    if (isNaN(quantidade) || isNaN(peso)) {
      Alert.alert('Erro', 'Quantidade e peso devem ser numéricos.');
      return;
    }

    // Adicionar a nova peça à lista
    setPecas([
      ...pecas,
      { id: Math.random().toString(), nomePeca, tamanho, quantidade, peso }
    ]);

    // Limpar os campos após o envio
    setNomePeca('');
    setTamanho('');
    setQuantidade('');
    setPeso('');
  };

  const handleDelete = (id) => {
    // Filtrar a lista para remover a peça com o ID especificado
    setPecas(pecas.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.listContent}>
        <Text style={styles.listText}>Nome: {item.nomePeca}</Text>
        <Text style={styles.listText}>Tamanho: {item.tamanho}</Text>
        <Text style={styles.listText}>Quantidade: {item.quantidade}</Text>
        <Text style={styles.listText}>Peso: {item.peso} kg</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Peças</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome da Peça"
        value={nomePeca}
        onChangeText={setNomePeca}
      />
      <TextInput
        style={styles.input}
        placeholder="Tamanho"
        value={tamanho}
        onChangeText={setTamanho}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantidade"
        value={quantidade}
        onChangeText={setQuantidade}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        placeholder="Peso (kg)"
        value={peso}
        onChangeText={setPeso}
        keyboardType="numeric"
      />

      <Button color="#ff6347" title="Cadastrar" onPress={handleSubmit} />
       <Text style={{fontSize: 22, fontWeight: 'bold', padding: 20, marginTop: 40, color: '#1c2833' }} > Recém Cadastrados </Text>

      <FlatList
        data={pecas}
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

export default RegistrationPart;
