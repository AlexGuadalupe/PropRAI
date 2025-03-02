import { Tabs } from 'expo-router'; // Importa el componente de navegación por pestañas de Expo Router
import React from 'react';
import { Platform } from 'react-native'; // Permite detectar la plataforma (iOS o Android)
import { HapticTab } from '@/components/HapticTab'; // Componente personalizado para efecto háptico en pestañas
import { IconSymbol } from '@/components/ui/IconSymbol'; // Componente de icono personalizado
import TabBarBackground from '@/components/ui/TabBarBackground'; // Componente de fondo de la barra de pestañas
import { View } from 'react-native-reanimated/lib/typescript/Animated'; // Se importa pero no se usa en el código

// Componente principal que define la estructura de las pestañas
export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false, // Oculta el encabezado en todas las pantallas dentro de las pestañas
        tabBarButton: HapticTab, // Usa el componente HapticTab para los botones de la barra de pestañas
        tabBarBackground: TabBarBackground, // Usa el componente TabBarBackground como fondo de la barra de pestañas
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // En iOS, la barra de pestañas se posiciona de forma absoluta para permitir el efecto de desenfoque
          },
          default: {}, // En otras plataformas, mantiene el estilo por defecto
        }),
      }}>
      
      {/* Pantalla principal con nombre "index" */}
      <Tabs.Screen
        name="index"
        options={{
          title: 'PropRAI', // Título de la pestaña
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />, // Icono de la pestaña con un símbolo de casa
        }}
      />
      
      {/* Pantalla de exploración con nombre "explore" */}
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore', // Título de la pestaña
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="magnifyingglass" color={color} />, // Icono de la pestaña con un símbolo de avión de papel
        }}
      />
    </Tabs>
  );
}
