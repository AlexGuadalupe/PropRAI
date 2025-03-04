import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, StyleSheet } from 'react-native';
import axios from 'axios';

const Register_Form = () => {
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [isClient, setIsClient] = useState(true);

    const handleRegister = async () => {
        console.log('Checking form fields...');

        if (!name || !lastName || !email || !password || !confirmPassword || !address || !phone || !birthdate) {
            console.log('Form validation failed: Some fields are missing.');
            Alert.alert('Error', 'Por favor, completa todos los campos');
            return;
        }

        if (password !== confirmPassword) {
            console.log('Password mismatch: Passwords do not match.');
            Alert.alert('Error', 'Las contraseñas no coinciden');
            return;
        }

        // Convert the boolean values to 1 or 0
        const userData = {
            nombre: name,
            apellidos: lastName,
            email,
            password,
            direccion: address,
            telefono: phone,
            fecha_de_nacimiento: birthdate,
            cliente: isClient ? 1 : 0,  // Convert boolean to 1 or 0
            agente: !isClient ? 1 : 0,  // Convert boolean to 1 or 0
        };

        console.log('User data prepared:', userData);

        try {
            console.log('Sending POST request to register user...');
            const response = await axios.post('http://192.168.0.6:3000/User', userData);
            console.log('Registration successful:', response.data);

            Alert.alert(
                'Registro exitoso',
                `Nombre: ${response.data.nombre} ${response.data.apellidos}\nEmail: ${response.data.email}\nTeléfono: ${response.data.telefono}\nRol: ${response.data.cliente ? 'Cliente' : 'Agente'}`
            );
        } catch (error) {
            console.error('Error during registration:', error);
            Alert.alert('Error', 'Hubo un problema al crear el usuario');
        }
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.title}>Registro</Text>

            <Text style={styles.label}>Nombre</Text>
            <TextInput style={styles.input} value={name} onChangeText={(text) => { setName(text); console.log('Name changed:', text); }} />

            <Text style={styles.label}>Apellidos</Text>
            <TextInput style={styles.input} value={lastName} onChangeText={(text) => { setLastName(text); console.log('Last name changed:', text); }} />

            <Text style={styles.label}>Correo Electrónico</Text>
            <TextInput style={styles.input} keyboardType="email-address" value={email} onChangeText={(text) => { setEmail(text); console.log('Email changed:', text); }} />

            <Text style={styles.label}>Contraseña</Text>
            <TextInput style={styles.input} secureTextEntry value={password} onChangeText={(text) => { setPassword(text); console.log('Password changed:', text); }} />

            <Text style={styles.label}>Confirmar Contraseña</Text>
            <TextInput style={styles.input} secureTextEntry value={confirmPassword} onChangeText={(text) => { setConfirmPassword(text); console.log('Confirm password changed:', text); }} />

            <Text style={styles.label}>Dirección</Text>
            <TextInput style={styles.input} value={address} onChangeText={(text) => { setAddress(text); console.log('Address changed:', text); }} />

            <Text style={styles.label}>Teléfono</Text>
            <TextInput style={styles.input} keyboardType="phone-pad" value={phone} onChangeText={(text) => { setPhone(text); console.log('Phone number changed:', text); }} />

            <Text style={styles.label}>Fecha de Nacimiento (YYYY-MM-DD)</Text>
            <TextInput style={styles.input} value={birthdate} onChangeText={(text) => { setBirthdate(text); console.log('Birthdate changed:', text); }} />

            <Text style={styles.label}>Selecciona tu Rol:</Text>
            <View style={styles.roleContainer}>
                <TouchableOpacity
                    style={[styles.roleButton, isClient ? styles.selectedRole : styles.unselectedRole]}
                    onPress={() => { setIsClient(true); console.log('Role changed to Client'); }}
                >
                    <Text style={styles.roleText}>Cliente</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.roleButton, !isClient ? styles.selectedRole : styles.unselectedRole]}
                    onPress={() => { setIsClient(false); console.log('Role changed to Agent'); }}
                >
                    <Text style={styles.roleText}>Agente</Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity style={styles.registerButton} onPress={() => { console.log('Register button clicked'); handleRegister(); }}>
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
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#d1d5db',
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginBottom: 12,
        fontSize: 16,
        color: '#4a4a4a',
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
        backgroundColor: '#236ef3',
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
