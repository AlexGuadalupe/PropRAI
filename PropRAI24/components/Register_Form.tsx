import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';

const Register_Form = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [role, setRole] = useState<'agent' | 'client'>('client'); // Default: client

  const handleRegister = () => {
    // Validaciones básicas
    if (!name || !lastName || !email || !password || !confirmPassword || !address || !phone || !birthdate) {
      Alert.alert('Error', 'Por favor, completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Las contraseñas no coinciden');
      return;
    }

    Alert.alert(
      'Registro exitoso',
      `Nombre: ${name} ${lastName}\nEmail: ${email}\nTeléfono: ${phone}\nRol: ${role === 'agent' ? 'Agente' : 'Cliente'}`
    );
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nombre"
        placeholderTextColor="#9CA3AF"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Apellidos"
        placeholderTextColor="#9CA3AF"
        value={lastName}
        onChangeText={setLastName}
      />

      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        placeholderTextColor="#9CA3AF"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Confirmar contraseña"
        placeholderTextColor="#9CA3AF"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <TextInput
        style={styles.input}
        placeholder="Dirección"
        placeholderTextColor="#9CA3AF"
        value={address}
        onChangeText={setAddress}
      />

      <TextInput
        style={styles.input}
        placeholder="Teléfono"
        placeholderTextColor="#9CA3AF"
        keyboardType="phone-pad"
        value={phone}
        onChangeText={setPhone}
      />

      <TextInput
        style={styles.input}
        placeholder="Fecha de nacimiento (YYYY-MM-DD)"
        placeholderTextColor="#9CA3AF"
        value={birthdate}
        onChangeText={setBirthdate}
      />

      <Text style={styles.label}>Selecciona tu rol:</Text>
      <View style={styles.roleContainer}>
        <TouchableOpacity
          style={[styles.roleButton, role === 'client' ? styles.selectedRole : styles.unselectedRole]}
          onPress={() => setRole('client')}
        >
          <Text style={styles.roleText}>Cliente</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.roleButton, role === 'agent' ? styles.selectedRole : styles.unselectedRole]}
          onPress={() => setRole('agent')}
        >
          <Text style={styles.roleText}>Agente</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Registrarse</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingVertical: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  input: {
    borderBottomWidth: 1, // Solo línea en la parte inferior
    borderColor: '#d1d5db',
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginBottom: 12,
    fontSize: 16,
    color: '#4a4a4a',
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
  },
  roleContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  roleButton: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 4,
  },
  selectedRole: {
    backgroundColor: '#236ef3', // Azul//
  },
  unselectedRole: {
    backgroundColor: '#d1d5db',
  },
  roleText: {
    color: 'white',
    fontWeight: 'bold',
  },
  registerButton: {
    backgroundColor: '#236ef3',
    borderRadius: 8,
    paddingVertical: 12,
  },
  registerButtonText: {
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Register_Form;
