import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, TouchableOpacity } from 'react-native';

const Card = ({ backgroundColor, tipText, secondText }: { backgroundColor: string, tipText: string, secondText: string }) => {
  const [scale, setScale] = useState(new Animated.Value(1)); // Animación de escala
  const [blur, setBlur] = useState(new Animated.Value(0)); // Desenfoque

  // Función para manejar el hover (presionar el card en lugar de hover)
  const handlePressIn = () => {
    Animated.timing(scale, {
      toValue: 1.1, // Aumentamos el tamaño al presionar
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.timing(blur, {
      toValue: 10, // Desenfocamos ligeramente
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.timing(scale, {
      toValue: 1, // Restauramos el tamaño
      duration: 400,
      useNativeDriver: true,
    }).start();
    Animated.timing(blur, {
      toValue: 0, // Restauramos el desenfoque
      duration: 400,
      useNativeDriver: true,
    }).start();
  };

  return (
    <Animated.View
      style={[
        styles.card,
        { backgroundColor },
        { transform: [{ scale }] }, // Aplica la animación de escala
        { filter: `blur(${blur}%)` }, // Aplicamos el desenfoque
      ]}
    >
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.cardContent}
      >
        <Text style={styles.tip}>{tipText}</Text>
        <Text style={styles.secondText}>{secondText}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

const CardsContainer = () => {
  return (
    <View style={styles.cards}>
      <Card backgroundColor="#7d50ec" tipText="Cómo funciona" secondText="Lorem Ipsum" />
      <Card backgroundColor="#b31fdb" tipText="Hover Me" secondText="Lorem Ipsum" />
      <Card backgroundColor="#236ef3" tipText="Hover Me" secondText="Lorem Ipsum" />
    </View>
  );
};

const styles = StyleSheet.create({
  cards: {
    flexDirection: 'column', // Disposición en columna
    gap: 15, // Espaciado entre tarjetas
  },
  card: {
    display: 'flex',
    alignItems: 'center', // Centrado horizontal
    justifyContent: 'center', // Centrado vertical
    flexDirection: 'column', // Texto en columna
    textAlign: 'center', // Centrado de texto
    height: 100, // Altura de la tarjeta
    width: 330, // Ancho de la tarjeta
    borderRadius: 10, // Bordes redondeados
    color: 'white', // Color de texto
  },
  cardContent: {
    alignItems: 'center', // Centrado de contenido
    justifyContent: 'center', // Alineación vertical
  },
  tip: {
    fontSize: 16, // Tamaño de la fuente para el texto "Hover Me"
    fontWeight: '700', // Negrita
  },
  secondText: {
    fontSize: 12, // Tamaño de la fuente para el segundo texto
  },
});

export default CardsContainer;
