import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import { PieChart } from 'react-native-chart-kit'

// Dados fictícios 
const data = [
  { name: 'Óleo', population: 300, color: '#FF6347', legendFontColor: '#000000', legendFontSize: 15 },
  { name: 'Filtro de Ar', population: 180, color: '#4682B4', legendFontColor: '#000000', legendFontSize: 15 }, 
  { name: 'Velas', population: 120, color: '#32CD32', legendFontColor: '#000000', legendFontSize: 15 },
  { name: 'Pastilhas de Freio', population: 90, color: '#FFD700', legendFontColor: '#000000', legendFontSize: 15 }, 
  { name: 'Bateria', population: 60, color: '#FF69B4', legendFontColor: '#000000', legendFontSize: 15 }, 
]



const calculatePercentages = (data) => {
  const total = data.reduce((sum, item) => sum + item.population, 0);
  return data.map(item => ({
    ...item,
    percentage: ((item.population / total) * 100).toFixed(2),
  }))
}

const screenWidth = Dimensions.get('window').width

const PieChartScreen = () => {
  const detailedData = calculatePercentages(data)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Analise Mensal</Text>
      <PieChart
        data={detailedData}
        width={screenWidth - 40} 
        height={220}
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: '#fff',
          backgroundGradientTo: '#fff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          strokeWidth: 2,
          barPercentage: 0.5,
        }}
        accessor="population"
        backgroundColor="transparent"
        paddingLeft="15"
        absolute
       
        decorator={({ value, index }) => (
          <Text style={styles.label}>
            {detailedData[index].name}: {detailedData[index].percentage}%
          </Text>
        )}
      />
      <View style={styles.legend}>
        {detailedData.map((item, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColor, { backgroundColor: item.color }]} />
            <Text style={styles.legendText}>{item.name}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f9f9f9',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    color: '#333',
  },
  label: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    fontSize: 14,
    color: '#1c2833',
  },
  legend: {
    marginTop: 20,
    width: '90%',
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  legendColor: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  legendText: {
    fontSize: 16,
    color: '#333',
  },
})

export default PieChartScreen
