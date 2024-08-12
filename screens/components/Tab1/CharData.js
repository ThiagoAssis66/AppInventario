import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

// Dados fictícios
const data = [
  { name: 'Óleo', population: 300, color: '#FF6347' },
  { name: 'Filtro de Ar', population: 180, color: '#4682B4' },
  { name: 'Velas', population: 120, color: '#32CD32' },
  { name: 'Pastilhas de Freio', population: 90, color: '#FFD700' },
  { name: 'Bateria', population: 60, color: '#FF69B4' },
];

// Função para calcular porcentagens
const calculatePercentages = (data) => {
  const total = data.reduce((sum, item) => sum + item.population, 0);
  return data.map(item => ({
    ...item,
    percentage: ((item.population / total) * 100).toFixed(2),
  }));
};

const detailedData = calculatePercentages(data);

const renderItem = ({ item }) => (
  <View style={styles.itemContainer}>
    <View style={[styles.colorBar, { backgroundColor: item.color }]} />
    <View style={styles.detailsContainer}>
      <Text style={styles.itemTitle}>{item.name}</Text>
      <Text style={styles.itemText}>Quantidade: {item.population}</Text>
      <Text style={styles.itemText}>Porcentagem: {item.percentage}%</Text>
    </View>
  </View>
);

const DetailsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Detalhes dos Itens</Text>
      <FlatList
        data={detailedData}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  colorBar: {
    width: 10,
    height: 60,
    marginRight: 15,
  },
  detailsContainer: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#666',
  },
});

export default DetailsScreen;
