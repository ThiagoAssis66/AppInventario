import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'


import CustomDrawerContent from './components/Tab3/CustomDrawerContent'

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
        <Drawer.Screen name="Cadastramento de Peças" component={CadastroPecas} />
        <Drawer.Screen name="Iventário de Peças" component={InventarioPecas} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}

const CadastroPecas = () => (
  <View style={styles.container}>
    <Text> CadastroPecas </Text>
  </View>
)

const InventarioPecas = () => (
  <View style={styles.container}>
    <Text>InventarioPecas</Text>
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
