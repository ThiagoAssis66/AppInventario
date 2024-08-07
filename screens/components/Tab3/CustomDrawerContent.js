import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer'

const CustomDrawerContent = (props) => {
  return (
    <DrawerContentScrollView {...props} contentContainerStyle={styles.drawerContent}>
      <View style={styles.drawerHeader}>
        <Text style={styles.headerText}>Dx Pro App</Text>
      </View>
      <View style={styles.drawerItems}>
        <DrawerItem
          label="Cadastramento de Peças"
          onPress={() => props.navigation.navigate('Cadastramento de Peças')}
          labelStyle={styles.drawerItemLabel}
        />
        <DrawerItem
          label="Iventário de Peças"
          onPress={() => props.navigation.navigate('Iventário de Peças')}
          labelStyle={styles.drawerItemLabel}
        />
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end', alignItems: 'center', padding: 10 }}>
        <Text style={{fontSize: 18, color: '#1c2833'}}>Atlas</Text>
        <Text style={{marginTop: -5, color: '#1c2833'}}> Software Work </Text>
      </View>
    </DrawerContentScrollView>
  )
}


const styles = StyleSheet.create({
  drawerContent: {
    backgroundColor: '#2c3e50',
    flex: 1,
  },
  drawerHeader: {
    padding: 20,
    backgroundColor: '#34495e',
  },
  headerText: {
    fontSize: 20,
    color: '#fff',
  },
  drawerItems: {
    marginTop: 20,
  },
  drawerItemLabel: {
    color: 'tomato',
  },
})

export default CustomDrawerContent
