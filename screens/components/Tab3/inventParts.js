import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Dados fictícios de peças de carros
const initialPecas = [
  { id: '1', nome: 'Filtro de Óleo', peso: '0.5 kg', quantidade: 10 },
  { id: '2', nome: 'Pastilhas de Freio', peso: '1.2 kg', quantidade: 25 },
  { id: '3', nome: 'Amortecedor', peso: '3.5 kg', quantidade: 15 },
  { id: '4', nome: 'Bateria', peso: '5.0 kg', quantidade: 8 },
  { id: '5', nome: 'Farol', peso: '2.0 kg', quantidade: 20 },
];

const PecasList = () => {
  const [pecas, setPecas] = useState(initialPecas);

  const handleDelete = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Você tem certeza de que deseja excluir esta peça?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            setPecas((prevPecas) =>
              prevPecas.filter((peca) => peca.id !== id)
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
      <Text style={styles.itemText}>Peso: {item.peso}</Text>
      <Text style={styles.itemText}>Quantidade: {item.quantidade}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Peças de Carro Cadastradas</Text>
      <FlatList
        data={pecas}
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

export default PecasList;
