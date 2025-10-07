import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Image } from "react-native";

export default function Login({ navigation }) {
  const [correo, setCorreo] = useState('');
  const [contrasenia, setContrasenia] = useState('');

  const verificarLogin = () => {
    if (correo === 'admin@gmail.com' && contrasenia === '123') {
      navigation.replace('Home');
    } else {
      console.log("error de acceso");
    }
  };

  return (
    <View style={styles.contenedor}>
      
      <Image 
        source={{ uri: 'https://cdn-icons-png.flaticon.com/512/346/346167.png' }}
        style={styles.logo}
      />
      
      <Text style={styles.titulo}>Bienvenid@</Text>
      <Text style={styles.subtitulo}>Ingresa para seguir floreciendo</Text>

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#9E9E9E"
        value={correo}
        onChangeText={setCorreo}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#9E9E9E"
        secureTextEntry
        value={contrasenia}
        onChangeText={setContrasenia}
      />

      <TouchableOpacity style={styles.boton} onPress={verificarLogin}>
        <Text style={styles.botonTexto}>Ingresar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF9F6', 
    paddingHorizontal: 30,
  },
  logo: {
    width: 90,
    height: 90,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 28,
    fontWeight: '700',
    color: '#A36F9E', 
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 16,
    color: '#7A7A7A',
    marginBottom: 30,
  },
  input: {
    width: '80%', 
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#E8D5E2',
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  boton: {
    backgroundColor: '#A8C686', 
    borderRadius: 12,
    paddingVertical: 14,
    width: '80%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 4,
  },
  botonTexto: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
