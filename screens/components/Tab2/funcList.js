import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';

// Dados fictícios de funcionários
const initialFuncionarios = [
  { id: '1', nome: 'Ana Silva', email: 'ana.silva@example.com', cargo: 'Desenvolvedora', setor: 'TI', genero: 'Feminino' },
  { id: '2', nome: 'Carlos Souza', email: 'carlos.souza@example.com', cargo: 'Analista', setor: 'Financeiro', genero: 'Masculino' },
  { id: '3', nome: 'Mariana Costa', email: 'mariana.costa@example.com', cargo: 'Gerente', setor: 'Marketing', genero: 'Feminino' },
  { id: '4', nome: 'Lucas Pereira', email: 'lucas.pereira@example.com', cargo: 'Designer', setor: 'Criativo', genero: 'Masculino' },
  { id: '5', nome: 'Fernanda Lima', email: 'fernanda.lima@example.com', cargo: 'Coordenadora', setor: 'RH', genero: 'Feminino' },
];

const FuncionarioList = () => {
  const [funcionarios, setFuncionarios] = useState(initialFuncionarios);

  const handleDelete = (id) => {
    Alert.alert(
      'Confirmar Exclusão',
      'Você tem certeza de que deseja excluir este funcionário?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            setFuncionarios((prevFuncionarios) =>
              prevFuncionarios.filter((funcionario) => funcionario.id !== id)
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
      <Text style={styles.itemText}>Email: {item.email}</Text>
      <Text style={styles.itemText}>Cargo: {item.cargo}</Text>
      <Text style={styles.itemText}>Setor: {item.setor}</Text>
      <Text style={styles.itemText}>Gênero: {item.genero}</Text>
      <TouchableOpacity style={styles.deleteButton} onPress={() => handleDelete(item.id)}>
        <Text style={styles.deleteButtonText}>Excluir</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
    <Text style={{fontSize: 25, fontWeight: 'bold', textAlign: 'center', padding: 20 }}> Funcionario Cadastrados </Text>
      <FlatList
        data={funcionarios}
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
});

export default FuncionarioList;
