import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


import CustomDrawerContent from './components/Tab2/CustomDrawerContent'
import RegistrationFunc from './components/Tab2/registrationFunc'
import FuncionarioList from './components/Tab2/funcList'


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
    <RegistrationFunc />
  </View>
)

const RelatorioFuncionario = () => (
  <View style={styles.container}>
    <FuncionarioList />
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
