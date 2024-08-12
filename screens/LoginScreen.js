//Login Screen

import React, { useState } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Alert,
  ImageBackground,
  SafeAreaView,
  Image
} from 'react-native'

const backgroundImage = require('../assets/of1.jpg')
const imageLogo = require('../assets/Logo1.png')

const LoginScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [email, setEmail] = useState('') 
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    if (email === 'teste' && password === '123') {
      navigation.navigate('Success')
      Alert.alert('Login efetuado!')
    } else {
      Alert.alert('Erro', 'E-mail ou senha incorretos')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      
        <View style={{ alignItems: 'center', marginTop: 24 }}>
          <Text style={{ fontSize: 16, color: '#2c3e50' }}>Atlas</Text>
          <Text style={{ fontSize: 12, marginTop: -5, color: '#2c3e50' }}>
            Software Work
          </Text>
          <Image source={imageLogo} style={{width: '95%', height: 90, marginTop: '50%', position: 'absolute', }} />
        </View>
        <TouchableOpacity
          style={styles.openButton}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.openButtonText}>Acessar App</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)}>
          <View style={styles.modalBackground}>
            <View style={styles.modalContainer}>
              <Text style={styles.modalTitle}>Informe seus Dados</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Usuário" 
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
              />
              <TextInput
                style={styles.textInput}
                placeholder="Senha"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
              />
              <TouchableOpacity
                style={styles.loginButton}
                onPress={handleLogin}>
                <Text style={styles.loginButtonText}>Entrar</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}>
                <Text style={styles.closeButtonText}> Fechar </Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1, 
  },
  openButton: {
    position: 'absolute',
    backgroundColor: '#1c2833',
    padding: 10,
    width: 150,
    height: 80,
    borderRadius: 60,
    bottom: 80,
    marginLeft: '33%',
  },
  openButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18,
    marginTop: 17, 
    justifyContent: 'row',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContainer: {
    backgroundColor: '#f2f4f4',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    height: '45%',
    alignItems: 'center',
    marginTop: 520,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 15,
    fontWeight: 'bold',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderBottomWidth: 1,
    marginBottom: 15,
    width: '100%',
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#1c2833',
    padding: 10,
    borderRadius: 25,
    marginTop: 15,
    width: '100%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: 'gray',
    padding: 10,
    borderRadius: 25,
    width: '40%',
    alignItems: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontSize: 15,
  },
})

export default LoginScreen
