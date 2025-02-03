// Importamos tipos y elementos necesarios de React y React Native
import type { PropsWithChildren, ReactElement } from 'react'; // Tipos para las propiedades y elementos de React
import { StyleSheet } from 'react-native'; // Utilidad para crear estilos en React Native

// Importamos componentes y hooks de la biblioteca react-native-reanimated
import Animated, {
  interpolate, // Permite mapear valores en un rango específico
  useAnimatedRef, // Referencia animada para controlar el componente ScrollView
  useAnimatedStyle, // Hook para definir estilos animados
  useScrollViewOffset, // Hook para obtener el desplazamiento del ScrollView
} from 'react-native-reanimated';

// Importamos componentes y hooks personalizados de nuestra aplicación
import { ThemedView } from '@/components/ThemedView'; // Contenedor que respeta el tema actual
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground'; // Hook para manejar el espaciado del TabBar
import { useColorScheme } from '@/hooks/useColorScheme'; // Hook para determinar el esquema de color (claro u oscuro)

// Constante para la altura del encabezado
const HEADER_HEIGHT = 200;

// Definimos las propiedades del componente usando PropsWithChildren
type Props = PropsWithChildren<{
  headerImage: ReactElement; // Imagen o componente para el encabezado
  headerBackgroundColor: { dark: string; light: string }; // Colores de fondo para temas oscuros y claros
}>;

// Componente principal de ParallaxScrollView
export default function ParallaxScrollView({
  children, // Contenido que se renderizará dentro del componente
  headerImage, // Imagen o componente para el encabezado
  headerBackgroundColor, // Colores de fondo dinámicos basados en el tema
}: Props) {
  // Obtenemos el esquema de color actual (claro o oscuro)
  const colorScheme = useColorScheme() ?? 'light';

  // Creamos una referencia animada para el ScrollView
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  // Obtenemos el desplazamiento actual del ScrollView
  const scrollOffset = useScrollViewOffset(scrollRef);

  // Obtenemos el espaciado inferior para el TabBar
  const bottom = useBottomTabOverflow();

  // Definimos un estilo animado para el encabezado
  const headerAnimatedStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollOffset.value, // Valor actual del desplazamiento
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT], // Rango de entrada
            [-HEADER_HEIGHT / 2, 0, HEADER_HEIGHT * 0.75] // Rango de salida para el desplazamiento vertical
          ),
        },
        {
          scale: interpolate(
            scrollOffset.value, // Valor actual del desplazamiento
            [-HEADER_HEIGHT, 0, HEADER_HEIGHT], // Rango de entrada
            [2, 1, 1] // Rango de salida para la escala
          ),
        },
      ],
    };
  });

  // Renderizamos el componente
  return (
    <ThemedView style={styles.container}>
      {/* ScrollView animado con soporte para paralaje */}
      <Animated.ScrollView
        ref={scrollRef} // Referencia animada para controlar el ScrollView
        scrollEventThrottle={16} // Frecuencia de actualizaciones en milisegundos
        scrollIndicatorInsets={{ bottom }} // Ajuste del indicador de desplazamiento
        contentContainerStyle={{ paddingBottom: bottom }} // Espaciado inferior basado en el TabBar
      >
        {/* Vista animada para el encabezado */}
        <Animated.View
          style={[
            styles.header, // Estilo base del encabezado
            { backgroundColor: headerBackgroundColor[colorScheme] }, // Color de fondo dinámico
            headerAnimatedStyle, // Estilo animado para efectos de paralaje
          ]}
        >
          {headerImage} {/* Contenido del encabezado, como una imagen o componente */}
        </Animated.View>
        {/* Contenido principal debajo del encabezado */}
        <ThemedView style={styles.content}>{children}</ThemedView>
      </Animated.ScrollView>
    </ThemedView>
  );
}

// Estilos del componente usando StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1, // Ocupa todo el espacio disponible
  },
  header: {
    height: HEADER_HEIGHT, // Altura del encabezado definida por la constante
    overflow: 'hidden', // Oculta cualquier contenido que exceda los límites del encabezado
  },
  content: {
    flex: 1, // El contenido ocupa todo el espacio restante
    padding: 32, // Espaciado interno
    gap: 16, // Espaciado entre elementos hijos
    overflow: 'hidden', // Oculta el contenido que desborde los límites
  },
});
