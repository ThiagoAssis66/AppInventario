import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, FlatList, TouchableOpacity, style } from 'react-native';
import { RadioButton } from 'react-native-paper';

const RegistrationFunc = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [cargo, setCargo] = useState('');
  const [setor, setSetor] = useState('');
  const [genero, setGenero] = useState('');
  const [funcionarios, setFuncionarios] = useState([]);

  const handleSubmit = () => {
    if (!nome || !email || !cargo || !setor || !genero) {
      Alert.alert('Erro', 'Todos os campos devem ser preenchidos.');
      return;
    }

    if (!/^[\w.%+-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      Alert.alert('Erro', 'O e-mail fornecido não é válido.');
      return;
    }

    // Adicionar o novo funcionário à lista
    setFuncionarios([
      ...funcionarios,
      { id: Math.random().toString(), nome, email, cargo, setor, genero }
    ]);

    // Limpar os campos após o envio
    setNome('');
    setEmail('');
    setCargo('');
    setSetor('');
    setGenero('');
  };

  const handleDelete = (id) => {
    // Filtrar a lista para remover o item com o ID especificado
    setFuncionarios(funcionarios.filter(item => item.id !== id));
  };

  const renderItem = ({ item }) => (
    <View style={styles.listItem}>
      <View style={styles.listContent}>
        <Text style={styles.listText}>Nome: {item.nome}</Text>
        <Text style={styles.listText}>Email: {item.email}</Text>
        <Text style={styles.listText}>Cargo: {item.cargo}</Text>
        <Text style={styles.listText}>Setor: {item.setor}</Text>
        <Text style={styles.listText}>Gênero: {item.genero}</Text>
      </View>
      <TouchableOpacity onPress={() => handleDelete(item.id)} style={styles.deleteButton}>
        <Text style={styles.deleteText}>X</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro de Funcionário</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Cargo"
        value={cargo}
        onChangeText={setCargo}
      />
      <TextInput
        style={styles.input}
        placeholder="Setor"
        value={setor}
        onChangeText={setSetor}
      />

      <Text style={styles.label}>Gênero</Text>
      <View style={styles.radioContainer}>
        <View style={styles.radioOption}>
          <RadioButton
            value="masculino"
            status={genero === 'masculino' ? 'checked' : 'unchecked'}
            onPress={() => setGenero('masculino')}
          />
          <Text>Masculino</Text>
        </View>
        <View style={styles.radioOption}>
          <RadioButton
            value="feminino"
            status={genero === 'feminino' ? 'checked' : 'unchecked'}
            onPress={() => setGenero('feminino')}
          />
          <Text>Feminino</Text>
        </View>
      </View>

      <Button color="#ff6347" title="Cadastrar" onPress={handleSubmit} />
        <Text style={{fontSize: 22, fontWeight: 'bold', padding: 20, marginTop: 40, color: '#1c2833' }} >       Recém Cadastrados </Text>
      <FlatList
        data={funcionarios}
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
    textAlign: 'center',
    fontWeight: 'bold',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  radioContainer: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
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

export default RegistrationFunc;
