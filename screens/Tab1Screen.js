import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'

import PieChartScreen from './components/Tab1/Graphic'
import CustomDrawerContent from './components/Tab1/CustomDrawerContent'
import DetailsScreen from './components/Tab1/CharData' 


const Drawer = createDrawerNavigator()



const Tab1Screen = () => {  
  return (
    <NavigationContainer independent={true}>
      <Drawer.Navigator
        screenOptions={{
          drawerPosition: 'left',
          headerStyle: {
            backgroundColor: '#1c2833',
            borderBottomWidth: 0,
          },
          headerTintColor: '#fff',
          headerTitle: '',
        }}
        drawerContent={(props) => <CustomDrawerContent {...props} />} 
      >
        <Drawer.Screen name="Gráfico Mensal" component={GraficoMensal} />
        <Drawer.Screen name="Dados do Gráfico" component={DadosGraficos} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const GraficoMensal = () => (
  <View style={styles.container}>
    <PieChartScreen />
  </View>
)

const DadosGraficos = () => (
  <View style={styles.container}>
    <DetailsScreen />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Tab1Screen
