import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


import CustomDrawerContent from './components/Tab4/CustomDrawerContent'
import RegistrationUnit from './components/Tab4/registrationUnits'
import UnidadesList from './components/Tab4/unitsList'


const Drawer = createDrawerNavigator()

const Tab4Screen = () => {  
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
        <Drawer.Screen name="Cadastramento de Unidades" component={CadastroUnidades} />
        <Drawer.Screen name="Relação de Unidades" component={RelacaoUnidades} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const CadastroUnidades = () => (
  <View style={styles.container}>
    <RegistrationUnit />
  </View>
)

const RelacaoUnidades = () => (
  <View style={styles.container}>
    <UnidadesList />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Tab4Screen
