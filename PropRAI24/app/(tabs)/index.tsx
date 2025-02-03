// Importación de módulos necesarios
import React from 'react'; // Importa React para usar JSX y componentes
import { Image, View, Text, TouchableOpacity } from 'react-native'; // Importa componentes de React Native
import { createStackNavigator } from '@react-navigation/stack'; // Importa la funcionalidad para crear navegación en pila (stack)
import ParallaxScrollView from '@/components/ParallaxScrollView'; // Importa un componente personalizado de ScrollView con efecto parallax
import { ThemedText } from '@/components/ThemedText'; // Importa un componente personalizado para texto temático
import { ThemedView } from '@/components/ThemedView'; // Importa un componente personalizado para vistas temáticas
import ButtonRegister from '@/components/ButtonRegister'; // Importa el componente personalizado para el botón de registro
import Card from '@/components/Card'; // Importa el componente personalizado para mostrar una tarjeta de contenido
import Register_Form from '@/components/Register_Form'; // Importa el formulario de registro
import PropertyCard from '@/components/PropertyCard';

// Crear un stack navigator usando react-navigation
const Stack = createStackNavigator();

// Componente HomeScreen que representa la pantalla principal de la aplicación
function HomeScreen({ navigation }) {
  return (
    <ParallaxScrollView 
      headerBackgroundColor={{ light: '#fff', dark: '#fff' }} 
      headerImage={ 
        <Image
          source={require('@/assets/images/logo-nobackground.png')} 
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
          onPress={() => navigation.navigate('Register_Form')}
        >
          <Text style={{ color: 'white', fontWeight: 'bold' }}>Register Now !!</Text>
        </TouchableOpacity>
      </ThemedView>
      <PropertyCard 
        image={require('@/assets/images/1.png')} // Ruta de la imagen
        title="Casa en la Playa"
        pueblo="Rincón"
        precio={250000}
        admin="Juan Pérez"
      />
    </ParallaxScrollView>
  );
}

// Componente principal de la navegación entre pantallas
export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      {/* Define las pantallas del Stack Navigator */}
      <Stack.Screen name="Home" component={HomeScreen} /> 
      <Stack.Screen name="Register_Form" component={Register_Form} /> 
    </Stack.Navigator>
  );
}
