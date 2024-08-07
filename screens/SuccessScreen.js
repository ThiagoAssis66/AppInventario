import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; // Exemplo de ícones

import Tab1Screen from './Tab1Screen';
import Tab2Screen from './Tab2Screen';
import Tab3Screen from './Tab3Screen';
import Tab4Screen from './Tab4Screen';

const Tab = createBottomTabNavigator();

const LogoutButton = ({ navigation }) => {
  const handleLogout = () => {
    Alert.alert(
      "Confirmar Logout",
      "Você tem certeza que deseja sair?",
      [
        {
          text: "Não",
          style: "cancel"
        },
        {
          text: "Sim",
          onPress: () => navigation.navigate('Login')
        }
      ]
    );
  };

  return (
    <TouchableOpacity
      style={styles.logoutButton}
      onPress={handleLogout}
    >
      <Text style={styles.logoutButtonText}>Sair</Text>
    </TouchableOpacity>
  );
};

const SuccessScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1 }}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Gráfico') {
              iconName = 'analytics';
            } else if (route.name === 'Funcionários') {
              iconName = 'people';
            } else if (route.name === 'Peças') {
              iconName = 'construct';
            } else if (route.name === 'Unidades') {
              iconName = 'cube';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          headerShown: false,
          tabBarActiveTintColor: '#ff6347',
          tabBarInactiveTintColor: '#1c2833',
        })}
      >
        <Tab.Screen name="Gráfico" component={Tab1Screen} />
        <Tab.Screen name="Funcionários" component={Tab2Screen} />
        <Tab.Screen name="Peças" component={Tab3Screen} />
        <Tab.Screen name="Unidades" component={Tab4Screen} />
      </Tab.Navigator>
      <LogoutButton navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  logoutButton: {
    position: 'absolute',
    bottom: '91%',
    right: 20,
    backgroundColor: '#ff6347',
    padding: 10,
    borderRadius: 10,
    height: 40,
    width: 60,
    alignItems: 'center',
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default SuccessScreen;
