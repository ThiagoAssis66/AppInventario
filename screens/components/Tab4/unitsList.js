import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Dados fictícios de unidades
const initialUnidades = [
  { id: '1', nome: 'Unidade A', endereco: 'Rua das Flores, 123', cep: '12345-678' },
  { id: '2', nome: 'Unidade B', endereco: 'Avenida Central, 456', cep: '23456-789' },
  { id: '3', nome: 'Unidade C', endereco: 'Praça da Liberdade, 789', cep: '34567-890' },
  { id: '4', nome: 'Unidade D', endereco: 'Rua das Palmeiras, 101', cep: '45678-901' },
  { id: '5', nome: 'Unidade E', endereco: 'Avenida das Nações, 202', cep: '56789-012' },
];

const UnidadesList = () => {
  const [unidades, setUnidades] = useState(initialUnidades);

  const handleDelete = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Você tem certeza de que deseja excluir esta unidade?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            setUnidades((prevUnidades) =>
              prevUnidades.filter((unidade) => unidade.id !== id)
            );
          },
        },
      ],
      { cancelable: true }
    );
  };

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemTitle}>Nome: {item.nome}</Text>
      <Text style={styles.itemText}>Endereço: {item.endereco}</Text>
      <Text style={styles.itemText}>CEP: {item.cep}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unidades Cadastradas</Text>
      <FlatList
        data={unidades}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  itemContainer: {
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    marginBottom: 3,
  },
  deleteButton: {
    marginTop: 10,
    backgroundColor: '#ff4d4d',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  deleteButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 20,
  },
});

export default UnidadesList;
