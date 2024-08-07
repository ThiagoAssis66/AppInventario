import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


import CustomDrawerContent from './components/Tab2/CustomDrawerContent'
const Drawer = createDrawerNavigator()

const Tab2Screen = () => {  
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
        drawerContent={(props) => <CustomDrawerContent {...props} />} // Use o componente personalizado
      >
        <Drawer.Screen name="Cadastro de Funcionário" component={CadastroFuncionario} />
        <Drawer.Screen name="Relatório de Funcionarios" component={RelatorioFuncionario} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}




const CadastroFuncionario = () => (
  <View style={styles.container}>
    <Text> Cadastro de Funcionario </Text>
  </View>
)

const RelatorioFuncionario = () => (
  <View style={styles.container}>
    <Text>Relatorio de Funcionarios</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Tab2Screen
