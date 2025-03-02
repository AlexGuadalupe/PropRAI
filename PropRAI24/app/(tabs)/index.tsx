import React from 'react';
import { Image, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import ButtonRegister from '@/components/ButtonRegister';
import Register_Form from '@/components/Register_Form';
import PropertyCard from '@/components/PropertyCard';
import Footer from '@/components/Footer';
import Signin from '@/components/Signin';

const Stack = createStackNavigator();

function HomeScreen({ navigation }) {
  return (
<<<<<<< HEAD
    <ParallaxScrollView 
      headerImage={ 
        <Image
          source={require('@/assets/images/logo-proprai.png')} 
          style={{
            width: 200, 
            height: 200, 
            resizeMode: 'contain', 
            justifyContent: 'center', 
            alignItems: 'center'
          }} 
        />
      }>
      <ThemedView style={{ padding: 16 }}> {/* Vista temática */}
        <ThemedText style={{ marginBottom: 20 }} type="subtitle">WELCOME TO PROPRAI</ThemedText>
        <ThemedText style={{ marginBottom: 20 }}>
          Una plataforma simple para agentes y clientes de alquiler de propiedades.
          Registrate y comienza a disfrutar de los beneficios.
        </ThemedText>
        <TouchableOpacity 
          style={{
            backgroundColor: '#007BFF', 
            padding: 12, 
            borderRadius: 8, 
            marginTop: 20, // Margen superior agregado
            alignItems: 'center'
          }} 
=======
    <View style={styles.container}>
      {/* Componente de ScrollView con efecto parallax */}
      <ParallaxScrollView
        headerBackgroundColor={{ dark: 'white', light: 'white' }}
        headerImage={
          <Image
            source={require('@/assets/images/LOGO_PropRAI.png')}
            style={styles.logo}
          />
        }
      >
        {/* Contenido de la pantalla */}
    <ThemedView style={styles.contentContainer} lightColor="white">
        <ThemedText style={styles.subtitle} type="subtitle">
            WELCOME TO PropPRAI
          </ThemedText>
          <ThemedText style={styles.description}>
            Una plataforma simple para agentes y clientes de alquiler de propiedades.
            Regístrate y comienza a disfrutar de los beneficios.
          </ThemedText>

        {/* Botón de registro */}
        <TouchableOpacity
          style={styles.registerButton}
>>>>>>> 5a77913 (logré el fondo blanco en totalidad)
          onPress={() => navigation.navigate('Register_Form')}
        >
          <Text style={styles.registerText}>Register Now !!</Text>
        </TouchableOpacity>

        {/* Botón de Sign In */}
        <TouchableOpacity
          style={styles.signinButton}
          onPress={() => navigation.navigate('Signin')}
        >
          <Text style={styles.signinText}>Sign In</Text>
        </TouchableOpacity>

        {/* Tarjetas de propiedades */}
        <PropertyCard
          image={require('@/assets/images/1.png')}
          title="Casa en la Montaña"
          pueblo="Adjuntas"
          precio={20000}
          admin="Pedro Pérez"
        />
        <PropertyCard
          image={require('@/assets/images/2.png')}
          title="Casa en la Playa"
          pueblo="Rincón"
          precio={25000}
          admin="Juan Pérez"
        />
        <PropertyCard
          image={require('@/assets/images/3.png')}
          title="Apartamento en la Ciudad"
          pueblo="San Juan"
          precio={15000}
          admin="María Rodríguez"
        />
      </ThemedView>
      </ParallaxScrollView>
      {/* Footer */}
      <Footer />
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Register_Form" component={Register_Form} />
      <Stack.Screen name="Signin" component={Signin} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    backgroundColor: 'white',
  },
  logo: {
    width: 'auto',
    height: 100,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  contentContainer: {
    padding: 5,
  },
  subtitle: {
    marginBottom: 20,
  },
  description: {
    marginBottom: 0,
  },
  registerButton: {
    backgroundColor: '#4b57ee', // color violeta-azul //
    padding: 12,
    borderRadius: 8,
    marginTop: 20,
    alignItems: 'center',
  },
  registerText: {
    color: 'white',
    fontWeight: 'bold',
  },
  signinButton: {
    backgroundColor: '#8b35e1', // color violeta //
    padding: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: 'center',
  },
  signinText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
